import Link from "next/link";

export default function Heatmap(){
    return(
        <div>
            Heatmap <Link className="text-blue-700 underline" href='/charts/pie-chart'>Pie Chart</Link>
        </div>
    )
}