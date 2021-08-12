import { Component } from '@angular/core';
import {UsersDataService} from './services/users-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'www.lstechsoftware.com';
  users:any;
  constructor(private userData:UsersDataService){
    userData.users().subscribe((data)=>{
      console.warn("data",data);
      this.users=data;
    });
  }
}
