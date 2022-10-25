import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HeladosCartService } from '../helados-cart.service';
import { Helado } from '../list/list';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})

export class CarritoComponent implements OnInit {
  total= 0;
  
  cartList$: Observable<Helado[]>; 
  constructor(private cart: HeladosCartService,
  ){
    cart.cartList.subscribe(listaHelados  => {
      this.total=0;
      let suma = 0;
      listaHelados.forEach((elementoHelado)=> {
        let totalElemento = elementoHelado.cantidad*elementoHelado.precio;
        suma+= totalElemento;
        this.total= suma;
      })});
    this.cartList$ = cart.cartList.asObservable();
  }
  
  ngOnInit(): void {
  }

  eliminar(helado: Helado):void{
    this.cart.eliminar(helado);
    this.cart.setStock(helado);
  }

}


