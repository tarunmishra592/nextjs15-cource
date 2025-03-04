"use client"

import { useFormStatus } from "react-dom"

export default function Submit(){

    const {pending} = useFormStatus()

    return(
        <button
            type="submit"
            disabled={pending}
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            >
             Submit
            </button>
    )
}