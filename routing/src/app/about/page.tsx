import { Metadata } from "next"

export const metadata:Metadata = {
    title: 'About',
    description: 'About description'
}

export default function About(){
    return(<h2>About</h2>)
}