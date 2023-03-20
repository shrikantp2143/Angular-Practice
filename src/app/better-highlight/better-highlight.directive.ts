import { Directive, Renderer2, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef) {

   }

   ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
   }

}
