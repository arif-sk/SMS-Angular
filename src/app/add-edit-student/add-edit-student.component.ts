import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { StudentModel } from '../core/_models/student.model';
import { StudentService } from '../core/_services/student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-student',
  templateUrl: './add-edit-student.component.html',
  styleUrls: ['./add-edit-student.component.css']
})
export class AddEditStudentComponent implements OnInit {
  currentId: number;
  constructor(private fb: FormBuilder,
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router) { }
  studentForm = this.fb.group({
    studentName: [''],
    studentEmail: [''],
    studentAddress: [''],
    studentAge: ['']
  });

  get getStudentNameFormControl() {
    return this.studentForm ? this.studentForm.get('studentName') : null;
  }

  get getStudentEmailFormControl() {
    return this.studentForm ? this.studentForm.get('studentEmail') : null;
  }
  get getStudentAddressFormControl() {
    return this.studentForm ? this.studentForm.get('studentAddress') : null;
  }
  get getStudentAgeFormControl() {
    return this.studentForm ? this.studentForm.get('studentAge') : null;
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.currentId = params['id'];
    });
    if (this.currentId && this.currentId > 0) {
      this.loadStudentData();
    }
  }

  loadStudentData() {
    this.studentService.getAllStudentById(this.currentId).subscribe(x => {
      this.setStudentForm(x as StudentModel);
    }, err => {
      console.error(err);
    });
  }

  setStudentForm(student: StudentModel) {
    this.getStudentNameFormControl.setValue(student.studentName);
    this.getStudentEmailFormControl.setValue(student.studentEmail);
    this.getStudentAddressFormControl.setValue(student.studentAddress);
    this.getStudentAgeFormControl.setValue(student.studentAge.toString());
  }

  onSubmit() {
    var age = this.getStudentAgeFormControl.value;
    var strudentModel = new StudentModel({
      id: this.currentId ? this.currentId : 0,
      studentName: this.getStudentNameFormControl.value,
      studentEmail: this.getStudentEmailFormControl.value,
      studentAddress: this.getStudentAddressFormControl.value,
      studentAge: Number(age)
    });
    if (this.currentId) {
      this.studentService.updateStudent(strudentModel).subscribe(x => {
        this.navigateToStudentList();
      }, err => {
        console.error(err);
      });
    } else {
      this.studentService.createStudent(strudentModel).subscribe(x => {
        this.navigateToStudentList();
      }, err => {
        console.error(err);
      });
    }
    console.log(strudentModel);
  }

  navigateToStudentList() {
    this.router.navigate(['']);
  }
}
