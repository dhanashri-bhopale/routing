import { Component, OnInit } from '@angular/core';
import { Iusers } from '../../model/users';
import { UsersService } from '../../service/users.service';

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrls: ['./users-dashboard.component.scss']
})
export class UsersDashboardComponent implements OnInit {
  usersArr : Iusers[] = []

  constructor(
    private _usersService : UsersService
  ) { }

  ngOnInit(): void {
    this.getAllUsers()
  }

  getAllUsers(){
    this._usersService.fetchAllUsers().subscribe({
      next: data => {
        this.usersArr = data
      },
      error : err => {
        console.log(err)
      }
    })
  }

}
