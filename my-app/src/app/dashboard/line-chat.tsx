import React from 'react';


export function linechart() {
    return (
        <>
            <section className="container mx-auto py-16 text-center h-full bg-white text-black">
                <h2 className="text-4xl font-bold mb-6">Welcome to Cafe Delight</h2>
                <p className="text-lg mb-8">
                    The perfect place to unwind with a cup of coffee and a delicious meal.
                </p>
                <a
                    href="/menu"
                    className="bg-rose-500 text-white py-3 px-6 rounded-[1rem] hover:bg-rose-700"
                >
                    Explore Our Menu
                </a>
            </section>

            <section className="bg-gray-100 py-16">
                <div className="container mx-auto text-center">
                    <h3 className="text-3xl font-bold mb-10 text-black">
                        Our Specialties
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-[1rem] shadow-md">
                            <h4 className="text-2xl font-bold mb-4 text-black">Cappuccino</h4>
                            <p className="text-gray-700">
                                Rich and creamy coffee with a velvety finish.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-[1rem] shadow-md">
                            <h4 className="text-2xl font-bold mb-4 text-black">
                                Blueberry Pancakes
                            </h4>
                            <p className="text-gray-700">
                                Fluffy pancakes loaded with fresh blueberries.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-[1rem] shadow-md">
                            <h4 className="text-2xl font-bold mb-4 text-black">
                                Avocado Toast
                            </h4>
                            <p className="text-gray-700">
                                Crispy toast with creamy avocado and seasonings.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}