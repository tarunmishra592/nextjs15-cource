


export default async function ProductDetails({params}:{params: Promise<{productId: string}>}){

    console.log(params)

    await new Promise((resolve) => {
        setTimeout(() => {
            resolve('resolved')
        }, 2000)
    })

    // if(productId == '4'){
    //     throw new Error('Product Detail Error')
    // }

    // const router = useRouter()

    // const productId = use(params).productId

    // const handleBuyNow = () => {
    //     router.push('/')
    // }

    return(
        <div>
            <h2>Product Details</h2>
            {/* <button onClick={handleBuyNow}>Buy Now</button> */}
        </div>
    )
}