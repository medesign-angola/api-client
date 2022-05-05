import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { Message } from '../model/message';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor( 
    private apiService: ApiService
  ) { }

  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      'nome': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'assunto': new FormControl('', [Validators.required]),
      'mensagem': new FormControl('', [Validators.required])
    });
  }

  function(){

    this.apiService.getWpPosts('Mensagem', this.form.value).subscribe(data => {
      console.log(data);
    });

    this.form.reset();

    // console.log(this.form.value);
  }

}
