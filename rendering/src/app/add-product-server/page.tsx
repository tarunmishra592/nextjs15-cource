'use client'
import { useActionState } from 'react'
import { FormState, addProductHandler } from '@/actions/product-action';




export default function AddProductServer(){

    const initialState:FormState = {
        errors:{}
    }

    const [state, formAction, isPending] = useActionState(addProductHandler, initialState)

    return(
        <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-900 text-center mb-6">Create Product</h2>
            <form action={formAction} noValidate>
            <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title
            </label>
            <input
                type="text"
                id="title"
                name="title"
                required
                className="mt-1 text-gray-900 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            {state.errors.title && <p className='text-red-700'>{state.errors.title}</p>}
            </div>

            <div className="mb-4">
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                Price
            </label>
            <input
                type="number"
                id="price"
                name="price"
                required
                className="mt-1 p-2 w-full text-gray-900 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            {state.errors.price && <p className='text-red-700'>{state.errors.price}</p>}
            </div>

            <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
            </label>
            <textarea
                id="description"
                name="description"
                required
                className="mt-1 text-gray-900 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
            {state.errors.description && <p className='text-red-700'>{state.errors.description}</p>}

            </div>
            <button
            type="submit"
            disabled={isPending}
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            >
             Submit
            </button>
            
      </form>
    </div>
    )
}