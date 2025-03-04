import Link from "next/link";

export default function InterceptedI2(){
    return(
        <h2>I2 Page Intercepted (.) <Link href={"/i1"}>I1</Link></h2>
    )
}