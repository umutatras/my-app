import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [],
  standalone: true,
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class Contact {
 constructor(private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe(rs=>{
      console.log(rs['id']);
    });
  }
}
