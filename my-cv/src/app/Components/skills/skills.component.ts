import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  title:string = 'skills'
  skills:Array<string> = [
    'JavaScript',
    'React.js',
    'Node.js',
    'PHP',
    'Laravel',
    'MongoDB',
    'Postman',
    'mySQL',
    'Redux.js',
    'Angular.js'
  ]
}
