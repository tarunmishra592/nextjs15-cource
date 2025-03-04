'use client'

import { use } from "react"


export default function News({ params, searchParams }:{ 
    params: Promise<{ newId: string }>,
    searchParams: Promise<{ cat: string, type: string }>
}){

    const { newId } = use(params)
    const {cat, type} = use(searchParams)


    return(
        <h2>News {newId} {cat} {type}</h2>
    )
}