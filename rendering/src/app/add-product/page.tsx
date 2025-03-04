'use client'

import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

export default function AddProduct(){
    const [formData, setFormData] = useState({
        title: '',
        price: '',
        description: '',
    });
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const router = useRouter()
    
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async(e:FormEvent) => {
        e.preventDefault()
        setLoading(true)
        try{
            const response = await fetch('/add-product/api',{
                method:'POST',
                headers:{ 'Content-Type': 'application/json' },
                body:JSON.stringify(formData)
            })
            if(response.ok){
                router.push('/products-db')
            }
        }catch(err){
            setError(err)
        }finally{
            setLoading(false)
        }
    };

      
    return(
        <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-900 text-center mb-6">Create Product</h2>
            <form onSubmit={handleSubmit}>
            <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title
            </label>
            <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="mt-1 text-gray-900 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            </div>

            <div className="mb-4">
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                Price
            </label>
            <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                className="mt-1 p-2 w-full text-gray-900 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            </div>

            <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
            </label>
            <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                className="mt-1 text-gray-900 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
            </div>

            <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            >
             {loading ? 'Submitting' : 'Submit'}
            </button>
      </form>
    </div>
    )
}