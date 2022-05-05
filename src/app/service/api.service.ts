import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '../model/message';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient ) { }

  protected DOMAIN_URL: string = "http://localhost/wordpress/index.php/wp-json/api/v1/";

  protected apiBannerUrl = this.DOMAIN_URL + "banner";
  protected apiSobreUrl = this.DOMAIN_URL + "sobre";
  protected apiMissaoUrl = this.DOMAIN_URL + "missao";
  protected apiVisaoUrl = this.DOMAIN_URL + "visao";
  protected apiSolucoesUrl = this.DOMAIN_URL + "solucoes";
  protected apiClientesUrl = this.DOMAIN_URL + "clientes";
  protected apiPortfolioUrl = this.DOMAIN_URL + "portfolio";
  protected apiMensagensUrl = this.DOMAIN_URL + "send/message";

  getWpPosts(postType: string = 'Banner', bodyPost: Message = null): any{
    switch(postType){
      case 'Banner':
        return this.http.get(this.apiBannerUrl);
        break;
      case 'Sobre':
        return this.http.get(this.apiSobreUrl);
        break;
      case 'Missao':
        return this.http.get(this.apiMissaoUrl);
        break;
      case 'Visao':
        return this.http.get(this.apiVisaoUrl);
        break;
      case 'Solucoes':
        return this.http.get(this.apiSolucoesUrl);
        break;
      case 'Clientes':
        return this.http.get(this.apiClientesUrl);
        break;
      case 'Portfolio':
        return this.http.get(this.apiPortfolioUrl);
        break;
      case 'Mensagem':
        return this.http.post<Message>(this.apiMensagensUrl, bodyPost, {});
        break;
      default:
        console.log("Erro Interno");
        break;
    }
  }


}
