import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import Loader from "../../components/loader/Loader";
import { collection, onSnapshot, query, where } from "firebase/firestore";

const Login = () => {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    const navigate = useNavigate();

    const [userLogin, setUserLogin] = useState({
        email: "",
        password: ""
    });

    /**========================================================================
     *                          User Login Function
    *========================================================================**/

    const userLoginFunction = async () => {
        // validation
        if (userLogin.email === "" || userLogin.password === "") {
            toast.error("All fields are required");
            return;
        }

        setLoading(true);
        try {
            const users = await signInWithEmailAndPassword(auth, userLogin.email, userLogin.password);

            try {
                const q = query(
                    collection(fireDB, "user"),
                    where('uid', '==', users?.user?.uid)
                );
                const data = onSnapshot(q, (QuerySnapshot) => {
                    let user;
                    QuerySnapshot.forEach((doc) => user = doc.data());
                    localStorage.setItem("users", JSON.stringify(user));
                    setUserLogin({
                        email: "",
                        password: ""
                    });
                    toast.success("Logged in");
                    setLoading(false);
                    if (user.role === "user") {
                        navigate('/user-dashboard');
                    } else {
                        navigate('/admin-dashboard');
                    }
                });
                return () => data;
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
            toast.error("Login failed. Check your email and password.");
        }
    };

    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-4">
            {loading && <Loader />}

            {/* soft glow behind the form */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-champagne/10 blur-3xl"
            />

            <div className="relative w-full max-w-md">
                <Link to="/" className="mb-8 block text-center font-serif text-3xl font-semibold text-champagne">
                    NonStopShop
                </Link>

                <form
                    className="panel p-8"
                    onSubmit={(e) => {
                        e.preventDefault();
                        userLoginFunction();
                    }}
                >
                    <h1 className="mb-6 text-center text-3xl md:text-3xl">Welcome back</h1>

                    <div className="mb-4">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email address"
                            aria-label="Email address"
                            autoComplete="email"
                            value={userLogin.email}
                            onChange={(e) => setUserLogin({ ...userLogin, email: e.target.value })}
                            className="field"
                        />
                    </div>

                    <div className="mb-6">
                        <input
                            type="password"
                            placeholder="Password"
                            aria-label="Password"
                            autoComplete="current-password"
                            value={userLogin.password}
                            onChange={(e) => setUserLogin({ ...userLogin, password: e.target.value })}
                            className="field"
                        />
                    </div>

                    <button type="submit" className="btn-gold w-full">Log in</button>

                    <p className="mt-6 text-center text-sm">
                        New here?{" "}
                        <Link className="font-medium text-champagne hover:underline" to="/signup">
                            Create an account
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
