// pages/index.js
import Head from 'next/head';

export default function Home() {
    const restaurants = [
        {
            name: 'KFC',
            description: 'Burgers, Rolls & Wraps, Fast Food',
            rating: '4.3 stars',
            cost: '₹ NaN FOR TWO',
            time: 'minutes',
            image: '/images/kfc.jpg',
        },
        {
            name: 'The Belgian Waffle Co.',
            description: 'Waffle, Desserts, Ice Cream, Beverages',
            rating: '4.5 stars',
            cost: '₹ NaN FOR TWO',
            time: 'minutes',
            image: '/images/belgian_waffle.jpg',
        },
        {
            name: 'Burger King',
            description: 'Burgers, American',
            rating: '4.2 stars',
            cost: '₹ NaN FOR TWO',
            time: 'minutes',
            image: '/images/burger_king.jpg',
        },
        {
            name: 'Subway',
            description: 'Healthy Food, Salads, Snacks, Desserts, Beverages',
            rating: '4.3 stars',
            cost: '₹ NaN FOR TWO',
            time: 'minutes',
            image: '/images/subway.jpg',
        },
        {
            name: 'Kwality Walls Ice Cream and More',
            description: 'Desserts, Ice Cream, Ice Cream Cakes',
            rating: '4.4 stars',
            cost: '₹ NaN FOR TWO',
            time: 'minutes',
            image: '/images/kwality_walls.jpg',
        },
        {
            name: 'Khichdi Bar',
            description: 'Healthy Food, Home Food, North Indian, Indian',
            rating: '3.9 stars',
            cost: '₹ NaN FOR TWO',
            time: 'minutes',
            image: '/images/khichdi_bar.jpg',
        },
    ];

    return (
        <div>
            <Head>
                <title>Food Delivery</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="container mx-auto p-4">
                <h1 className="text-4xl font-bold mb-4">Food Delivery</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {restaurants.map((restaurant, index) => (
                        <div key={index} className="border rounded-lg p-4 shadow-lg">
                            <img src={restaurant.image} alt={restaurant.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h2 className="text-2xl font-bold">{restaurant.name}</h2>
                            <p className="text-gray-600">{restaurant.description}</p>
                            <p className="text-yellow-500">{restaurant.rating}</p>
                            <p className="text-gray-600">{restaurant.cost}</p>
                            <p className="text-gray-600">{restaurant.time}</p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
