import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private http: HttpClient
  ) { }

  //private api = 'https://gateway.marvel.com/v1/public/characters?';
  //private auth = 'ts=thesoer&apikey=001ac6c73378bbfff488a36141458af2&hash=72e5ed53d1398abb831c3ceec263f18b'

  private api = 'http://localhost:8090/alianzaClient';
  private logs = 'http://localhost:8090/logs';

  get(){
    const response =  this.http.post(`${this.api}/getAll`, null)
      .pipe(map((data: any) => data));
      console.log(response);
    return response;
  }

  addClient(datos: any){
    const response =  this.http.post(`${this.api}/add`, datos)
      .pipe(map((data: any) => data));
      console.log(response);
    return response;
  }

  search(datos: any){
    const response =  this.http.post(`${this.api}/serachBySharedKey`, datos)
      .pipe(map((data: any) => data));
      console.log(response);
    return response;
  }

  getLogs(){
    const response =  this.http.post(`${this.logs}/getAll`, null)
      .pipe(map((data: any) => data));
      console.log(response);
    return response;
  }


}


