import { notFound } from "next/navigation";

export default function productid({
  params,
}: {
  params: { productid: string };
}) {
    
  if (parseInt(params.productid) > 25) {
    notFound();
  }

  return (
    <div>
      <h1>product details {params.productid} </h1>
    </div>
  );
}