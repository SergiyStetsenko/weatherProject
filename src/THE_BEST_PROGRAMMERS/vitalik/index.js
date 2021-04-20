// Изображения подключать так
// import imgSource from "./images/arms.jpg"
// в imgSource находится путь к вашему изображению
// А СПРАЙТ вот так
// document.body.insertAdjacentHTML("beforeend", `<svg>
//         <use href="./sprite.svg#icon-clouds-and-sun"></use>
//     </svg>`)
// import { Chart, registerables } from 'chart.js';
// Chart.register(...registerables);
// Оnpm start
import Chart from 'chart.js/auto';
function rendChart(data) {
    console.log('vitalik')
    console.log(data);
   
    const grafikTemperature = data.map(temperature => {
        return temperature[0]
    })
    console.log(grafikTemperature);
    const temp = [];
    const humidity = [];
    const windSpeed = [];
    const pressure = [];
    grafikTemperature.forEach(element => {
        temp.push(element.main.temp);
        humidity.push((element.main.humidity));
        pressure.push((element.main.pressure));
       windSpeed.push(element.wind.speed)
    });
    
  
    // const Temperature = data[0,7]
    // console.log(Temperature);
    
    
    
    const buttonChart = document.querySelector('.charts-open');
    buttonChart.innerHTML = `<div>
    <p><button class="button-chart-close">Hide Chart<svg width="28px" height="28px">
                <use href="./sprite.svg#icon-arrow_to_up"></use>
            </svg></button></p>
</div>`;
    Chart.defaults.font.size = 14;
const arr = ['16.04','17.04','18.04','19.04','20.04']
new Chart(document.getElementById("charts-line"), {
    type: 'line',
    data: {
        labels: [...arr],
        datasets: [{
            
            data: [...temp],
            color: '#FFFFFF',
            label: "— Temperature, C° ",
            borderColor: "#FF6B09",
            fill: false
        }, {
            data: [...humidity],
            label: "— Humidity, % ",
            borderColor: "#0906EB",
            fill: false,
            
        }, {
            data: [...windSpeed],
            label: "— Wind Speed, m/s ",
            borderColor: "#EA9A05",
            fill: false
        }, {
            data: [...pressure],
            label: "— Atmosphere Pressure, m/m",
            borderColor: "#067806",
            fill: false
        }
        ]
    },
    options: {
     
            // responsive: true,
            // maintainAspectRatio: true,
            scales: {
                y: {
                    // display: true,
                    // title: {
                    //     display: true,
                    //     text:'Value of Indicators',
                    //     color: 'rgba(255, 255, 255, 0.5)',
                    //     font:{
                    //         family: 'Lato',
                    //         size: 12,
                    //         weight: 400,
                    //     },
                    //     padding:{bottom:10}
                    // },
                    stacked: true,
                    beginAtZero: false,
                    gridLines: {
                        display: true,
                        color: "rgba(255,99,132,0.2)",
                    }
                },
                
            x: {
                gridLines: {
                    display: false,
                }
            }
            },
            plugins:{
                legend:{
                    position: 'top',
                    align: 'center',
    
                    labels: {
                        color: 'rgba(255, 255, 255, 0.5)',
                        boxWidth: 10,
                        boxHeight:10,
                        },
                },
                title:{
                    display: true,
                    text: 'AVERAGE:',
                    color: 'rgba(255, 255, 255, 0.5)',
                    align: 'start',
                    font: {
                        size: 12,
                        family: "Lato",
                        weight: 400,
                        },
                },
            },
        }
        
    });

}
// const Temperature = data.map(temp => temp[0]);
// console.log(Temperature);


export { rendChart };


    // options: {
     
    //         // responsive: true,
    //         // maintainAspectRatio: true,
    //         scales: {
    //             y: {
    //                 // display: true,
    //                 // title: {
    //                 //     display: true,
    //                 //     text:'Value of Indicators',
    //                 //     color: 'rgba(255, 255, 255, 0.5)',
    //                 //     font:{
    //                 //         family: 'Lato',
    //                 //         size: 12,
    //                 //         weight: 400,
    //                 //     },
    //                 //     padding:{bottom:10}
    //                 // },
    //                 stacked: true,
    //                 beginAtZero: false,
    //                 gridLines: {
    //                     display: true,
    //                     color: "rgba(255,99,132,0.2)",
    //                 }
    //             },
                
    //         x: {
    //             gridLines: {
    //                 display: false,
    //             }
    //         }
    //         },
    //         plugins:{
    //             legend:{
    //                 position: 'top',
    //                 align: 'center',
    
    //                 labels: {
    //                     color: 'rgba(255, 255, 255, 0.5)',
    //                     boxWidth: 10,
    //                     boxHeight:10,
    //                     },
    //             },
    //             title:{
    //                 display: true,
    //                 text: 'AVERAGE:',
    //                 color: 'rgba(255, 255, 255, 0.5)',
    //                 align: 'start',
    //                 font: {
    //                     size: 12,
    //                     family: "Lato",
    //                     weight: 400,
    //                     },
    //             },
    //         },
    //     }
        
    // });



