"use client"

import { error } from "console";

export default function ErrorPage({error}:{
    error:Error
}) {
    return(
        <div>
            <h1>
                {error.message}
            </h1>
        </div>
    )
}