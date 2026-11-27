import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
        <section className="relative overflow-hidden border-b border-smoke">
            {/* soft champagne glow behind the headline */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-40 left-1/2 h-[28rem] w-[48rem] -translate-x-1/2 rounded-full bg-champagne/10 blur-3xl"
            />

            <div className="relative mx-auto max-w-4xl px-6 py-24 text-center md:py-36">
                <h1>Open every hour of every day.</h1>

                <p className="mx-auto mt-6 max-w-xl text-lg">
                    Fashion, electronics, books and home essentials, delivered when you need them.
                </p>

                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Link to="/allproduct" className="btn-gold">Shop all products</Link>
                    <a href="#categories" className="btn-ghost">Browse categories</a>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
