import { notFound } from "next/navigation";

export default function reviewid({params,}:{
    params:{
        productid:string,
        reviewid:string,
    }
}){
    if(parseInt(params.reviewid) && parseInt(params.productid) >100){
        notFound();
    }
    return(
        <div>
            <h1>
                review {params.reviewid} for product {params.productid}
            </h1>
        </div>
    );
}