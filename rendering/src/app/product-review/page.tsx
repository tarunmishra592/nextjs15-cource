import { Suspense } from "react";
import Product from "@/components/Product";
import Review from "@/components/Review";

export default function ProductsReview(){
    return(
        <div>
            <h2>Product Review</h2>
            <Suspense fallback="Product Loading...">
                <Product/>
            </Suspense>
            <Suspense fallback="Reviews Loading...">
                <Review/>
            </Suspense>
        </div>
    )
}