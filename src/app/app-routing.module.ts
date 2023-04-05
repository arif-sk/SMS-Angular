import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditStudentComponent } from './add-edit-student/add-edit-student.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  {path:'', component: StudentListComponent},
  {path:'add-edit', component: AddEditStudentComponent},
  {path:'add-edit/:id', component: AddEditStudentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
