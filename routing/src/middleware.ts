import { type NextRequest } from "next/server";
import { NextResponse} from "next/server";

export function middleware(request: NextRequest){

    const response = NextResponse.next()

    const userSetting = request.cookies.get('test')
    if(userSetting){
        console.log(userSetting)
    }else{
        response.cookies.set('abcd', '11232424')
    }

    response.headers.set('my-header', 'my-val')

    return response

    // return NextResponse.redirect(new URL('/', request.url))
    // if(request.nextUrl.pathname == '/about'){
    //     return NextResponse.redirect(new URL('/', request.url))
    // }

}

// export const config = {
//     matcher: '/about'
// }