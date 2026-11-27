const testimonials = [
    {
        name: "Kamal Nayan Upadhyay",
        role: "Senior Product Designer",
        image: "https://ecommerce-sk.vercel.app/img/kamal.png",
        text: "I've been shopping on NonStopShop for a few months now, and I always find exactly what I need. The selection is unbeatable, the prices are great, and the customer service is top-notch. I recommend it to all my friends and family!",
    },
    {
        name: "S Mishra",
        role: "UI Developer",
        image: "https://www.devknus.com/img/gawri.png",
        text: "Shopping on this website is incredibly convenient. The website is easy to navigate, the checkout process is seamless, and the customer service is exceptional. Anytime I've had a question or issue, the support team has been quick to respond and resolve it.",
    },
    {
        name: "XYZ",
        role: "CTO",
        image: "https://firebasestorage.googleapis.com/v0/b/devknus-official-database.appspot.com/o/images%2FScreenshot%202023-07-07%20at%202.20.32%20PM-modified.png?alt=media&token=324ddd80-2b40-422c-9f1c-1c1fa34943fa",
        text: "I'm always amazed by the great deals I find on NonStopShop. Not only are the prices competitive, but the frequent sales and discounts make it even more affordable. I feel like I'm getting excellent value for my money with every purchase.",
    },
];

const Testimonial = () => {
    return (
        <section className="mx-auto max-w-7xl px-4 py-16">
            <h2 className="mb-12 text-center">What our customers say</h2>

            <div className="grid gap-6 lg:grid-cols-3">
                {testimonials.map((t) => (
                    <figure key={t.name} className="panel flex h-full flex-col p-8 text-center">
                        <img
                            alt={t.name}
                            src={t.image}
                            className="mx-auto mb-6 h-20 w-20 rounded-full border border-champagne/60 object-cover"
                        />
                        <blockquote className="flex-1 leading-relaxed text-ivory/80">
                            &ldquo;{t.text}&rdquo;
                        </blockquote>
                        <span className="mx-auto mb-4 mt-6 block h-px w-10 bg-champagne" />
                        <figcaption>
                            <p className="font-medium text-ivory">{t.name}</p>
                            <p className="text-sm">{t.role}</p>
                        </figcaption>
                    </figure>
                ))}
            </div>
        </section>
    );
};

export default Testimonial;
