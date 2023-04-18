import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {

  id: any = 0;
  student: any;
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

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
    
    for (let std of this.Students) {
      if (std.id == this.id) {
        this.student = std;
      }
    }
  }

}
