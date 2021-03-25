import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HammerGestureConfig, HammerModule, HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';

import * as Hammer from 'hammerjs';
import { KioskToucheableDirective } from './kiosk-toucheable.directive';

// custom configuration Hammerjs
export class HammerConfig extends HammerGestureConfig {
  overrides = <any> {
      pinch:  { enable: false },
      rotate: { enable: false },

      // https://hammerjs.github.io/recognizer-swipe/
      swipe:  { enable: true, direction: Hammer.DIRECTION_ALL },

      // https://hammerjs.github.io/recognizer-tap/
      tap: { enable: true },

      // https://hammerjs.github.io/recognizer-pan/
      pan:    { enable: false, direction: Hammer.DIRECTION_ALL, threshold: 10},

      // https://hammerjs.github.io/recognizer-press/
      press:  { enable: true, threshold: 9, time: 251}

  }
}


@NgModule({
  declarations: [
    AppComponent,
    KioskToucheableDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HammerModule
  ],
  providers: [{
    provide: HAMMER_GESTURE_CONFIG,
    useClass: HammerConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
