import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-plymstock-school',
  templateUrl: './plymstock-school.component.html',
  styleUrls: ['./plymstock-school.component.css']
})
export class PlymstockSchoolComponent {
  @Input() subjects: any;

  constructor(){
    console.log(this.subjects)

  }
    
}
