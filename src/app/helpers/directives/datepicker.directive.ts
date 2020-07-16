import { OnInit, Directive, Output, ElementRef, EventEmitter } from '@angular/core';

@Directive({
    selector: '[appDatepicker]'
})
export class DatepickerDirective implements OnInit{
    @Output() change = new EventEmitter<string>();
    
    constructor(private elementRef: ElementRef) {}

    ngOnInit() {    
        $(this.elementRef.nativeElement).datepicker({
            dateFormat: 'mm/dd/yy',
            changeYear: true,
            yearRange: "-100:+0",
            onSelect: (dateText: string) => {
                this.change.emit(dateText);
            }
        });
    }
}