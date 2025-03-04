export const dynamicParams = false

export async function generateStaticParams(){
    return [
        {id: '1'},
        {id: '2'},
        {id: '3'}
    ]
}

export default async function ProductDetails({params}: {params: Promise<{id: string}>}){

    const {id} = await params;

    return(
        <div>
            <h1>Time: {new Date().toLocaleTimeString()}</h1>
            <h2>Product Details {id}</h2>
        </div>
    )
}