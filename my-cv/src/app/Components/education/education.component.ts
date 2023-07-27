import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  title:string = 'Education'
  northcoders = {
    date:'2021-2023',
    school:'Northcoders',
    course:'BCS level 4 diploma software development.',
  }
  portsmouthUni = {
    date:'2012-2015',
    school:'Portsmouth University',
    course:'Mathematics',
    grade:'2.1',
    modules:[
      'Partial Differential Equations',
      'Stochastic Processes',
      'Financial Derivatives Pricing',
      'Modern Astrophysics',
      'Statistics',
      'Intermediate Calculus'
    ],
    level:''
  }
  plymstockSchool = {
    date:'2004-2012',
    school:'Plymstock Secondary School',
    subjects:{
      ALevels:[
        {subject:'Mathematics', grade:'A'}, 
        {subject:'Physics', grade:'D'},
        {subject:'Theater Studies', grade:'D'},
        {subject:'Chemistry', grade:'E'}
      ],
      ASLevels:[
        {subject:'Further Mathematics', grade:'B'}
      ],
      GCSEs:[
        {subject:'Mathematics', grade:'A'},
        {subject:'Physics', grade:'B'},
        {subject:'Chemistry', grade:'C'},
        {subject:'Biology', grade:'C'},
        {subject:'English Language', grade:'C'},
        {subject:'English literature', grade:'C'},
        {subject:'Statistics', grade:'C'},
        {subject:'Geography', grade:'C'},
        {subject:'Religious Studies (short course)', grade:'C'},
        {subject:'Drama', grade:'C'},
        {subject:'ICT', grade:'C'},
        {subject:'German', grade:'C'}
      ]
    }
  }
}
