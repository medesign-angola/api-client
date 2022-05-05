import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  { path: '', redirectTo: '/contact', pathMatch: 'full'},
  { path: 'contact', component: ContactoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
