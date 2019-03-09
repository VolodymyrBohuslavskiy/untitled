import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {NgForm} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    public http: HttpClient
  ) {
  }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>('http://localhost:8080/sowallempl');
  }

  delete(id: number) {
    return this.http.delete('http://localhost:8080/delete-empl' + id).subscribe();
  }

  sendForm(addForm: NgForm) {
    const emppl = {
      empID: addForm.value.empID,
      empName: addForm.value.empName,
      empActive: addForm.value.empActive,
      department: addForm.value.department
    };
    return this.http.post('http://localhost:8080/add-employee', emppl).subscribe();
  }

}
