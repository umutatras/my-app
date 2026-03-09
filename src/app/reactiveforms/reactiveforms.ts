import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  imports: [ReactiveFormsModule],
  templateUrl: './reactiveforms.html',
  styleUrl: './reactiveforms.css',
})
export class Reactiveforms {
 group=new FormGroup({
  title:new FormControl("",Validators.required),
  compoleted:new FormControl(),

 });

  save() {
    console.log(this.group.value);
  }
}
