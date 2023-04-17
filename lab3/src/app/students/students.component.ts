import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent {
  // studentData: any = [
  //   {
  //     "name": "shady",
  //     "age": 33
  //   },
  //   {
  //     "name": "Nehad",
  //     "age": 24
  //   }
  // ];
  @Input() studentData: { name: String; age: String }[] = [];
}
