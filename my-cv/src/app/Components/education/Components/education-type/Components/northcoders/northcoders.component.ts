import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-northcoders',
  templateUrl: './northcoders.component.html',
  styleUrls: ['./northcoders.component.css']
})
export class NorthcodersComponent {
  @Input() course: any;

  constructor(){
    console.log(this.course);
    
  }
}
