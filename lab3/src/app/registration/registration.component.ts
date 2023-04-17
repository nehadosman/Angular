import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  stdName = '';
  stdAge = '';
  @Output() registerEvent = new EventEmitter();

  add() {
    if (+this.stdAge >= 20 && +this.stdAge <= 40 && this.stdName.length >= 3) {
      // this.studentData.push({ name: this.stdName, age: this.stdAge });
      this.registerEvent.emit({ name: this.stdName, age: this.stdAge });
      this.stdName = '';
      this.stdAge = '';
    }
  }
}
