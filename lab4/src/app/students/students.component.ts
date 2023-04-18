import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent {
  Students: { id: number, name: string; age: number }[] = [
    {
      id: 1,
      name: 'Nehad',
      age: 30,
    },
    {
      id: 2,
      name: 'Eman',
      age: 31,
    },
    {
      id: 3,
      name: 'Shady',
      age: 32,
    },
    {
      id: 4,
      name: 'Mohammed',
      age: 33,
    },
  ];
}
