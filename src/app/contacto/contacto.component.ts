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
  error: Object;
  sucess: Object;

  ngOnInit(): void {
    this.form = new FormGroup({
      'nome': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'assunto': new FormControl('', [Validators.required]),
      'mensagem': new FormControl('', [Validators.required])
    });
  }

  function(){

    const formData = new FormData();

    formData.append('nome', this.form.get('nome').value);
    formData.append('email', this.form.get('email').value);
    formData.append('assunto', this.form.get('assunto').value);
    formData.append('mensagem', this.form.get('mensagem').value);

    this.apiService.getWpPosts('Mensagem', formData).subscribe(data => {
      
      // console.log(data);

      this.sucess = {
        'status': data.estado,
        'message': data.mensagem
      }
      console.log(this.sucess);

      this.form.reset();

      let timeOut = setTimeout(() => {
        this.sucess = '';
      }, 5000);

    }, (err) => {
      
      // console.log(err.error);

      this.error = {
        'message': err.error
      }
      let timeOut = setTimeout(() => {
        this.error = '';
      }, 5000);

    });


    // console.log(this.form.value);
  }

}
