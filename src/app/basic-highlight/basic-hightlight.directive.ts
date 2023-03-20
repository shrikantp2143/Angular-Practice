import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[appHighlightDirective]'
})
export class BasicHighlightDirective implements OnInit{
    constructor(private el: ElementRef, ) {

    }

    ngOnInit(): void {
        this.el.nativeElement.style.backgroundColor = 'green';
    }
}