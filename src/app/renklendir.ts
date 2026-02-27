import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[renklendir]',
})
export class Renklendir {
@Input("renklendir") renk!: string;
  constructor(private el: ElementRef) { }
@HostListener("mouseenter") method(){
  console.log("Mouse girdi");
  this.el.nativeElement.style.color="red";
}
@HostListener("mouseleave") method2(){
  console.log("Mouse çıktı");
  console.log(this.renk);
  this.el.nativeElement.style.color="black";
}
}
