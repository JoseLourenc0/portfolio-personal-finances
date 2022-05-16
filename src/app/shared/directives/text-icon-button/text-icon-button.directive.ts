import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[textIconButton]'
})
export class TextIconButtonDirective implements AfterViewInit {

  constructor(private element: ElementRef) { }

  ngAfterViewInit() {
    const elementD = this.element.nativeElement

    //? Flex properties on parent div => button/ion-button
    elementD.style.display = 'flex'
    elementD.style['justify-content'] = 'center'
    elementD.style['align-items'] = 'center'
    
    //? Margin into span element
    elementD.children[1].style['margin-left'] = '8px'
  }

}
