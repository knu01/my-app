import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";
import Loader from "../../components/loader/Loader";

const Signup = () => {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    const navigate = useNavigate();

    const [userSignup, setUserSignup] = useState({
        name: "",
        email: "",
        password: "",
        role: "user"
    });

    /**========================================================================
     *                          User Signup Function
    *========================================================================**/

    const userSignupFunction = async () => {
        // validation
        if (userSignup.name === "" || userSignup.email === "" || userSignup.password === "") {
            toast.error("All fields are required");
            return;
        }

        setLoading(true);
        try {
            const users = await createUserWithEmailAndPassword(auth, userSignup.email, userSignup.password);

            // create user object
            const user = {
                name: userSignup.name,
                email: users.user.email,
                uid: users.user.uid,
                role: userSignup.role,
                time: Timestamp.now(),
                date: new Date().toLocaleString(
                    "en-US",
                    {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                    }
                )
            };

            // add user details
            const userRefrence = collection(fireDB, "user");
            addDoc(userRefrence, user);

            setUserSignup({
                name: "",
                email: "",
                password: "",
                role: "user"
            });

            toast.success("Account created");

            setLoading(false);
            navigate('/login');
        } catch (error) {
            console.log(error);
            setLoading(false);
            toast.error("Signup failed. Check your details and try again.");
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
                        userSignupFunction();
                    }}
                >
                    <h1 className="mb-6 text-center text-3xl md:text-3xl">Create your account</h1>

                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Full name"
                            aria-label="Full name"
                            autoComplete="name"
                            value={userSignup.name}
                            onChange={(e) => setUserSignup({ ...userSignup, name: e.target.value })}
                            className="field"
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Email address"
                            aria-label="Email address"
                            autoComplete="email"
                            value={userSignup.email}
                            onChange={(e) => setUserSignup({ ...userSignup, email: e.target.value })}
                            className="field"
                        />
                    </div>

                    <div className="mb-6">
                        <input
                            type="password"
                            placeholder="Password"
                            aria-label="Password"
                            autoComplete="new-password"
                            value={userSignup.password}
                            onChange={(e) => setUserSignup({ ...userSignup, password: e.target.value })}
                            className="field"
                        />
                    </div>

                    <button type="submit" className="btn-gold w-full">Sign up</button>

                    <p className="mt-6 text-center text-sm">
                        Already have an account?{" "}
                        <Link className="font-medium text-champagne hover:underline" to="/login">
                            Log in
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Signup;
