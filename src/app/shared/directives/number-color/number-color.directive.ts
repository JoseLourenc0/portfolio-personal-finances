import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[numberColor]'
})
export class NumberColorDirective {

  constructor(private element: ElementRef) {}
  
  ngAfterViewInit() {
    const elementD = this.element.nativeElement
    let color = '#ff4961'
    if(Number(elementD.innerHTML) > 0) color = '#2fdf75'
    elementD.style.color = color
  }

}
