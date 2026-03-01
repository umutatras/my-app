import { Component } from '@angular/core';
import { Statemanage2 } from '../statemanage2/statemanage2';

@Component({
  selector: 'app-statemanage1',
  imports: [Statemanage2],
  templateUrl: './statemanage1.html',
  styleUrl: './statemanage1.css',
})
export class Statemanage1 {
products:any[]=[
  {id:1,name:'product1',price:100},
  {id:2,name:'product2',price:200},
  {id:3,name:'product3',price:300},
]
}
