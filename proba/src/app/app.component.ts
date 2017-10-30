import {Component, OnInit} from '@angular/core';
import {StudentManagmentService} from './student-managment.service';
import {Student} from './model/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StudentManagmentService]
})
export class AppComponent implements OnInit{
  constructor (private studentManagment: StudentManagmentService) { }
  students: Student[];
  selectedStudent: Student;

  ngOnInit(): void {
    this.students = this.studentManagment.getStudents();
  }
  onSelect(stud: Student) {
    this.selectedStudent = stud;
  }
}
