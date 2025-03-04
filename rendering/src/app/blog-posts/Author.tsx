export default async function Author({userId}:{userId: string}){
    await new Promise((resolve) => setTimeout(resolve, 3000))
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    const author = await response.json()


    return(
        <p>
            <strong>Author:</strong> {author.name}
        </p>
    )
}