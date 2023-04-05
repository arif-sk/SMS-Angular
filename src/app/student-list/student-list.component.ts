import { Component, OnInit } from '@angular/core';
import { StudentService } from '../core/_services/student.service';
import { StudentModel } from '../core/_models/student.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: StudentModel[] = [];
  constructor(private studentService: StudentService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents() {
    this.studentService.getAllStudents().subscribe(x => {
      this.students = x as StudentModel[];
    }, err => {
      console.error(err);
    });
  }

  editStudent(id: number) {
    this.router.navigate([`add-edit/${id}`]);
  }

  deleteStudent(id: number) {
    this.studentService.deleteStudent(id).subscribe(x => {
      this.getAllStudents();
    }, err => {
      console.error(err);
    });
  }
}
