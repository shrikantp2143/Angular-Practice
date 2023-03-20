import { Directive, Renderer2, ElementRef, OnInit, HostListener} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef) {

   }

   ngOnInit() {
    // this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
   }

   @HostListener('mouseenter') mouseover() {
    this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
   }

   @HostListener('mouseleave') mouseleave() {
    this.renderer.setStyle(this.el.nativeElement, 'color', 'black');
   }

}
