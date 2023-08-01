import { Component } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent {
  title:string = 'Hobbies and Interests'
  hobbies:Array<string>=[
    'Team Captain in a Taekwondo Demo Team which performed for public events across the region and Inter club competitions. I have obtained a 2nd Dan Black Belt.',
    'Played 11 a side football as a goalkeeper for a local team from the age of 12 to 18, then 5 a side football up to present.',
    'Participated in the 35 and 45 mile Ten Tor events which included a team of 6 people walking across 10 tors over a 2 day period.'
  ]
}
