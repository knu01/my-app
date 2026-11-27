import { useContext, useState } from "react";
import myContext from "../../context/myContext";
import { useNavigate } from "react-router";

const SearchBar = () => {
    const context = useContext(myContext);
    const { getAllProduct } = context;

    const [search, setSearch] = useState("");

    // case-insensitive match on the product title
    const query = search.trim().toLowerCase();
    const filterSearchData = getAllProduct
        .filter((obj) => obj.title.toLowerCase().includes(query))
        .slice(0, 8);

    const navigate = useNavigate();

    return (
        <div className="relative mx-auto w-full max-w-sm lg:mx-0 lg:w-96">
            <input
                type="text"
                placeholder="Search products"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="field"
            />

            {query && (
                <div className="absolute left-0 right-0 z-50 mt-2 max-h-96 overflow-y-auto rounded-xl border border-smoke bg-coal p-2 shadow-2xl">
                    {filterSearchData.length > 0 ? (
                        filterSearchData.map((item) => (
                            <button
                                key={item.id}
                                className="flex w-full items-center gap-3 rounded-lg px-2 py-2 text-left text-ivory transition hover:bg-smoke"
                                onClick={() => {
                                    setSearch("");
                                    navigate(`/productinfo/${item.id}`);
                                }}
                            >
                                <img className="h-10 w-10 rounded object-cover" src={item.productImageUrl} alt="" />
                                <span className="text-sm">{item.title}</span>
                            </button>
                        ))
                    ) : (
                        <p className="px-3 py-4 text-center text-sm">No products match your search.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default SearchBar;
