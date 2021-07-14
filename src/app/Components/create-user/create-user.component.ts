import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Component, Injectable, OnInit, Inject } from '@angular/core';
import {MatChipInputEvent} from '@angular/material/chips';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {UserService} from '../../services/user.service';
//import {UserService} from '../../services/user.service'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
 
 
 
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  userForm:FormGroup;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  uploadFiles
  images: File
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  
  
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router,
    public dialogRef: MatDialogRef<CreateUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
 
    ) { 
 
  }
 userid
  ngOnInit(): void {
    
    if(this.data){
      this.userForm = this.fb.group({
      _id:[this.data._id],
      firstName:[this.data.firstName, Validators.required],
      lastName: [this.data.lastName, Validators.required],
      email: [this.data.email, Validators.required],
      phoneNumber:[this.data.phoneNumber, Validators.required],
      profileImage: [this.data.profileImage, Validators.required]
      
      })
    }
    else{
      this.userForm = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', Validators.required],
        phoneNumber:['', Validators.required],
        profileImage: ['', Validators.required]
       
      });
    }
 
 
  }
  add(event: MatChipInputEvent): void {
    debugger;
    const input = event.input;
    const value = event.value;
 
    // Add our fruit
    
 
    // Reset the input value
    if (input) {
      input.value = '';
    }
  }
 
  
  
  create(){
    this.userService.add(this.userForm.value, this.images).subscribe(res=>{
      console.log(res);
      this.router.navigate(['list'])
      
    })
  }
 
  updateUser(){
    this.userService.update(this.userForm.value, this.images).subscribe(res=>{
      console.log(res);
      this.router.navigate(['list'])
      
    })
  }
  deleteUser(){
    this.userService.delete(this.userForm.value._id).subscribe(res=>{
      console.log(res);
      this.router.navigate(['list'])
      
    })
  }
  fileChange(element:any) {
    const uploadFiles = element.target.files[0];
    this.images =uploadFiles
}
}
 


