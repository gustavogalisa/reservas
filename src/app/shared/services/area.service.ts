import { Injectable } from '@angular/core';
import {Area} from "../model/area";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {stringify} from "@angular/compiler/src/util";

@Injectable({
  providedIn: 'root'
})
export class AreaService {
  constructor(private httpClient: HttpClient) {
  }

  URL_AREAS = 'http://localhost:3000/areas'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  list(): Observable<Area[]> {
    return this.httpClient.get<Area[]>(this.URL_AREAS);
  }

  create(area: Area): Observable<Area> {
    return this.httpClient.post<Area>(this.URL_AREAS, area, this.httpOptions);
  }

  remover(id: number): Observable<object> {
    return this.httpClient.delete(`${this.URL_AREAS}/${id}`);
  }
}
