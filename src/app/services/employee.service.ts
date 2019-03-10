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

  sendSursh(surchForm: NgForm): Observable<Employee[]> {
    return this.http.get<Employee[]>('http://localhost:8080/findbyname-' + surchForm.value.empName);
  }

  delete(empl: Employee) {
    return this.http.delete('http://localhost:8080/delete-empl' + empl.empID).subscribe();
  }

  sendForm(addForm: NgForm) {
    return this.http.post('http://localhost:8080/add-employee', JSON.stringify({
      empName: addForm.value.empName,
      empActive: addForm.value.empActive,
      department: addForm.value.department
    })).subscribe();
  }


}
