export default function home(){
    return(
        <>
        <section className="container mx-auto py-16 text-center">
        <h2 className="text-4xl font-bold text-purple-700 mb-6">
          Welcome to Cafe Delight
        </h2>
        <p className="text-purple-600 text-lg mb-8">
          The perfect place to unwind with a cup of coffee and a delicious meal.
        </p>
        <a href="#" className="bg-purple-500 text-white py-3 px-6 rounded hover:bg-purple-600">
          Explore Our Menu
        </a>
      </section>
     
      <section className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-purple-700 mb-10">Our Specialties</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           
            <div className="bg-purple-100 p-6 rounded-lg shadow-md">
              <h4 className="text-2xl font-bold mb-4">Cappuccino</h4>
              <p className="text-purple-600">Rich and creamy coffee with a velvety finish.</p>
            </div>
            
            <div className="bg-purple-100 p-6 rounded-lg shadow-md">
              <h4 className="text-2xl font-bold mb-4">Blueberry Pancakes</h4>
              <p className="text-purple-600">Fluffy pancakes loaded with fresh blueberries.</p>
            </div>
           
            <div className="bg-purple-100 p-6 rounded-lg shadow-md">
              <h4 className="text-2xl font-bold mb-4">Avocado Toast</h4>
              <p className="text-purple-600">Crispy toast with creamy avocado and seasonings.</p>
            </div>
          </div>
        </div>
      </section>
      </>
    );
}