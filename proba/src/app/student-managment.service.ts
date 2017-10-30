import { Injectable } from '@angular/core';
import {Student} from './model/student';
import {STUDENTS} from './model/lista-na-studenti';

@Injectable()
export class StudentManagmentService {

  constructor() { }

  getStudents(): Student[] {
    return STUDENTS.slice(0, 4);
  }
}
