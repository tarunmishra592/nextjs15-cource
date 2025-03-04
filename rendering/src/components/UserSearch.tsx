import Form from 'next/form'
export default function UserSearch(){
    return(
        <>
            <Form action={'/products-db'}>
                <input className="text-gray-900 border border-gray-900 text-sm p-1" placeholder="Search" name='query' type="text"/>
                <button type='submit'>Go</button>
            </Form>
        </>
    )
}