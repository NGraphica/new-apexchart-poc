import { Component, OnInit, ViewChild } from '@angular/core';
import ApexCharts from 'apexcharts';

export type ChartOptions = {
  series?: ApexAxisChartSeries;
  chart?: ApexChart;
  xaxis?: ApexXAxis;
  title?: ApexTitleSubtitle;
};

@Component({
  selector: 'app-taskone',
  templateUrl: './taskone.component.html',
  styleUrls: ['./taskone.component.scss']
})
export class TaskoneComponent implements OnInit {
  public chartOptions: Partial<ChartOptions> | any;
  constructor() {
  }

  ngOnInit() {
    this.chartOptions = {
      series: [
        {
          name: "My-series",
          data: [260, 290, 300, 310, 320, 390, 403, 490, 750, 800, 910]
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        }
      },
      title: {
        text: "My First Angular Chart"
      },
      xaxis: {
        categories: ["1.1", "3.4", "4.1", "1.6", "1.8", "3.9", "2.6", "1.3", "1.8", '2.7', '2.2']
      },
    }

    let chart = new ApexCharts(document.querySelector("#chart"), this.chartOptions);

    chart.render();
  }
  
}