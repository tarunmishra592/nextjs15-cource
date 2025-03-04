export default async function Product(){
    await new Promise((resolve) => setTimeout(resolve, 4000))
    return(
        <h2>Product Page</h2>
    )
}