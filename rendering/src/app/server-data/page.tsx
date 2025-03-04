export default async function ServerData(){
    await new Promise((resolve) => setTimeout(resolve, 5000))
    const response = await fetch('https://jsonplaceholder.typicode.com/users234e23')
    const users = await response.json()

    return(
        <div>
            <h2>Server Data</h2>
            <ul>
                {users.map(user => <li className="p-6 bg-white text-gray-900 border border-gray-200 rounded-lg shadow-sm" key={user.id}>
                    <h3>Name: {user.name}</h3>
                    <p>Email: {user.email}</p>
                </li>)}
            </ul>
        </div>
    )
}