import Link from "next/link";
import './globals.css'

const navigations = [
  { title: 'About', href:'/about' },
  { title: 'Products', href:'/products' },
  { title: 'blog', href:'/blog' },
  { title: 'Contact', href:'/contact' },
]

export default function RootLayout(
    { children}: Readonly<{children: React.ReactNode;}>
  ){
    // const pathname = usePathname() // in client component we can use this
    const pathname = '/about'

  return (
    <html lang="en">
      <body>
        <div style={{padding: '10px', background:'rgb(255 219 219)'}}>
          {navigations.map(nav => {
            const isActive = pathname === nav.href || (pathname.startsWith(nav.href) && nav.href !== '/')
            return(
              <Link className={`mr-10 ${isActive ? "to-blue-500" : ''}`} key={nav.title} href={nav.href}>{nav.title}</Link>
            )
          })}
        </div>
        {/* <ErrorWrapper> */}
        {children}
        {/* </ErrorWrapper> */}
      </body>
    </html>
  );
}
