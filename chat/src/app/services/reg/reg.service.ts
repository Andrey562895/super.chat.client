import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../user.model';

@Injectable({
  providedIn: 'root'
})
export class RegService {

  constructor(private http: HttpClient) { }

  postData(user: User) {
    const data = { name: user.email, age: user.password };
    return this.http.post("http://192.168.1.109:3000/register/", data);
  }
}
