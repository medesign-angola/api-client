import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '../model/message';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient ) { }

  protected DOMAIN_URL: string = "api/"; 

  protected apiMensagensUrl = this.DOMAIN_URL + "api_send_email/";

  getWpPosts(postType: string = 'Mensagem', bodyPost: any = null): any{
    switch(postType){
      case 'Mensagem':
      
        let headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Methods': 'POST'
        });

        return this.http.post<any>(this.apiMensagensUrl, bodyPost);
        break;
      default:
        console.log("Erro Interno");
        break;
    }
  }


}
