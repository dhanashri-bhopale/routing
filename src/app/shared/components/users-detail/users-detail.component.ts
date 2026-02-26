import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Iusers } from '../../model/users';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';
import { SnackBarService } from '../../service/snack-bar.service';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.scss']
})
export class UsersDetailComponent implements OnInit {
  userId !: string;
  userObj !: Iusers

  constructor(
    private _usersService: UsersService,
    private _routes: ActivatedRoute,
    private _router : Router,
    private _matDialog : MatDialog,
    private _snackBar : SnackBarService
  ) { }

  ngOnInit(): void {
    this.getSingleUser()
  }

  getSingleUser(){
    this.userId = this._routes.snapshot.params['userId']
    console.log(this.userId);
    if(this.userId){
      this._usersService.fetchUserById(this.userId).subscribe({
        next: data => {
          this.userObj = data
        }
      })
    }
  }

  onDelete(){

    let matConfig = new MatDialogConfig()
    matConfig.disableClose = true
    matConfig.width = '450px'
    matConfig.data = `Are You Sure, You Want to Remove this User ${this.userObj.userName}?`

    this._matDialog.open(GetConfirmComponent, matConfig).afterClosed().subscribe(res => {
      if(res){
        this._usersService.deleteUser(this.userId).subscribe({
      next: data => {
        console.log(data)
        this._router.navigate(['users'])
        this._snackBar.openSnackBar(`User ${this.userObj.userName} Removed Successfully!!!`)
      },
      error: err => {
        console.log(err)
      }
    })
      }
    })

    
  }

  

}
