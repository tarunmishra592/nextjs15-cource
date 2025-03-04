import { getProduct } from '@/prisma-db';
import EditForm from './EditForm';
import { Product } from '../page';
import { notFound } from 'next/navigation';




export default async function EditProductServer({params}:{params:Promise<{id: string}>}){

    const { id } = await params;
    const product:Product | null = await getProduct(Number(id))

    if(!product){
        notFound()
    }

    return(
        <EditForm product={product} />
    )
}