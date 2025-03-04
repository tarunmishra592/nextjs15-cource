import { cookies } from "next/headers"

export default async function About(){
    const cookieData = await cookies()
    console.log(cookieData.get('abcd'))
    return(<h2>About Page {new Date().toLocaleTimeString()}</h2>)
}