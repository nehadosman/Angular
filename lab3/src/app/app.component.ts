import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab3';
  studentDataRegister: { name: String; age: String }[] = []

  getData(data: { name: String; age: String }) {
    this.studentDataRegister.push(data)
  }
}
