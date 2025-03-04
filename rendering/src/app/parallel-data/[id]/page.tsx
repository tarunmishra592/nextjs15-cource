
async function getUserPosts(userId:string){
    await new Promise((resolve) => setTimeout(resolve, 2000))
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    return response.json()
}

async function getUserAlbums(userId:string){
    await new Promise((resolve) => setTimeout(resolve, 2000))
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
    return response.json()
}


export default async function ParallelData({params}:{params: Promise<{id: string}>}){

    const {id} = await params

    const allPosts = getUserPosts(id)
    const allAlbums = getUserAlbums(id)

    const [posts, albums] = await Promise.all([allPosts, allAlbums])

    return(
        <div>
        <h2>Parallel Blog Album Data</h2>
        <div className="flex w-full gap-2">
            <div className="flex flex-wrap gap-2 w-full">
                {posts.map(post => <div key={post.id} className="p-1 w-full bg-white text-gray-900 rounded-lg shadow-sm">
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>)}
            </div>

            <div className="flex flex-wrap gap-2 w-full">
                {albums.map(album => <div key={album.id} className="w-full p-1 bg-white text-gray-900 rounded-lg shadow-sm">
                    <h3>{album.title}</h3>
                </div>)}
            </div>
        </div>
    </div>
    )
}