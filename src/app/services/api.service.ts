import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stats } from '../models/fakeStats';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http:HttpClient) {}
  async getFakeStat(){
    return this.http.get<Stats>("http://ludo-api.les-combien.com/api/open/get-fake-stats").toPromise();
  }
}