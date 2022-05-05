import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './service/api.service';

import { HttpClientModule } from '@angular/common/http';
import { SobreComponent } from './sobre/sobre.component';
import { HomeComponent } from './home/home.component';
import { SolucoesComponent } from './solucoes/solucoes.component';
import { ClientesComponent } from './clientes/clientes.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    HomeComponent,
    SolucoesComponent,
    ClientesComponent,
    PortfolioComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
