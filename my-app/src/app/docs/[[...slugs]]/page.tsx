export default function docs({params}:{
    params:{
        slugs:string[]
    }
}){
    if (params.slugs?.length==2){
        return(
            <div>
                <h1>feature {params.slugs[0]} in concept {params.slugs[1]}</h1>
            </div>
        );
    }else if(params.slugs?.length==1){
        return(
            <div>
                <h1>feature {params.slugs[0]}</h1>
            </div>
        );
    };
    return(
        <div>
            <h1>
                docs home page
            </h1>
        </div>
    );
}