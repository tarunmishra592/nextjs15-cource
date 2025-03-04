'use client'

export default function GlobalError(){
    return(
        <html lang="en">
            <body>
                <div>
                    <button onClick={() => window.location.reload()}>Refresh</button>
                </div>
            </body>
        </html>
    )
}