import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css'],
})
export class JobComponent {
  @Input() jobDetails: any;
  isOpen:boolean = false
  onClick() {
    this.isOpen = !this.isOpen
  }
}
