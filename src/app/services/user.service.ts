import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable(
  {
    providedIn: 'root'
  }
)
 
export class UserService {
  constructor(private _http: HttpClient) {
 
  }
  add(user: any, file:File) {
 
    const formData = new FormData();
    formData.append('file', file);
    formData.append('firstName', user.firstName);
    formData.append('lastName', user.lastName);
    formData.append('email', user.email)
    formData.append('phoneNumber', user.phoneNumber)
    formData.append('profileImage', user.profileImage)
    return this._http.post('http://localhost:5000/user',formData);
  }
 
  get(){
      return this._http.get('http://localhost:5000/user');
  }
 
  getById(id:any){
    console.log(id);
    
    return this._http.get('http://localhost:5000/user/' +id)
  }
  update(user: any, file:File) {
    const formData = new FormData();
    
    formData.append('file', file);
    formData.append('firstName', user.firstName);
    formData.append('lastName', user.lastName);
    formData.append('email', user.email)
    formData.append('phoneNumber', user.phoneNumber)
    formData.append('profileImage', user.profileImage)
    formData.append('_id', user._id)
    return this._http.post('http://localhost:5000/user/update',formData);
  }
 
  delete(id:any){
    return this._http.delete('http://localhost:5000/user/'+id)
  }
 
  search(search:any){
    console.log(search);
    return this._http.post('http://localhost:5000/user/search', search)
  }
}


