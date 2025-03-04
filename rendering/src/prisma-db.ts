import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const addProducts = async () => {
    const productCount = await prisma.product.count()
    if(productCount == 0){
        await prisma.product.createMany({
            data:[
                {title: 'Product 1', price: 100, description: 'This Product Desc 1'},
                {title: 'Product 2', price: 200, description: 'This Product Desc 2'},
                {title: 'Product 3', price: 500, description: 'This Product Desc 3'},
                {title: 'Product 4', price: 200, description: 'This Product Desc 4'},
            ]
        })
    }
}

addProducts()


export async function getProducts(query?: string){
    await new Promise((resolve) => setTimeout(resolve, 1000))

    if(query){
        return prisma.product.findMany({
            where:{
                OR:[
                    { title:{contains: query} },
                    { description:{contains: query} },
                ]
            }
        })
    }

    return prisma.product.findMany()
}

export async function getProduct(id:number){
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return prisma.product.findUnique({
        where:{id}
    })
}

export async function addProduct(title: string, price: number, description: string){
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return prisma.product.create({
        data:{title, price, description}
    })
}

export async function updateProduct(id: number, title: string, price: number, description: string){
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return prisma.product.update({
        where:{id},
        data:{title, price, description}
    })
}

export async function deleteProduct(id: number){
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return prisma.product.delete({
        where:{id}
    })
}