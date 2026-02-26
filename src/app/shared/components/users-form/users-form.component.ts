import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { countries } from '../../consts/country';
import { Iusers } from '../../model/users';
import { UsersService } from '../../service/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormUtilityService } from '../../service/form-utility.service';
import { SnackBarService } from '../../service/snack-bar.service';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss']
})
export class UsersFormComponent implements OnInit {
  userForm !: FormGroup
  isInEditMode : boolean = false
  countryArr : string[] = countries
  userId !: string
  userObj !: Iusers

  constructor(
    private _userService : UsersService,
    private _router : Router,
    private _routes : ActivatedRoute,
    private _formUtility : FormUtilityService,
    private _snackBar : SnackBarService
  ) { }

  ngOnInit(): void {
    this.getUserForm()
    this.addSkills()

    console.log(this.f['address'].get('current')?.valueChanges)
    this.f['address'].get('current')?.valueChanges
    .subscribe(res => {
      console.log(res)
      if(this.f['address'].get('current')?.valid){
        this.f['isAddressSame'].enable()
      }else{
        this.f['isAddressSame'].disable(),
        this.f['isAddressSame'].reset()
      }
    })

    this.f['isAddressSame'].valueChanges
    .subscribe(res => {
      console.log(res)
      if(res){
        let val = this.f['address'].get('current')?.value
        this.f['address'].get('permanent')?.patchValue(val)
        this.f['address'].get('permanent')?.disable()
      }else{
        this.f['address'].get('permanent')?.enable()
        this.f['address'].get('permanent')?.reset()
      }
    })

    this.editForm()
  }

  getUserForm(){
    this.userForm = new FormGroup({
      userName : new FormControl(null, [Validators.required]),
      userRole : new FormControl('Candidate'),
      profileDescription : new FormControl(null, [Validators.required]),
      profileImage : new FormControl(null, [Validators.required]),
      experienceYears : new FormControl(3),
      isActive : new FormControl(true),
      address : new FormGroup({
        current : new FormGroup({
          country : new FormControl('India'),
          state : new FormControl(null, [Validators.required]),
          city : new FormControl(null, [Validators.required]),
          zipcode : new FormControl(null, [Validators.required])
        }),
        permanent : new FormGroup({
          country : new FormControl(null, [Validators.required]),
          state : new FormControl(null, [Validators.required]),
          city : new FormControl(null, [Validators.required]),
          zipcode : new FormControl(null, [Validators.required])
        }),
      }),
      isAddressSame : new FormControl({value : false, disabled : true}, [Validators.required]),
      skills : new FormArray([])
    })
  }

  get f(){
    return this.userForm.controls
  }

  onFormSubmit(){
    console.log(this.userForm.controls)
    let user : Iusers = this.userForm.getRawValue()
    this._userService.createUser(user).subscribe({
      next : data => {
        console.log(data);
        
        this._router.navigate(['users'])
        this._snackBar.openSnackBar(`User ${user.userName} Added Successfully!!!`)
      },
      error: err => {
        console.log(err)
      }
    })
  }

  get skillsArr(){
    return this.f['skills'] as FormArray
  }

  addSkills(){
    let skillControl = new FormControl(null, [Validators.required])
    this.skillsArr.push(skillControl)
  }

  removeSkills(i : number){
    this.skillsArr.removeAt(i)
  }

  editForm(){
    this.userId = this._routes.snapshot.paramMap.get('userId')!
    if(this.userId){
      this.isInEditMode = true
      this._userService.fetchUserById(this.userId).subscribe({
        next: data => {
          this.userObj = data
          this.userForm.patchValue({...data, skills : []})

          this.setSkills(data.skills)
          // this._formUtility.patchFormsArr(data.skills, this.skillsArr)
        },error : err => {
          console.log(err)
        }
      })
    }
  }

  setSkills(skills : Array<string>){
    this.skillsArr.clear()
          skills.forEach(skill => {
            let fcontrol = new FormControl(skill, [Validators.required])
            this.skillsArr.push(fcontrol)
  })
}

onUpdateForm(){
  if(this.userForm.valid){
    let updatedObj : Iusers = {...this.userForm.value, userId : this.userId}
    console.log(updatedObj)
    this._userService.updateUser(updatedObj).subscribe({
      next: data => {
        console.log(data)
        this.userForm.reset()
        this.isInEditMode = false
        this._router.navigate(['/users'])

        this._snackBar.openSnackBar(`User ${updatedObj.userName} Updated Successfully!!!`)
      },
      error: err => {
        console.log(err)
      }
    })
  }
}

}
