import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from "@angular/core";

@Directive({
    selector: '[appBackground]'
})

export class BackgroundDirective implements OnInit{

    @HostBinding('style.backgroundColor') background: string;
    @Input() hoverColor: string = 'red';
    @Input() defaultColor: string = 'transparent';
    constructor(private element: ElementRef, private renderer: Renderer2) {}

    ngOnInit() {
        //this.element.nativeElement.style.backgroundColor='red';
        //this.renderer.setStyle(this.element.nativeElement, 'background-color', 'blue');
        //this.renderer.addClass(this.element.nativeElement, 'white-text');
    }

    /*@HostListener ('mouseenter', ['$event']) mouseEnrer(event: Event) {
        console.log(event);
    }*/

    /*@HostListener ('mouseenter') mouseEnrer() {
        this.renderer.setStyle(this.element.nativeElement, 'background-color', 'red');
        this.renderer.addClass(this.element.nativeElement, 'white-text');

    }

    @HostListener ('mouseleave') mouseLeave() {
        this.renderer.setStyle(this.element.nativeElement, 'background-color', 'transparent');
        this.renderer.removeClass(this.element.nativeElement, 'white-text');

    }*/


    /*@HostListener ('mouseenter') mouseEnrer() {

        this.background = 'red';
    }

    @HostListener ('mouseleave') mouseLeave() {

        this.background = 'transparent';
    }*/

    @HostListener ('mouseenter') mouseEnrer() {

       this.background =this.hoverColor ;
    }

    @HostListener ('mouseleave') mouseLeave() {

        this.background =this.defaultColor;
    }
}

/*@NgModule({/
   // imports: [CommonModule],
    exports: [BackgroundDirective],
    declarations: [BackgroundDirective]
})
export class BackgroundModule { }*/