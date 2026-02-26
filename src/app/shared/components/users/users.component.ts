import { Component, OnInit } from '@angular/core';
import { Iusers } from '../../model/users';
import { users } from '../../consts/users';
import { UsersService } from '../../service/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  postId !: string

  constructor(
    
  ) { }

  ngOnInit(): void {
    
    
  }

  usersArr : Array<Iusers> = users


  

}
