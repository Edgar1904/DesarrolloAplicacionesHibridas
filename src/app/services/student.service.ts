import { Injectable } from '@angular/core';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students: Student[] = new Array();

  constructor() {
    this.students.push({
      name: 'Edgar Gonzalez Valenzuela',
      controlnumber: '16400922',
      active: true
    });
    this.students.push({
      name: 'Israel Arjona Vizcaino',
      controlnumber: '16400900',
      active: true
    });
    this.students.push({
      name: 'Jorge Varela Garcia',
      controlnumber: '16400910',
      active: false
    });
  }

  getStudents(): Student[]{
    return this.students;
  }

  changeStatus(position: number): void{
    this.students[position].active = !this.students[position].active;
  }

  deleteStudent(position: number): void{
    this.students.splice(position, 1);
  }

  newStudent(student): void{
    this.students.push(student);
  }

}
