import { useContext } from "react";
import myContext from "../../context/myContext";

const UserDetail = () => {
    const context = useContext(myContext);
    const { getAllUser } = context;
    return (
        <div>
            <div>
                <div className="py-5 flex justify-between items-center">
                    {/* text  */}
                    <h1 className="text-xl font-bold text-ivory">All Users</h1>
                </div>

                {/* table  */}
                <div className="w-full overflow-x-auto">
                    <table className="dashboard-table">
                        <tbody>
                            <tr>
                                <th scope="col"
                                    className="h-12 px-6 text-md border-l first:border-l-0 border-smoke text-champagne bg-smoke font-bold fontPara">
                                    S.No.
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 text-md border-l first:border-l-0 border-smoke text-champagne bg-smoke font-bold fontPara">
                                    Name
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 text-md border-l first:border-l-0 border-smoke text-champagne bg-smoke font-bold fontPara">
                                    Email
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 text-md border-l first:border-l-0 border-smoke text-champagne bg-smoke font-bold fontPara">
                                    Uid
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 text-md border-l first:border-l-0 border-smoke text-champagne bg-smoke font-bold fontPara">
                                   Role
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 text-md border-l first:border-l-0 border-smoke text-champagne bg-smoke font-bold fontPara">
                                    Date
                                </th>

                            </tr>
                            {
                                getAllUser.map((value, index) => {
                                    return (
                                        <tr key={index} className="text-stone">
                                            <td
                                                className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-smoke stroke-slate-500 text-ivory ">
                                                {index + 1}
                                            </td>

                                            <td
                                                className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-smoke stroke-slate-500 text-ivory first-letter:uppercase ">
                                                {value.name}
                                            </td>

                                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-smoke stroke-slate-500 text-ivory cursor-pointer ">
                                                {value.email}
                                            </td>

                                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-smoke stroke-slate-500 text-ivory  cursor-pointer ">
                                                {value.uid}
                                            </td>

                                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-smoke stroke-slate-500 text-ivory  cursor-pointer ">
                                                {value.role}
                                            </td>

                                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-smoke stroke-slate-500 text-ivory cursor-pointer ">
                                                {value.date}
                                            </td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default UserDetail;
