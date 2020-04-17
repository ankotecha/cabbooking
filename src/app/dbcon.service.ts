import { Injectable } from '@angular/core';
import { User } from './model/user';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ride } from './model/Ride';

export const httpOptions =  {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class DbconService {
  private _url :string = "http://localhost:8000/user"
  public e;
  constructor(private http: HttpClient) { }
  postUser(user : User) {
    console.log(user)
    var user1=JSON.stringify(user)
    console.log(user1)
    return this.http.post(this._url,user1, httpOptions)
  }
  private _url1 :string = "http://localhost:8000/login"

  login(user : User) {
    console.log(user)
    var user1=JSON.stringify(user)
    console.log(user1)
    return this.http.post(this._url1,user1, httpOptions)
  }
  private _url2 :string = "http://localhost:8000/booking"

  bookservice(book:any) {
    console.log(book)
    var book1=JSON.stringify(book)
    console.log(book1)
    return this.http.post(this._url2,book1, httpOptions)
  }
  private _url4 :string = "http://localhost:8000/confirmbooking"
  confirmservice(confirm:Ride)
  {
    console.log(confirm)
    var confirm1=JSON.stringify(confirm)
    console.log(confirm1);
    return this.http.post(this._url4,confirm1,httpOptions)
  }

  private _url6 :string = "http://localhost:8000/allride"
allride()
{
  return this.http.post(this._url6,httpOptions)

}
private _url7 :string = "http://localhost:8000/allroutes"

allroutes()
{
  return this.http.post(this._url7,httpOptions)

}

  private _url5 :string = "http://localhost:8000/viewride"
  viewrideservice(user:any)
  {
    //console.log(confirm)
    var username=JSON.stringify(user)
    console.log("sam");
    console.log(username);
    return this.http.post(this._url5,username,httpOptions)
  }
  private _url3 :string = 'http://localhost:8000/admin';
  addUser(name, username, password,contact,email) {
    console.log(name, username, password,contact,email);
    const obj = {
      name, username, password,contact,email
    };
    this.http.post(`${this._url3}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  addRoute(place1, place2, distance) {
    console.log(place1, place2, distance);
    const obj = {
      place1, place2, distance    };
    this.http.post('http://localhost:8000/admin/addroute', obj,httpOptions)
        .subscribe(res => console.log('Done'));

    // this.http.get('http://localhost:8000/test',httpOptions)
  }
// updateDetails()
// {

//   return this
//   .http
//   .get("http://localhost:8000/update",httpOptions);
// }
  getUsers() {
    return this
           .http
           .get(`${this._url3}/get`);
  }

  getRoutes() {
    return this
           .http
           .get(`${this._url3}/getroute`);
  }

  editUser(id) {
    return this
            .http
            .get("http://localhost:8000/admin/edit/"+id);
    }
    deleteUser(id) {
      return this
                .http
                .get(`${this._url3}/delete/${id}`);
    }
    updateUser(name, username, password,contact,email,id) {
      const obj = {
        name, username, password,contact,email
      };
      this
        .http
        .post(`${this._url3}/update/${id}`, obj)
        .subscribe(res => console.log('Done'));
  }
}




