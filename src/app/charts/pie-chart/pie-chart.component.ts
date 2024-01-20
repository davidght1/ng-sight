import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.css'
})
export class PieChartComponent implements OnInit {

  pieChartData: number[] = [350,450,120];
  pieChartLabels: string[] = ['xyz','Logistics','Main st Bakery','Acme hosting'];
  colors: any[] = [
    {
      backgroundColor: ['#26547c','#ff6b6b','#ffd166']
    }
  ];
  pieChartType = 'pie'

  constructor(){}

  ngOnInit(){

  }
}
