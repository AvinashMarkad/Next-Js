export default function Menu() {
    const menuItems = [
        {
            name: "Espresso",
            description: "Rich and bold espresso made from freshly ground coffee.",
            price: "$3.00",
        },
        {
            name: "Cappuccino",
            description: "A perfect blend of espresso, steamed milk, and froth.",
            price: "$4.50",
        },
        {
            name: "Croissant",
            description: "Flaky and buttery, the perfect pastry to start your day.",
            price: "$2.50",
        },
        {
            name: "Sandwich",
            description: "A variety of fresh sandwiches made to order.",
            price: "$6.00",
        },
        {
            name: "Salad",
            description: "Fresh garden salad with seasonal ingredients.",
            price: "$5.50",
        },
        {
            name: "Cold Brew",
            description: "Smooth and refreshing cold brew coffee.",
            price: "$4.00",
        },
    ];

    return (
        <section className="container mx-auto py-16 px-6">
            <h2 className="text-4xl font-bold text-center text-black mb-10">Menu</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {menuItems.map((item, index) => (
                    <div key={index} className="bg-gray-100 rounded-lg p-6 shadow-md">
                        <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                        <p className="text-gray-700 mb-4">{item.description}</p>
                        <p className="text-lg font-bold">{item.price}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}