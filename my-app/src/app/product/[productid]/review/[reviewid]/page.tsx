"use client"

import { notFound } from "next/navigation";

// export const metadata = {
//     title: 'Review',
//     description: 'Generated by next app',
//   }

function getRandomInt(count:number){
    return Math.floor(Math.random()*count)
}

export default function reviewid({params,}:{
    params:{
        productid:string,
        reviewid:string,
    }
}){
    const random = getRandomInt(2);

    if (random === 1){
        throw new Error ("Page Is Loadding or in Under Construction wait 1 min")
    }

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