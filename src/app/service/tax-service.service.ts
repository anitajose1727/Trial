import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaxServiceService {

  constructor(private http: HttpClient) { }

  deleteCustomer(id: any): Observable<any> {
    console.log("delete called...");
    return this.http.delete('http://localhost:3000/taxfillerdata/' + id);
  }
  
}
