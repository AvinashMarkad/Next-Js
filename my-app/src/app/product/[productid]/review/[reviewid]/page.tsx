export default function reviewid({params,}:{
    params:{
        productid:string,
        reviewid:string,
    }
}){
    return(
        <div>
            <h1>
                review {params.reviewid} for product {params.productid}
            </h1>
        </div>
    );
}