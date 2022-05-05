import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-solucoes',
  templateUrl: './solucoes.component.html',
  styleUrls: ['./solucoes.component.css']
})
export class SolucoesComponent implements OnInit {

  constructor( private apiService: ApiService ) { }

  datas: Array<Object> = [];

  ngOnInit(): void {
    this.getPost();
  }

  getPost(): any{
    this.apiService.getWpPosts('Solucoes').subscribe(data => {
      // console.log(data);

      data.forEach(solution => {
        // console.log(solution);
        this.datas.push(solution);
      });

      console.log(this.datas);

    });
  }

}
