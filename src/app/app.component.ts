import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  eventText = '';

  onSwipe() {
    this.eventText = 'Swipe!';
  }

  onPan() {
    this.eventText = 'onPan!';
  }

  onPress() {
    this.eventText = 'onPress!';
  }

  onClick() {
    this.eventText = 'onClick!';
  }  


  onTap(){
    this.eventText = 'onTap!';
  }

  onClickClild(){
    this.eventText = 'Click on Child!';
  }

  onOptionSelected(){
    this.eventText = 'onOptionSelected';
  }
  
  
  onKioskClick(){
    this.eventText = 'onKioskClick';
  }
  
  


  resetUI(){
    this.eventText = '';
  }
}




