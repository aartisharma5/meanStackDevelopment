import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Item } from '../item';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  gettodoItem():Observable<Item[]>{
    return this.http.get<Item[]>('http://localhost:3000/item');
  }

  addtodoItem(newItem){
    let headers = new HttpHeaders();

    headers.append('Content-Type', 'application/json')

    return this.http.post('http://localhost:3000/item/', newItem, {headers: headers});
  }

  updatetodoItem(newItem){
    let headers = new HttpHeaders();

    headers.append('Content-Type', 'application/json')

    return this.http.put('http://localhost:3000/item/'+newItem._id, newItem, {headers: headers});
  }

  deletetodoItem(newItem){
    return this.http.delete('http://localhost:3000/item/'+newItem._id);
  }
}
