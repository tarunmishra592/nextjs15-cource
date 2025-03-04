import { Suspense } from "react"
import Author from "./Author"

type Blog = {
    userId: string,
    id: string,
    title: string,
    body: string
}

export default async function BlogPost(){

    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const blogs:Blog[] = await response.json()

    return(
        <div>
            <h2>Blog Data</h2>
            <div className="flex flex-wrap gap-2 w-full">
                {blogs.map(blog => <div className="w-[calc(50%-0.5rem)] p-1 bg-white text-gray-900 rounded-lg shadow-sm" key={blog.id}>
                    <h3>{blog.title}</h3>
                    <p>{blog.body}</p>
                    <div>
                        <Suspense fallback={'Author Loading....'}>
                            <Author userId={blog.userId} />
                        </Suspense>
                    </div>
                </div>)}
            </div>
        </div>
    )
}