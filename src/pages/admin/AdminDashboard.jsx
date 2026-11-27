
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ProductDetail from '../../components/admin/ProductDetail';
import OrderDetail from '../../components/admin/OrderDetail';
import UserDetail from '../../components/admin/UserDetail';
import { useContext } from 'react';
import myContext from '../../context/myContext';
import { Link } from "react-router-dom";
import { UserRound } from "lucide-react";

const AdminDashboard = () => {
    const user = JSON.parse(localStorage.getItem('users'));
    const context = useContext(myContext);
    const {getAllProduct, getAllOrder, getAllUser} = context;
    return (
        <div className="dashboard-theme mx-auto max-w-7xl px-4 py-8">
            {/* Top */}
            <div className="mb-6">
                <div className="panel flex flex-wrap items-center justify-between gap-4 p-5">
                    <Link to="/" >
                        <h2 className="text-2xl text-champagne">NonStopShop</h2>
                    </Link>
                    <h1 className="text-3xl font-semibold text-ivory">Admin Dashboard</h1>
                </div>
            </div>

            <div>
                {/* Mid  */}
                <div className="mb-6">
                    {/* main  */}
                    <div className="panel py-6">
                        {/* image  */}
                        <div className="mb-4 flex justify-center">
                            <span className="flex h-20 w-20 items-center justify-center rounded-full border border-champagne/30 bg-smoke">
                                <UserRound aria-hidden="true" className="h-10 w-10 text-champagne" />
                            </span>
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

                {/* Bottom */}
                <div className="">
                    <Tabs>
                        <TabList className="flex flex-wrap justify-center gap-4 text-center">
                            {/* Total Products */}
                            <Tab className="w-full cursor-pointer rounded-2xl border border-smoke bg-coal p-4 transition hover:border-champagne/60 md:w-1/3 sm:w-1/2" selectedClassName="border-champagne shadow-glow">
                                <div className="px-4 py-3">
                                    <div className="mb-3 inline-block h-12 w-12 text-champagne">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={50}
                                            height={50}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-shopping-basket"
                                        >
                                            <path d="m5 11 4-7" />
                                            <path d="m19 11-4-7" />
                                            <path d="M2 11h20" />
                                            <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4" />
                                            <path d="m9 11 1 9" />
                                            <path d="M4.5 15.5h15" />
                                            <path d="m15 11-1 9" />
                                        </svg>

                                    </div>
                                    <h2 className="font-medium text-3xl text-champagne">{getAllProduct.length}</h2>
                                    <p className="font-bold text-stone">Total Products</p>
                                </div>
                            </Tab>

                            {/* Total Order  */}
                            <Tab className="w-full cursor-pointer rounded-2xl border border-smoke bg-coal p-4 transition hover:border-champagne/60 md:w-1/4 sm:w-1/2" selectedClassName="border-champagne shadow-glow">
                                <div className="px-4 py-3">
                                    <div className="mb-3 inline-block h-12 w-12 text-champagne">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={50}
                                            height={50}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-list-ordered"
                                        >
                                            <line x1={10} x2={21} y1={6} y2={6} />
                                            <line x1={10} x2={21} y1={12} y2={12} />
                                            <line x1={10} x2={21} y1={18} y2={18} />
                                            <path d="M4 6h1v4" />
                                            <path d="M4 10h2" />
                                            <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
                                        </svg>
                                    </div>
                                    <h2 className="font-medium text-3xl text-champagne">{getAllOrder.length}</h2>
                                    <p className="font-bold text-stone">Total Orders</p>
                                </div>
                            </Tab>

                            {/* Total User  */}
                            <Tab className="w-full cursor-pointer rounded-2xl border border-smoke bg-coal p-4 transition hover:border-champagne/60 md:w-1/3 sm:w-1/2" selectedClassName="border-champagne shadow-glow">
                                <div className="px-4 py-3">
                                    <div className="mb-3 inline-block h-12 w-12 text-champagne">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={50}
                                            height={50}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-users"
                                        >
                                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                            <circle cx={9} cy={7} r={4} />
                                            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                        </svg>

                                    </div>
                                    <h2 className="font-medium text-3xl text-champagne">{getAllUser.length}</h2>
                                    <p className="font-bold text-stone">Total Users</p>
                                </div>
                            </Tab>
                        </TabList>

                        <TabPanel>
                            <ProductDetail />
                        </TabPanel>

                        <TabPanel>
                            <OrderDetail/>
                        </TabPanel>

                        <TabPanel>
                           <UserDetail/>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;
