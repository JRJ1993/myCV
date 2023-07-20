import { Component } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
  title:string = 'summary'
  summary:string = `A full stack software developer with 2 years experience, specialising in
  JavaScript and PHP. I love to solve problems, the more challenging the better,
  and I will always try and find the best solution.`
}