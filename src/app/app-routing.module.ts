import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { HeladosComponent } from './helados/helados.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'helados',
    pathMatch: 'full',
  },
  {
    path: 'helados', 
    component: HeladosComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
