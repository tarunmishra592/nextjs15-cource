import { redirect } from "next/navigation"

export default async function ReviewDetails({params}:{ params:Promise<{ productId: string, reviewId: string }> }){
    const { productId, reviewId } = await params

    if(reviewId > '60'){
        redirect('/')
    }

    if(reviewId == '50'){
        throw new Error('Review Id Error')
    }

    return(
        <div>Product Id {productId} Review Id {reviewId}</div>
    )
}