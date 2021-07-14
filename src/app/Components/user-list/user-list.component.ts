import { Component, OnInit, ViewChild } from '@angular/core';
import {UserService} from '../../services/user.service'
import {MatDialog} from '@angular/material/dialog';
import {CreateUserComponent} from '../create-user/create-user.component'
import {MatPaginator} from '@angular/material/paginator';
 
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
 
  data  
  dataSource
  search
  displayedColumns: string[] = [ 'firstName', 'lastName', 'email', 'phoneNumber', 'profileImage'];
  constructor(private userService: UserService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getList();
  }
  openDialog() {
    const dialogRef = this.dialog.open(CreateUserComponent);
 
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
 
  openDialogForEdit(id){
    console.log('testid', id);
    
    this.userService.getById(id).subscribe((res)=>{
      console.log(res);
      this.data= res 
      console.log(this.data);
 
      const dialogRef = this.dialog.open(CreateUserComponent, {data:this.data});
 
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });           
    })
  }
 
  searchByName(){
    if(this.search == ""){
      return this.getList()
    }
    var searchModel = {
      name:this.search
    }
    this.userService.search(searchModel).subscribe((res)=>{
    this.dataSource = [res]
    console.log([res]);
 
    })
    
  }
 
  getList(){
    console.log("My Response is here before call")
    this.userService.get().subscribe((res)=>{
      console.log("My Response is here "+res)
      this.dataSource = res
    })
  }
 
  
 
}
 


