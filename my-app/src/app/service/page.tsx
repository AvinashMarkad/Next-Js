export default function Services() {
    return (
        <div className="bg-white text-black min-h-screen flex flex-col items-center justify-center p-6">
            <div>
                <title>Our Services - Cafe Delight</title>
                <meta name="description" content="Explore the services we offer at Cafe Delight." />
            </div>
            <h1 className="text-4xl font-bold mb-4">Our Services</h1>
            <p className="mb-4">
                At Cafe Delight, we offer a variety of services to ensure you have the best experience possible:
            </p>
            
            <div className="flex flex-wrap justify-center mb-4">
                {/* Card for Freshly brewed coffee and tea */}
                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border border-gray-300 m-4">
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Freshly brewed coffee and tea</div>
                        <p className="text-gray-700 text-base">
                            Enjoy our selection of freshly brewed coffee and tea, made with high-quality ingredients for the perfect flavor.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
                            Add to Order
                        </button>
                    </div>
                </div>

                {/* Card for Pastries and baked goods */}
                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border border-gray-300 m-4">
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Pastries and baked goods</div>
                        <p className="text-gray-700 text-base">
                            Indulge in our freshly baked pastries and delightful baked goods, perfect for any time of day.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
                            Add to Cart
                        </button>
                    </div>
                </div>

                {/* Card for Breakfast and lunch options */}
                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border border-gray-300 m-4">
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Breakfast and lunch options</div>
                        <p className="text-gray-700 text-base">
                            Savor our delicious breakfast and lunch options, crafted to energize your day with fresh ingredients.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
                            Add to Cart
                        </button>
                    </div>
                </div>

                {/* Card for Outdoor seating */}
                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border border-gray-300 m-4">
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Outdoor seating</div>
                        <p className="text-gray-700 text-base">
                            Enjoy your meal in our beautiful outdoor seating area, perfect for soaking up the sun and fresh air.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
                            Add to Cart
                        </button>
                    </div>
                </div>

                {/* Card for Free Wi-Fi */}
                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border border-gray-300 m-4">
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Free Wi-Fi</div>
                        <p className="text-gray-700 text-base">
                            Stay connected with our complimentary Wi-Fi, available throughout the cafe for your convenience.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
                            Add to Cart
                        </button>
                    </div>
                </div>

                {/* Card for Event hosting */}
                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border border-gray-300 m-4">
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Event hosting</div>
                        <p className="text-gray-700 text-base">
                            Host your special events at our cafe, where we provide a warm atmosphere and tailored services to make your occasion unforgettable.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
            <button className="bg-black text-white p-2 rounded hover:bg-gray-800 transition">
    Learn More
</button>


        </div>
    );
}
