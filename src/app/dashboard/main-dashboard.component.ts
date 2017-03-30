import { Component } from '@angular/core';

@Component({
    selector: 'main-dashboard',
    templateUrl: './main-dashboard.html',
    styleUrls: ['./dashboard.scss']
})
export class MainDashboardComponent{
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true,
     backgroundColor: {
       linearGradient: [0, 0, 500, 500],
       stops: [
         [0, 'rgb(255, 255, 255)'],
         [1, 'rgb(200, 200, 255)']
       ]
     },
  };
  public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

    // Doughnut
  public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';

   // Pie
  public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData:number[] = [300, 500, 100];
  public pieChartType:string = 'pie'; 
  


}