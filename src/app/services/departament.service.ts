import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {NgForm} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DepartamentService {

  constructor(public http: HttpClient) {
  }

  getDep(): Observable<Departament[]> {
    return this.http.get<Departament[]>('http://localhost:8080/sowalldep');
  }


  senddepForm(depForm: NgForm) {
    return this.http.post('http://localhost:8080/add-dep', JSON.stringify({dpName: depForm.value.dpName})).subscribe();
  }
}
