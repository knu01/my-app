import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { useSelector } from "react-redux";

const linkClass = "text-stone hover:text-champagne transition-colors";

const Navbar = () => {
    // get user from localStorage
    const user = JSON.parse(localStorage.getItem('users'));

    const navigate = useNavigate();

    // logout: only remove the signed-in user, keep the cart
    const logout = () => {
        localStorage.removeItem('users');
        navigate("/login");
    };

    const cartItems = useSelector((state) => state.cart);

    const navList = (
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 px-5 text-sm font-medium">
            <li><Link className={linkClass} to={'/'}>Home</Link></li>
            <li><Link className={linkClass} to={'/allproduct'}>All products</Link></li>

            {!user && <li><Link className={linkClass} to={'/signup'}>Sign up</Link></li>}
            {!user && <li><Link className={linkClass} to={'/login'}>Log in</Link></li>}

            {user?.role === "user" && <li><Link className={linkClass} to={'/user-dashboard'}>Account</Link></li>}
            {user?.role === "admin" && <li><Link className={linkClass} to={'/admin-dashboard'}>Admin</Link></li>}

            {user && (
                <li>
                    <button className={linkClass} onClick={logout}>Log out</button>
                </li>
            )}

            <li>
                <Link
                    to={'/cart'}
                    className="inline-flex items-center gap-2 rounded-full border border-champagne/60 px-4 py-1.5 text-champagne transition hover:bg-champagne hover:text-ink"
                >
                    Cart
                    <span className="min-w-[1.25rem] rounded-full bg-champagne px-1.5 text-center text-xs font-semibold text-ink">
                        {cartItems.length}
                    </span>
                </Link>
            </li>
        </ul>
    );

    return (
        <nav className="sticky top-0 z-40 border-b border-smoke bg-ink/85 backdrop-blur">
            <div className="mx-auto max-w-7xl items-center px-4 py-3 lg:flex lg:justify-between lg:gap-6">
                {/* brand */}
                <div className="py-3 text-center lg:py-0">
                    <Link to={'/'}>
                        <h2 className="font-serif text-3xl font-semibold tracking-wide text-champagne">
                            NonStopShop
                        </h2>
                    </Link>
                </div>

                {/* links */}
                <div className="mb-4 flex justify-center lg:mb-0">{navList}</div>

                {/* search */}
                <SearchBar />
            </div>
        </nav>
    );
};

export default Navbar;
