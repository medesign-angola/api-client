import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor( private apiService: ApiService ) { }

  datas: Array<Object> = [];

  ngOnInit(): void {
    this.getPost();
  }

  getPost(): any{
    this.apiService.getWpPosts('Clientes').subscribe(data => {
      // console.log(data);

      data.forEach(solution => {
        // console.log(solution);
        this.datas.push(solution);
      });

      console.log(this.datas);

    });
  }

}
