import { Component } from '@angular/core';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css']
})
export class ReferencesComponent {
  title:string = 'References'
  references:Array<{name:string; company:string; number:string}> = [
    {
      name:'Graham Roberts',
      company:'Director - BlackwellBate ltd',
      number:'01752 840555'
    },
    {
      name:'Sue Gee',
      company:'Manager - BlackwellBate',
      number:'01752 840555'
    },
    {
      name:'Ben Payne-Hunt',
      company:'Tech Lead - Shift',
      number:'07731698596'
    },
  ]
}
