import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url: string = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  getAllStudents() {
    return this.http.get(`${this.url}student`);
  }

  getAllStudentById(id: number) {
    return this.http.get(`${this.url}student/${id}`);
  }

  createStudent(data: any) {
    return this.http.post(`${this.url}student`, data);
  }

  updateStudent(data: any) {
    return this.http.put(`${this.url}student`, data);
  }

  deleteStudent(id: number) {
    return this.http.delete(`${this.url}student/${id}`);
  }
}
