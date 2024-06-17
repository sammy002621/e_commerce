export const pieChartData = {
    labels:["Afternoon","Evening","Morning"],
    datasets:[
        {
            
            data:[128,60,30],
            backgroundColor: [
               "rgba(255,99,132,0.9)",
               "rgba(54,162,235,0.9)",
               "rgba(255,206,86,0.9)",
               
               
            ],
            label:"Time Spent",
            hoverOffset:4
        }
    ]
}

export const lineChartData = {
    labels:[
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
    ],
    datasets:[
        {
            label:"",
            data:[3000,5000,6000,8000,7000,9000],
            borderClor:"rgb(75,192,192)",
            backgroundColor: "rgba(0, 0, 0, 0)",
            fill:false
        },{
            label:"",
            data:[9000,7000,8000,6000,5000,3000],
            borderColor:"rgb(23, 23, 104)",
            backgroundColor: "rgba(0, 0, 0, 0)",
        }
    ]
}