
function getError(count: number){
    return Math.floor(Math.random() * count)
}


export default function ProductLayout({children}:{children: React.ReactNode}){

    const err = getError(2)

    if(err == 1){
        throw new Error('Error in Layout')
    }

    return(
        <div>
            {children}
            <h3>Featured Products</h3>
        </div>
    )
}