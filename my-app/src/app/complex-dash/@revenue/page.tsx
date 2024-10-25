import Link from "next/link";

export default function revenue() {
  return (
    <>
      <div><h1 className="text-xl font-bold mb-2">Revenue</h1>
      <h1>Revenue</h1>
      </div>
      <button className="bg-black text-white p-2 rounded w-full hover:bg-gray-800 transition">
        <Link href="/complex-dash/transations">Transation</Link>
      </button>
    </>
  );
}
