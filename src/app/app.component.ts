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
  title = 'untitled';
  employees: Employee[];
  departamens: Departament[];

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
    this.es.sendForm(addForm);
    addForm.resetForm();
  }

  col(e: Employee) {
    console.log(e.empID + ' ' + e.empName + ' ' + e.empActive + ' ' + e.department.dpName);
  }

  deleteThisEmpl(id: number) {
    this.employees.splice(this.employees.findIndex(value => value.empID === id), 1);
    this.es.delete(id);
  }

  sendsurchForm(surchForm: NgForm) {
    this.es.sendSursh(surchForm);
  }
}
