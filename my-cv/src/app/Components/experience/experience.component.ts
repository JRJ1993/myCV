import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  title:string = 'experience'
  jobs:Array<object> = [
    {companyName:'Shift',
     jobTitle:'Apprentice Software Developer',
     duration:'2021-2023',
     bulletPoints:[
      "BCS level 4 diploma software development (Northcoders): base JavaScript and React for both frontend and backend coding.",
      "In order to assist Shift drivers I designed in Figma and built an income tax calculator using React.js JavaScript to create the components and Laravel PHP to construct endpoints. This not only gave drivers better control on their finances but it also formed the final project of my diploma.",
      "As Shift was expanding the business to business project, the project went through a redesign and needed updating to more modern standards. I was tasked with creating new components for this project. This included a password reset flow using React for the frontend, and Laravel and mongoDB for the backend.",
      "In order for potential business partners to join and use the business platform, I was tasked with creating a sign up form using React components. During this project, I used pair programming to develop my skills in testing using Postman. I used Postman to test the Laravel PHP endpoints that the form required.",      "Review other developers' work from apprentices to tech leads.",
      "Worked in a scrum environment.",
      "Communicated with stakeholders and project managers over project specifications."
  ]},
    {companyName:'BlackwellBate LTD',
    jobTitle:'Assistant Accountant',
    duration:'2016-2021',
    bulletPoints:[
      "Tasked with preparing a large number of small contractor’s year-end accounts.",
      "Reviewing colleagues work on financial accounts before a final review.",
      "Developed an excel spreadsheet to increase productivity, including formulas that will calculate what a client can take from what they earn after an estimate of what taxes they will need to pay.",
      "Communicating with clients with regards to their queries on the phone or by email.",
      "Achieved AAT Level 3 certificate."
    ]}
  ]
}
