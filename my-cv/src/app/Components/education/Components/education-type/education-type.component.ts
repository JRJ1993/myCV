import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-education-type',
  templateUrl: './education-type.component.html',
  styleUrls: ['./education-type.component.css']
})
export class EducationTypeComponent {
  @Input() date: any;
  @Input() school: any;
  @Input() course: any;

}
