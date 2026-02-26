import { Injectable } from '@angular/core';
import { FormArray, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormUtilityService {

  constructor() { }

  patchFormsArr(dataArr : Array<any>, formArr : FormArray){
    formArr.clear()
    dataArr.forEach(data => {
      let fControl = new FormControl(null, [Validators.required])
      formArr.push(fControl)
    })
  }
}
