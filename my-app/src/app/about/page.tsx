export default function about() {
    return (
        <>

            <section className="container mx-auto py-16 px-6">
                <h2 className="text-4xl font-bold text-purple-700 text-center mb-10">About Us</h2>
                <div className="flex flex-col md:flex-row items-center">

                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <img src="https://img.freepik.com/premium-photo/fresh-coffee-steams-wooden-table-hot-coffee_1298753-996.jpg?semt=ais_hybrid" alt="Cafe Interior" className="rounded-lg shadow-lg w-full" />
                    </div>


                    <div className="md:w-1/2 md:pl-10">
                        <p className="text-purple-600 text-lg mb-6">
                            At Cafe Delight, we believe in offering a perfect blend of atmosphere and taste. Established in 2010, our mission has been to provide a cozy and welcoming space for coffee lovers and food enthusiasts alike. Whether you're here for a quick coffee or a long brunch with friends, we're here to make your experience unforgettable.
                        </p>
                        <p className="text-purple-600 text-lg mb-6">
                            We pride ourselves on using the finest ingredients in our menu, sourcing locally wherever possible. Our baristas are trained to craft the perfect cup, and our chefs are passionate about creating dishes that surprise and delight.
                        </p>
                        <p className="text-purple-600 text-lg">
                            Come visit us today and experience the warmth of Cafe Delight. We’re more than just a café – we’re a community hub where stories are shared over delicious food and drinks.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}