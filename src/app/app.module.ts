import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { HeladosComponent } from './helados/helados.component';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { VerMasComponent } from './ver-mas/ver-mas.component';
@NgModule({
  declarations: [
    AppComponent,
    CarritoComponent,
    ContactoComponent,
    InputNumberComponent,
    HeladosComponent,
    ListComponent,
    VerMasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
