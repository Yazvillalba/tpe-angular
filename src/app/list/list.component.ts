import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HeladosCartService } from '../helados-cart.service';
import { HeladosDataService } from '../helados-data.service';
import { VermasServiceService } from '../vermas-service.service';
import { Helado } from './list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
 /* helados: Helado[]= [{
    "nombre": "Cucurucho Mediano",
    "tipo":"",
    "precio": 350,
    "stock": 25,
    "imagen": "assets/img/cucurucho.jpg",
    "oferta": true,
    "cantidad": 0,
  },{
    "nombre": "Batidos",
    "tipo": "",
    "precio": 500,
    "stock": 15,
    "imagen": "assets/img/batido.jpg",
    "oferta": false,
    "cantidad": 0,
  },{
    "nombre": "1/4",
    "tipo":" ",
    "precio": 600,
    "stock": 0,
    "imagen": "assets/img/cuarto.jpg",
    "oferta": false,
    "cantidad": 0,
  },
  {"nombre": "Casata",
    "tipo": "",
    "precio": 200,
    "stock": 5,
    "imagen": "assets/img/casata.jpg",
    "oferta": false,
    "cantidad": 0
  },
  { "nombre": "Finery",
    "tipo": "",
    "precio": 1500,
    "stock": 0,
    "imagen": "assets/img/finery.jpg",
    "oferta": false,
    "cantidad": 0
  },
  {
    "nombre": "franui",
    "tipo": "",
    "precio": 500,
    "stock": 15,
    "imagen": "assets/img/franui.jpg",
    "oferta": false,
    "cantidad": 0
  }];*/
  
  helados: Helado[] = [];

  detalleHelado: Helado | undefined;
  
  modalSwitch: boolean | undefined;

  constructor(
    private cart: HeladosCartService,
    private heladosDataService: HeladosDataService,
    private modalSS: VermasServiceService
    ) { 
    
  }

  ngOnInit(): void {
    this.heladosDataService.getAll() 
    .subscribe(helados=> this.helados = helados); 
    this.modalSS.$modal.subscribe((valor) => {this.modalSwitch = valor})
  }

  addToCart(helado: Helado):void{
    this.cart.addToCart(helado);
    helado.stock -= helado.cantidad;
    helado.cantidad = 0;
  }
  maxReached(m:string){
    alert(m);
  }
  openModal(helado:Helado){
     this.modalSwitch = true;
     this.detalleHelado = helado;
  }
}
