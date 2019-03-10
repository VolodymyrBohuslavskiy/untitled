import {Component, OnInit} from '@angular/core';
import {EmployeeService} from './services/employee.service';
import {DepartamentService} from './services/departament.service';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
  title = '(';
  employees: Employee[];
  departamens: Departament[];
  employeeswithName: Employee[];

  constructor(
    public es: EmployeeService,
    public ds: DepartamentService
  ) {
  }

  ngOnInit(): void {
    this.es.getEmployees().subscribe(value => this.employees = value);
    this.ds.getDep().subscribe(value => this.departamens = value);
  }

  sendAddForm(addForm: NgForm) {
    if (addForm.valid && addForm.touched) {
      this.es.sendForm(addForm);
      addForm.resetForm();
      this.ngOnInit();
    }
  }

  col(e: Employee) {
    console.log(e.empID + ' ' + e.empName + ' ' + e.empActive);
  }

  deleteThisEmpl(empl: Employee) {
    this.employees.splice(this.employees.findIndex(value => value.empID === empl.empID), 1);
    this.es.delete(empl);
    this.ngOnInit();
  }

  sendsurchForm(surchForm: NgForm) {
    this.es.sendSursh(surchForm).subscribe(value => this.employeeswithName = value);
  }

  senddepForm(depForm: NgForm) {
    if (depForm.valid && depForm.touched) {
      this.ds.senddepForm(depForm);
      depForm.resetForm();
      this.ngOnInit();
    }
  }
}
