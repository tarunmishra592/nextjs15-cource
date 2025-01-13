'use client'

export default function ReviewError({error, reset}:{error: Error, reset: () => void}){
    return(
        <div>
            <p>Error: {error.message}</p>
            <button onClick={reset}>Refresh</button>
        </div>
    )
}