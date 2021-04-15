import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  URL_USERS = 'http://localhost:3000/users'

  list(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.URL_USERS);
  }

  create(user: User): Observable<User> {
    return this.httpClient.post<User>(this.URL_USERS, user);
  }

  remover(id: number): Observable<object> {
    return this.httpClient.delete(`${this.URL_USERS}/${id}`);
  }
}
