import { Directive, Renderer2, ElementRef, OnInit, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() userColor: string = 'red';
  @Input() buDefaultColor: string = 'blcak';
  @HostBinding('style.color') textColor = this.buDefaultColor;
  constructor(private renderer: Renderer2, private el: ElementRef) {

   }

   ngOnInit() {
    // this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
   }

   @HostListener('mouseenter') mouseover() {
    // this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
    // this.textColor = 'red'
    this.textColor = this.userColor;
   }

   @HostListener('mouseleave') mouseleave() {
    // this.renderer.setStyle(this.el.nativeElement, 'color', 'black');
    // this.textColor = 'blue';
    this.textColor = this.buDefaultColor;
   }

}
