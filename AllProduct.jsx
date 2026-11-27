import { useNavigate } from "react-router";
import myContext from "../../context/myContext";
import { useContext, useEffect } from "react";
import Loader from "../loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import toast from "react-hot-toast";

const HomePageProductCard = () => {
    const navigate = useNavigate();

    const context = useContext(myContext);
    const { loading, getAllProduct } = context;

    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    // add to cart
    const addCart = (item) => {
        dispatch(addToCart(item));
        toast.success("Added to cart");
    };

    // remove from cart
    const deleteCart = (item) => {
        dispatch(deleteFromCart(item));
        toast.success("Removed from cart");
    };

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <section className="mx-auto max-w-7xl px-4 py-16">
            <h2 className="mb-10 text-center">Bestselling products</h2>

            <div className="flex justify-center">{loading && <Loader />}</div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {getAllProduct.slice(0, 8).map((item) => {
                    const { id, title, price, productImageUrl } = item;
                    const inCart = cartItems.some((p) => p.id === id);

                    return (
                        <article
                            key={id}
                            className="panel group flex h-full flex-col overflow-hidden transition duration-200 hover:border-champagne/60 hover:shadow-glow"
                        >
                            <button
                                onClick={() => navigate(`/productinfo/${id}`)}
                                className="block overflow-hidden"
                                aria-label={`View ${title}`}
                            >
                                <img
                                    className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
                                    src={productImageUrl}
                                    alt={title}
                                />
                            </button>

                            <div className="flex flex-1 flex-col p-6">
                                <h3 className="mb-2 text-xl text-ivory">{title.substring(0, 25)}</h3>
                                <p className="price mb-5">₹{price}</p>

                                <div className="mt-auto">
                                    {inCart ? (
                                        <button onClick={() => deleteCart(item)} className="btn-ghost w-full">
                                            Remove from cart
                                        </button>
                                    ) : (
                                        <button onClick={() => addCart(item)} className="btn-gold w-full">
                                            Add to cart
                                        </button>
                                    )}
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default HomePageProductCard;
