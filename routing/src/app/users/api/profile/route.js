import { redirect } from "next/navigation"

export async function GET(){
    redirect('/users/api')
    return Response.json({message: 'User Profile'})
}