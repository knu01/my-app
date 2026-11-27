import { useNavigate } from "react-router";
import Layout from "../../components/layout/Layout";
import { useContext, useEffect } from "react";
import myContext from "../../context/myContext";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import Loader from "../../components/loader/Loader";


const AllProduct = () => {
    const navigate = useNavigate();

    const context = useContext(myContext);
    const { loading, getAllProduct } = context;

    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const addCart = (item) => {
        // console.log(item)
        dispatch(addToCart(item));
        toast.success("Add to cart")
    }

    const deleteCart = (item) => {
        dispatch(deleteFromCart(item));
        toast.success("Delete cart")
    }

    // console.log(cartItems)

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])
    return (
        <Layout>
            <section className="mx-auto max-w-7xl px-4 py-10">
                <h1 className="mb-10 text-center text-3xl font-medium text-ivory">
                    All Products
                </h1>

                <div className="flex justify-center">{loading && <Loader />}</div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {getAllProduct.map((item) => {
                        const { id, title, price, productImageUrl } = item;
                        const inCart = cartItems.some((product) => product.id === id);

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
                                    <p className="mb-2 text-xs tracking-luxe text-stone">E-bharat</p>
                                    <h2 className="mb-3 min-h-12 text-lg font-semibold leading-snug text-ivory">
                                        {title}
                                    </h2>
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
        </Layout>
    );
}

export default AllProduct;