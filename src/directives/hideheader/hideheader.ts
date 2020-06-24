import { Directive,Input } from '@angular/core';

/**
 * Generated class for the HideheaderDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */ 
@Directive({
  selector: '[hideheader]' ,// Attribute selector
  host:{
'(ionScroll)':'onContentScroll($event)'
  }
})
export class HideheaderDirective {
@Input("header") header:HTMLElement
  constructor() {
    console.log('Hello HideheaderDirective Directive');
  }
  onContentScroll(event){
    console.log(event);
  }
}
