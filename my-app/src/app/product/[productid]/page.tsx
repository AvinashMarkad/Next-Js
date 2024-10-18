export default function productid({ params, }: { params: { productid: string } }) {
    return (
        <div>
            <h1>product details {params.productid} </h1>
        </div>
    );
}