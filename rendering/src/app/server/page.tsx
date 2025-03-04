import { serverFun } from "@/utils/server-lib"


export default function ServerPage(){
    console.log('Server Component')
    const res = serverFun()
    return<h2>Server Page - {res}</h2>
}