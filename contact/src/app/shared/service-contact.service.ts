import { Injectable } from '@angular/core';
import { Contactlist } from './contactlist';
//import { Contactlist } from '../shared/model/contactlist.model';
import { Observable,throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceContactService {

  selectedContact: Contactlist;
  contact: Contactlist[];
   
  baseURL = 'http://localhost:3000/contact';

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(public http: HttpClient){};

  postContact(con: Contactlist){
    
    return this.http.post(this.baseURL, con);
  }
  // postContact(data: Contactlist): Observable<any> {
  //   let API_URL = `${this.baseURL}/contact`;
  //   return this.http.post(this.baseURL, data)
  // }

  getContactList() {
    return this.http.get(this.baseURL);
  }

  putContact(con: Contactlist) {
    return this.http.patch(this.baseURL + `/${con._id}`, con);
  }

  deleteContact(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
