import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTableSuccess]'
})
export class TableSuccessDirective {
  @Input('appTableSuccess')
  showClass: boolean;

  constructor(private elementRef:ElementRef) { }

  ngOnInit(): void{
    if (this.showClass){
      this.elementRef.nativeElement.classList.add('table-success');
    }
    else {
      this.elementRef.nativeElement.classList.add('table-warning');
    }
  }

}
