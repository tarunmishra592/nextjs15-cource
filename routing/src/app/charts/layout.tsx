export default function ChartLayout({lineChart, barChart, heatmap, login}:{
    lineChart: React.ReactNode,
    barChart: React.ReactNode,
    heatmap: React.ReactNode,
    login: React.ReactNode
}){

    const isUserLogin = true

    return(
        <div className="gap-4 p-10">

            {isUserLogin ? <>
            <div className="flex gap-10">
                <div className="p-6 w-1/2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    {lineChart}
                </div>
                <div className="w-1/2 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    {barChart}
                </div>
            </div>
            <div className="flex mt-10">
                <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    {heatmap}
                </div>
            </div>
            </> : <div>{login}</div>}
        </div>
    )
}