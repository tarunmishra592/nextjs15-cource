import { SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Header(){
    return(
        <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <div className="text-2xl font-bold text-blue-600"><Link href='/'>Logo</Link></div>
      
      <nav>
        <ul className="hidden md:flex space-x-6 text-gray-700">
          <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
          <li><Link href="/about" className="hover:text-blue-600">About</Link></li>
          <li><Link href="/services" className="hover:text-blue-600">Services</Link></li>
          <li><Link href="/contact" className="hover:text-blue-600">Contact</Link></li>
        </ul>
      </nav>
      <SignedOut>
        <SignInButton>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">Sign In</button>
        </SignInButton>
        <SignUpButton>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">Sign Up</button>
        </SignUpButton>
      </SignedOut>
      <UserButton/>
    </header>
    )
}