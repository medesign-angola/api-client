import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor( private apiService: ApiService ) { }

  datas: Array<Object> = [];

  ngOnInit(): void {
    this.getPost();
  }

  getPost(): any{
    this.apiService.getWpPosts('Portfolio').subscribe(data => {
      // console.log(data);

      data.forEach(solution => {
        // console.log(solution);
        this.datas.push(solution);
      });

      console.log(this.datas);

    });
  }

}
