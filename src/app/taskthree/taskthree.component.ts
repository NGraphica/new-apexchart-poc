import { Component, OnInit } from '@angular/core';
import ApexCharts from 'apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  tooltip: ApexTooltip;
  fill: ApexFill;
  legend: ApexLegend;
};

@Component({
  selector: 'app-taskthree',
  templateUrl: './taskthree.component.html',
  styleUrls: ['./taskthree.component.scss']
})
export class TaskthreeComponent implements OnInit {
  public chartOptions: Partial<ChartOptions> | any;
  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      series: [
        {
          name: "Data Series A",
          data: [44, 55, 41, 37, 22, 43, 21, 34, 56, 12, 56, 34]
        },
        {
          name: "Data Series B",
          data: [53, 32, 33, 52, 13, 43, 32, 14, 56, 70, 34, 12]
        }
      ],
      chart: {
        type: "bar",
        height: 350,
        stacked: true
      },
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      stroke: {
        width: 1,
        colors: ["#fff"]
      },
      title: {
        text: "Fiction Books Sales"
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
        // labels: {
        //   formatter: function (val:any) {
        //     return val + "K";
        //   }
        // }
      },
      yaxis: {
        title: {
          text: undefined
        }
      },
      tooltip: {
        y: {
          formatter: function (val:any) {
            return val + "K";
          }
        }
      },
      fill: {
        opacity: 1
      },
      legend: {
        position: "top",
        horizontalAlign: "left",
        offsetX: 40
      }
    };
    let chart = new ApexCharts(document.querySelector("#chart"), this.chartOptions);

    chart.render();
  }

}
