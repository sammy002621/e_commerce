import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from "chart.js"
import { lineChartData } from "../constants/data";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

export const LineGraph = ()=>{

   const options = {
    scales: {
        x: {
            display: true // Display the x-axis labels and ticks
        },
        y: {
            display: true // Display the y-axis labels and ticks
        }
    }
   }
    return <Line options={options} data={lineChartData}/>
}

export default LineGraph