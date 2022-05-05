import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private apiService: ApiService ) { }

  data: Object = {};

  ngOnInit(): void {
    this.getPost();
  }

  getPost(): any{
    this.apiService.getWpPosts('Banner').subscribe(data => {
      // console.log(data);

      this.data = {
        'title': data.post_title,
        'content': data.acf.descricao,
        'image': data.acf.image_url
      }

      // console.log(this.data);

    });
  }

}
