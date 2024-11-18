export default function Contact() {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col items-center justify-center p-6">
      <div>
        <title>Contact Us - Cafe Delight</title>
        <meta
          name="description"
          content="Get in touch with us at Cafe Delight."
        />
      </div>
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="mb-4 text-center">
        We're here to help! Feel free to reach out with any questions or
        inquiries.
      </p>

      <div className="max-w-md w-full bg-gray-100 rounded-[1rem] p-6 shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="shadow appearance-none border rounded-[1rem] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="shadow appearance-none border rounded-[1rem] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your Message"
              className="shadow appearance-none border rounded-[1rem] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows={4}
              required
            ></textarea>
          </div>
          <button className="bg-rose-500 text-white p-2 rounded-[1rem] hover:bg-rose-700 transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
