import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-formlar',
  imports: [FormsModule],
  templateUrl: './formlar.html',
  styleUrl: './formlar.css',
})
export class Formlar {

  save(saveForm: NgForm) {
    console.log(saveForm.value);
  }
}
