import { Directive, Renderer2, ElementRef, OnInit, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @HostBinding('style.color') textColor = 'black'
  constructor(private renderer: Renderer2, private el: ElementRef) {

   }

   ngOnInit() {
    // this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
   }

   @HostListener('mouseenter') mouseover() {
    // this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
    this.textColor = 'red'
   }

   @HostListener('mouseleave') mouseleave() {
    // this.renderer.setStyle(this.el.nativeElement, 'color', 'black');
    this.textColor = 'blue';
   }

}
