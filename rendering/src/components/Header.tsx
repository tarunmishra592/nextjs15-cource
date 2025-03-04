import Link from "next/link";
import UserSearch from "./UserSearch";

export default function Header(){


    return(
        <header className="bg-white">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <strong className=" text-gray-900">Logo</strong>
          </Link>
        </div>
        
        <div className="flex gap-8 text-gray-900 text-sm">
            <Link href='/about'>About</Link>
            <Link href='/products'>Products</Link>
            <Link href='/client'>Client</Link>
            <Link href='/server'>Server</Link>
        </div>
        
        <div className="lg:flex lg:flex-1 lg:justify-end">
          <UserSearch/>
        </div>
      </nav>
    </header>
    )
}