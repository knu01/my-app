import { useNavigate } from "react-router";

// category
const category = [
    { image: 'https://cdn-icons-png.flaticon.com/256/4359/4359963.png', name: 'fashion' },
    { image: 'https://cdn-icons-png.flaticon.com/256/11833/11833323.png', name: 'shirt' },
    { image: 'https://cdn-icons-png.flaticon.com/256/8174/8174424.png', name: 'jacket' },
    { image: 'https://cdn-icons-png.flaticon.com/256/7648/7648246.png', name: 'mobile' },
    { image: 'https://cdn-icons-png.flaticon.com/256/12142/12142416.png', name: 'laptop' },
    { image: 'https://cdn-icons-png.flaticon.com/256/10686/10686553.png', name: 'shoes' },
    { image: 'https://cdn-icons-png.flaticon.com/256/12114/12114279.png', name: 'home' },
    { image: 'https://cdn-icons-png.flaticon.com/256/11946/11946316.png', name: 'books' },
];

const Category = () => {
    const navigate = useNavigate();

    return (
        <section id="categories" className="mx-auto max-w-7xl px-4 py-16">
            <h2 className="mb-10 text-center">Shop by category</h2>

            <div className="hide-scroll-bar flex overflow-x-auto lg:justify-center">
                <div className="flex gap-6 px-2 lg:gap-10">
                    {category.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => navigate(`/category/${item.name}`)}
                            className="group flex shrink-0 flex-col items-center gap-3"
                        >
                            <span className="flex h-20 w-20 items-center justify-center rounded-full border border-smoke bg-coal p-4 transition duration-200 group-hover:border-champagne group-hover:shadow-glow lg:h-24 lg:w-24">
                                <img src={item.image} alt="" className="h-full w-full object-contain" />
                            </span>
                            <span className="text-sm text-stone capitalize transition-colors group-hover:text-champagne lg:text-base">
                                {item.name}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: ".hide-scroll-bar{-ms-overflow-style:none;scrollbar-width:none}.hide-scroll-bar::-webkit-scrollbar{display:none}" }} />
        </section>
    );
};

export default Category;
