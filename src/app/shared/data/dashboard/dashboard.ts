import { ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import { Color, Label} from 'ng2-charts';
//Chart js
export let lineChartOptions: ChartOptions = {
    
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
        enabled: true,
    },
    hover: {
        mode: 'nearest',
        intersect: true
    },
    scales: {
        
        xAxes: [{
            ticks: {
                fontColor: '#8492a6',
            },
            display: true,
            gridLines: {
                color: 'transparent',
                zeroLineColor: 'transparent'
            }
        }],
        yAxes: [{
            ticks: {
                fontColor: '#8492a6',
                min: 0,
                max: 200,
                stepSize: 50
            },
            display: true,
            gridLines: {
                color:'rgba(119, 119, 142, 0.08)',
                zeroLineColor:'transparent',
                borderDash: [7,3]
            },
            scaleLabel: {
                display: true,
                labelString: 'Thousands',
                fontColor: 'transparent'
            }
        }]
    },
    legend: {
        position: "top",
        display:true
    }
}

export let lineChartLabels: Label[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export let lineChartType: ChartType = 'line';
export let lineChartLegend = true;
export let lineChartData: ChartDataSets[] = [
    {
        label: 'TOTAL BUDGET',
        data: [0, 45, 30, 75, 15, 94, 40, 115, 30, 105, 65, 110],
        borderWidth: 3,
        backgroundColor: 'transparent',
        borderColor: '#6259ca',
        pointBackgroundColor: '#ffffff',
        pointRadius: 0,
        
    },
    {
        label: 'Total Sales',
        data: [0, 60, 20, 130, 75, 130, 75, 140, 64, 130, 85, 120],
        borderWidth: 3,
        backgroundColor: 'transparent',
        borderColor: '#f99433',
        pointBackgroundColor: '#ffffff',
        pointRadius: 0,
        borderDash: [7,3]
    },
    {
        label: 'area',
        data: [0, 105, 70, 175, 85, 154, 90, 185, 120, 145, 185, 130],
        borderWidth: 0,
        backgroundColor: 'rgba(119, 119, 142, 0.05)',
        borderColor: 'rgba(119, 119, 142, 0.05)',
        pointBackgroundColor: '#ffffff',
        pointRadius: 0,
        borderDash: [7,3]
    },

]

export let OrderData:any = {

    chart: {
        type: 'radialBar',
        offsetX: 0,
        offsetY: 10,
    },
    plotOptions: {
        radialBar: {
            startAngle: -135,
            endAngle: 135,
            size: 120,
            imageWidth: 50,
            imageHeight: 50,

            track: {
                strokeWidth: "80%",
                background: '#ecf0fa',
            },
            dropShadow: {
                enabled: false,
                top: 0,
                left: 0,
                bottom: 0,
                blur: 3,
                opacity: 0.5
            },
            dataLabels: {
                name: {
                    fontSize: '16px',
                    color: undefined,
                    offsetY: 30,
                },
                hollow: {
                    size: "60%"
                },
                value: {
                    offsetY: -10,
                    fontSize: '22px',
                    color: undefined,
                    formatter: function (val:any) {
                        return val + "%";
                    }
                }
            }
        }
    },
    colors: ['#ff5d9e'],
    fill: {
        type: "gradient",
        gradient: {
            shade: "gradient",
            type: "horizontal",
            shadeIntensity: .5,
            gradientToColors: ['#6259ca'],
            inverseColors: !0,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
        }
    },
    stroke: {
        dashArray: 4
    },
    series: [83],
    labels: [""]

};
