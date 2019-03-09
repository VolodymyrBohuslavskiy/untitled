import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartamentService {

  constructor(public http: HttpClient) {
  }

  getDep(): Observable<Departament[]> {
    return this.http.get<Departament[]>('http://localhost:8080/sowalldep');
  }


}
