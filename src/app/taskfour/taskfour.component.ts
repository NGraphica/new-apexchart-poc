import { Component, OnInit } from '@angular/core';
import ApexCharts from 'apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
};

@Component({
  selector: 'app-taskfour',
  templateUrl: './taskfour.component.html',
  styleUrls: ['./taskfour.component.scss']
})
export class TaskfourComponent implements OnInit {
  public chartOptions: Partial<ChartOptions> | any;
  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      series: [
        {
          name: "Data Series A",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 98, 102, 134, 167]
        },
        {
          name: "Data Series B",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 98, 46, 12, 138]
        }
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct"
        ]
      },
      yaxis: {
        title: {
          text: "$ (thousands)"
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function(val:any) {
            return "$ " + val + " thousands";
          }
        }
      }
    };
    let chart = new ApexCharts(document.querySelector("#chart"), this.chartOptions);

    chart.render();
  }

}
