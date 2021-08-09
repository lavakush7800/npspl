import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  url = " http://127.0.0.1:8000/api/data";

  constructor(private http:HttpClient) { }
  users(){
    return this.http.get(this.url);
  }
}
