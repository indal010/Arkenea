import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from './Components/user-list/user-list.component'
import{CreateUserComponent} from './Components/create-user/create-user.component'
const routes: Routes = [
  {path: '', component: UserListComponent},
  {path: 'list', component: UserListComponent},
  {path:'create', component:CreateUserComponent},
  {path:'edit/:id', component:CreateUserComponent}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 


