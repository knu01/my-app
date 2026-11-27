import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import Loader from "../loader/Loader";
import { deleteDoc, doc } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import toast from "react-hot-toast";

const ProductDetail = () => {
    const context = useContext(myContext);
    const { loading, setLoading, getAllProduct, getAllProductFunction } = context;
    // console.log(getAllProduct)

    // navigate 
    const navigate = useNavigate();

    // Delete product 
    const deleteProduct = async (id) => {
        setLoading(true)
        try {
            await deleteDoc(doc(fireDB, 'products', id))
            toast.success('Product Deleted successfully')
            getAllProductFunction();
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }
    return (
        <div>
            <div className="py-5 flex justify-between items-center">
                {/* text  */}
                <h1 className="text-xl font-bold text-ivory">All Products</h1>
                {/* Add Product Button  */}
                <Link to={'/addproduct'}>
                    <button className="btn-gold">Add Product</button>
                </Link>
            </div>

            {/* Loading  */}
            <div className="flex justify-center relative top-20">
                {loading && <Loader />}
            </div>

            {/* table  */}
            <div className="w-full overflow-x-auto mb-5">

                <table className="dashboard-table">

                    <tbody>
                        <tr>
                            <th scope="col" className="h-12 px-6 text-md border-l first:border-l-0 border-smoke text-champagne bg-smoke font-bold fontPara">S.No.</th>
                            <th scope="col" className="h-12 px-6 text-md border-l first:border-l-0 border-smoke text-champagne bg-smoke font-bold fontPara">Image</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-smoke text-champagne bg-smoke">Title</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-smoke text-champagne bg-smoke">Price</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-smoke text-champagne bg-smoke">Category</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-smoke text-champagne bg-smoke"> Date</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-smoke text-champagne bg-smoke">Action</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-smoke text-champagne bg-smoke">Action</th>
                        </tr>
                        {getAllProduct.map((item, index) => {
                            const { id, title, price, category, date, productImageUrl } = item
                            return (
                                <tr key={index} className="text-stone">
                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-smoke stroke-slate-500 text-ivory ">
                                        {index + 1}.
                                    </td>
                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-smoke stroke-slate-500 text-ivory first-letter:uppercase ">
                                        <div className="flex justify-center">
                                            <img className="w-20 " src={productImageUrl} alt="" />
                                        </div>
                                    </td>
                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-smoke stroke-slate-500 text-ivory first-letter:uppercase ">
                                        {title}
                                    </td>
                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-smoke stroke-slate-500 text-ivory first-letter:uppercase ">
                                        ₹{price}
                                    </td>
                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-smoke stroke-slate-500 text-ivory first-letter:uppercase ">
                                        {category}
                                    </td>
                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-smoke stroke-slate-500 text-ivory first-letter:uppercase ">
                                        {date}
                                    </td>
                                    <td onClick={()=> navigate(`/updateproduct/${id}`)} className="dashboard-table-edit">
                                        Edit
                                    </td>
                                    <td onClick={()=> deleteProduct(id)} className="dashboard-table-delete">
                                        Delete
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ProductDetail;
