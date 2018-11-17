import {Component, ElementRef, HostListener, Renderer2, ViewChild} from '@angular/core';
import * as randomColor from 'random-color';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private element: ElementRef, private renderer: Renderer2) {

    this.renderer.setStyle(this.element.nativeElement, 'cursor', 'pointer');
  }

  @ViewChild('container') container: ElementRef;

  @HostListener('click') onClick() {
    const color = randomColor(0.3, 0.99);
    this.renderer.setStyle(this.container.nativeElement, 'background-color', color.hexString());
  }

  title = 'app';
  finishDate = 'May 19, 2019 00:00';
  isCustomTemplate = true;
  days;
  hours;
  minutes;
  seconds;
  backgroundColor = 'red';
  textColor = 'black';

  onDaysChanged(days) {
    this.days = days;
  }

  onHoursChanged(hours) {
    this.hours = hours;
  }

  onMinutesChanged(minutes) {
    this.minutes = minutes;
  }

  onSecondsChanged(seconds) {
    this.seconds = seconds;
  }
}
