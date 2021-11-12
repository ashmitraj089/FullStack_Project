import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import {Education} from './education';

@Injectable({
  providedIn: 'root'
})
export class EducationServiceService {

  
  private baseURL = "http://localhost:7777/api/v1/education";

  constructor(private httpClient: HttpClient) { }
  
  getEducationList(): Observable<Education[]>{
    //alert("in service jshkhkksjksjlka")
    return this.httpClient.get<Education[]>(`${this.baseURL}`);
  }

  createEducation(education: Education): Observable<Object>{
    //alert(JSON.stringify(education))
    return this.httpClient.post(`${this.baseURL}`, education);
  }

  // getEmployeeById(id: number): Observable<Education>{
  //   return this.httpClient.get<Education>(`${this.baseURL}/${id}`);
  // }

  // updateEmployee(id: number, employee: Education): Observable<Object>{
  //   return this.httpClient.put(`${this.baseURL}/${id}`, employee);
  // }

  // deleteEmployee(id: number): Observable<Object>{
  //   return this.httpClient.delete(`${this.baseURL}/${id}`);
  // }
}
