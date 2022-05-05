import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  constructor( private apiService: ApiService ) { }

  protected data: Object = {};
  protected missao: Object = {};
  protected visao: Object = {};

  get dataObject(): Object{
    return this.data;
  }

  set dataObject(data){
    this.data = data;
  }

  get missaoObject(): Object{
    return this.missao;
  }

  set missaoObject(missao){
    this.missao = missao;
  }

  get visaoObject(): Object{
    return this.visao;
  }
  set visaoObject(visao){
    this.visao = visao;
  }

  ngOnInit(): void {
    this.getAboutPost();
    this.getMissaoPost();
    this.getVisaoPost();  
  }

  getAboutPost(): any{
    this.apiService.getWpPosts('Sobre').subscribe(data => {
      // console.log(data);

      this.dataObject = {
        'title': data.post_title,
        'content': data.acf.description,
        'image': data.acf.image
      }

      // console.log(this.data);

    });
  }

  getMissaoPost(): any{
    this.apiService.getWpPosts('Missao').subscribe(data => {
      console.log(data);

      this.missao = {
        'title': data.post_title,
        'content': data.acf.description,
        'image': data.acf.image
      }

      // console.log(this.data);

    });
  }

  getVisaoPost(): any{
    this.apiService.getWpPosts('Visao').subscribe(data => {
      // console.log(data);

      this.visao = {
        'title': data.post_title,
        'content': data.acf.description,
        'image': data.acf.image
      }

      // console.log(this.data);

    });
  }



}
