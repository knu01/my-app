const features = [
    { title: "Premium T-shirts", text: "Made from 100% cotton." },
    { title: "Quality materials", text: "Every product is made from carefully chosen materials." },
    { title: "Considered design", text: "Products built to look good and last." },
];

const Track = () => {
    return (
        <section className="mx-auto max-w-7xl px-4 py-16">
            <div className="grid gap-6 md:grid-cols-3">
                {features.map((item) => (
                    <div
                        key={item.title}
                        className="panel px-6 py-10 text-center transition duration-200 hover:border-champagne/60"
                    >
                        <svg
                            className="mb-5 inline-block h-12 w-12 text-champagne"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.25}
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                            />
                        </svg>
                        <h3 className="mb-2 text-2xl">{item.title}</h3>
                        <p>{item.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Track;
