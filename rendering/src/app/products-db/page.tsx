import { getProducts } from "@/prisma-db"
import { ProductDetails } from "./ProductDetails"

export type Product = {
    id: number,
    title: string,
    price: number,
    description: string,
}

export default async function ProductDB({searchParams}:{searchParams: Promise<{query: string}>}){

    const {query} = await searchParams;
    const allProducts:Product[] = await getProducts(query)
    
    return <ProductDetails products={allProducts} />
}