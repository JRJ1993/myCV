import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-portsmouth-uni',
  templateUrl: './portsmouth-uni.component.html',
  styleUrls: ['./portsmouth-uni.component.css']
})
export class PortsmouthUniComponent {
  @Input() course: any;
  @Input() grade: any;
  @Input() modules: any;
}
