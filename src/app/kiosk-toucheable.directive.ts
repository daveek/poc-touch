import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[bms-kiosk-toucheable]'
})
export class KioskToucheableDirective {

  @Output() kioskTouched = new EventEmitter();

  constructor() { }

  @HostListener('swipe', ['$event'])
  @HostListener('tap',   ['$event'])
  @HostListener('press', ['$event'])
  @HostListener('pan', ['$event'])
  onKioskTouched(evt){
    console.warn(evt);
    this.kioskTouched.emit(evt);
  }
}
