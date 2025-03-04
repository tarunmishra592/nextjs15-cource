'use client'

import { useEffect, useState } from "react"

export default function ClientData(){

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        
        async function getUsers(){
            try{
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                if(!response.ok){
                    throw new Error('Something went wrong')
                }
                const userData = await response.json()
                setData(userData)
            }catch(err) {
                if(err instanceof Error){
                    setError(err.message)
                }
            }finally{
                setLoading(false)
            }
            
        }
        getUsers()
    }, [])

    if(loading){
        return <p className="text-white">Loading....</p>
    }

    if(error){
        return(
            <p>{error}</p>
        )
    }

    return(
        <div>
            <h2>Client Data</h2>
            <ul>
                {data.map(user => <li className="p-6 bg-white text-gray-900 border border-gray-200 rounded-lg shadow-sm" key={user.id}>
                    <h3>Name: {user.name}</h3>
                    <p>Email: {user.email}</p>
                </li>)}
            </ul>
        </div>
    )
}