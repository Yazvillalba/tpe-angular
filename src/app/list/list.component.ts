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
	
	helados: Helado[] = [];
	cartList: Helado | undefined;

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
		this.cart.obtenerStock().subscribe(heladoNuevo =>{
			this.helados.forEach(helado => {			
				if(heladoNuevo.nombre == helado.nombre){
					helado.stock = helado.stock + 1;
				}
			});
			console.log(this.helados)
		})
	}

	addToCart(helado: Helado):void{
		if(helado.cantidad > 0){
			this.cart.addToCart(helado);
			helado.stock -= helado.cantidad;
			helado.cantidad = 0;
		}
	}
	maxReached(m:string){
		alert(m);
	}
	openModal(helado:Helado){
		this.modalSwitch = true;
		this.detalleHelado = helado;
	}
}
