
/*
  auth: amarildo lacerda
  created: March, 30 2018
  sample:
   <div mat-zebra index={{numIndex}} oddColor="linen" evenColor="ligthgrey">

   </div>
*/
import { Directive, ElementRef, OnInit, Input, 
  HostListener,Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[matZebra]'
})
export class ZebraDirective {
  findex = 0;
  @Input() oddColor:string = "linen";
  @Input() evenColor:string = "lightgrey";
  @HostBinding('style.backgroundColor') backgroundColor:string;

  constructor(private elRef:ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
  }

  @Input()
  get index(){
    return this.findex;
  }
  set index(v){
    this.findex = v;
    var b = this.findex % 2;
    this.backgroundColor = (b===0?this.oddColor:this.evenColor);
  }
}
