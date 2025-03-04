"use client"

import { useRootContext } from "@/components/UserContext"
import { clientFun } from "@/utils/client-lib"
import { useEffect, useState } from "react"


export default function ClientPage(){
    const [value, setValue] = useState('')

    const rootUser = useRootContext()

    const res = clientFun()


    useEffect(() => {
        setValue('Hello Next.js')
    }, [])

    console.log('Client Component', value)
    return<h2>Client Page = {rootUser.name} - {res}</h2>
}