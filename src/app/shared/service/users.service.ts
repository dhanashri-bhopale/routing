import { Injectable } from '@angular/core';
import { Iusers } from '../model/users';
import { users } from '../consts/users';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersArr : Iusers[] = users
  constructor() { }

  fetchAllUsers() : Observable<Iusers[]>{
    return of(this.usersArr)
  }

  fetchUserById(id : string) : Observable<Iusers>{
    let users = this.usersArr.find(user => user.userId === id)!
    return of(users)
  }

  createUser(user : Iusers) : Observable<Iusers> {
    let newUser : Iusers = {...user, userId : Date.now().toString()}
    this.usersArr.push(newUser)
    return of(newUser)
  }

  updateUser(updatedUser : Iusers) : Observable<Iusers>{
    let getIndex = this.usersArr.findIndex(u => u.userId === updatedUser.userId)
    this.usersArr[getIndex] = updatedUser
    return of(updatedUser)
  }

  deleteUser(id : string) : Observable<string>{
    let getIndex = this.usersArr.findIndex(u => u.userId === id)
    this.usersArr.splice(getIndex, 1)
    return of(id)
  }
}
