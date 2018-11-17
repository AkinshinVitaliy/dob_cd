import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
