import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = ['Complete LaunchCode prep work', 'Buy groceries', 'Clean bathroom', 'Feed dog', 'Make bed', 'Sweep floor'];
   todoTitles = ["Yesterday's Chores", "Fortnight Chores", "Tomorrow's Chores"];

   constructor() { }

   ngOnInit() {
   }

}
