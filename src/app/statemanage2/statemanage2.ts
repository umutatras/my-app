import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-statemanage2',
  imports: [],
  templateUrl: './statemanage2.html',
  styleUrl: './statemanage2.css',
})
export class Statemanage2 {
@Input({required: true}) products:any[]=[];
}
