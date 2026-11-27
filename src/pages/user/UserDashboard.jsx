import { useContext } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/myContext";
import Loader from "../../components/loader/Loader";

const UserDashboard = () => {
    // user
    const user = JSON.parse(localStorage.getItem('users'));

    const context = useContext(myContext);
    const { loading, getAllOrder } = context
    // console.log(getAllOrder)

    // console.log(user)
    return (
        <Layout>
            <div className=" container mx-auto px-4 py-5 lg:py-8">
                {/* Top  */}
                <div className="top ">
                    {/* main  */}
                    <div className="panel py-6">
                        {/* image  */}
                        <div className="flex justify-center">
                            <img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" alt="" />
                        </div>
                        {/* text  */}
                        <div className="">
                            {/* Name  */}
                            <h1 className="text-center text-lg text-ivory">
                                <span className="font-bold text-stone">Name: </span>
                                {user?.name}
                            </h1>

                            {/* Email  */}
                            <h1 className="text-center text-lg text-ivory">
                                <span className="font-bold text-stone">Email: </span>
                                {user?.email}
                            </h1>

                            {/* Date  */}
                            <h1 className="text-center text-lg text-ivory">
                                <span className="font-bold text-stone">Date: </span>
                                {user?.date}
                            </h1>

                            {/* Role  */}
                            <h1 className="text-center text-lg text-ivory">
                                <span className="font-bold text-stone">Role: </span>
                                {user?.role}
                            </h1>
                        </div>
                    </div>
                </div>

                {/* bottom  */}
                <div className="bottom">
                    {/* main 1 */}
                    <div className="mx-auto my-4 max-w-6xl px-2 md:my-6 md:px-0">
                        {/* text  */}
                        <h2 className="mb-5 text-2xl font-semibold text-ivory lg:text-3xl">Order Details</h2>

                        <div className="flex justify-center relative top-10">
                        {loading && <Loader/>}
                        </div>

                        {/* main 2 */}
                        {getAllOrder.filter((obj) => obj.userid === user?.uid).map((order, index) => {
                            // console.log(order);
                            return (
                                <div key={index}>
                                    {order.cartItems.map((item, index) => {
                                        // console.log('item', item);
                                        const { id, date, quantity, price, title, productImageUrl, category } = item
                                        // console.log('order', order)
                                        const { status } = order
                                        return (
                                            <div key={index} className="panel mt-5 flex flex-col overflow-hidden md:flex-row">
                                                {/* main 3  */}
                                                <div className="w-full border-b border-smoke bg-smoke/40 md:max-w-xs md:border-b-0 md:border-r">
                                                    {/* left  */}
                                                    <div className="p-8">
                                                        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-1">
                                                            <div className="mb-4">
                                                                <div className="text-sm font-semibold text-stone">Order ID</div>
                                                                <div className="break-all text-sm font-medium text-ivory">#{id}</div>
                                                            </div>

                                                            <div className="mb-4">
                                                                <div className="text-sm font-semibold text-stone">Date</div>
                                                                <div className="text-sm font-medium text-ivory">{date}</div>
                                                            </div>

                                                            <div className="mb-4">
                                                                <div className="text-sm font-semibold text-stone">Total Amount</div>
                                                                <div className="text-sm font-medium text-champagne">₹ {price * quantity}</div>
                                                            </div>

                                                            <div className="mb-4">
                                                                <div className="text-sm font-semibold text-stone">Order Status</div>
                                                                {status === 'pending' ?
                                                                    <div className="text-sm font-medium text-red-400 first-letter:uppercase">{status}</div>
                                                                    : <div className="text-sm font-medium text-emerald-400 first-letter:uppercase">{status}</div>
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* right  */}
                                                <div className="flex-1">
                                                    <div className="p-8">
                                                        <ul className="-my-7 divide-y divide-smoke">
                                                            <li
                                                                className="flex flex-col justify-between space-x-5 py-7 md:flex-row"
                                                            >
                                                                <div className="flex flex-1 items-stretch">
                                                                    <div className="flex-shrink-0">
                                                                        <img
                                                                        className="h-40 w-40 rounded-lg border border-smoke bg-ink object-contain"
                                                                            src={productImageUrl}
                                                                            alt="img"
                                                                        />
                                                                    </div>

                                                                    <div className="ml-5 flex flex-col justify-between">
                                                                        <div className="flex-1">
                                                                            <p className="text-sm font-bold text-ivory">{title}</p>
                                                                            <p className="mt-1.5 text-sm font-medium text-stone">{category}</p>
                                                                        </div>

                                                                        <p className="mt-4 text-sm font-medium text-stone">x {quantity}</p>
                                                                    </div>
                                                                </div>

                                                                <div className="ml-auto flex flex-col items-end justify-between">
                                                                    <p className="text-right text-sm font-bold text-champagne">₹ {price}</p>
                                                                </div>
                                                            </li>
                                                        </ul>

                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default UserDashboard;

