import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Helado } from './list/list';

@Injectable({
  providedIn: 'root'
})
export class HeladosCartService {
 
 private _cartList: Helado[] = [];
  cartList: BehaviorSubject<Helado []>= new BehaviorSubject(this._cartList);
  
  constructor() { }
  
  addToCart(helado: Helado) {
  let item: Helado | undefined = this._cartList.find((v1) => v1.nombre == helado.nombre);
  //me tiraba error si no ponia el | undefined, supongo que es la nueva actualizacion o algo asi
   if(!item){
    this._cartList.push({... helado}); //copia del objeto y hace el push de esa copia
   } else{
    item.cantidad += helado.cantidad;
   }
    console.log(this._cartList);
    this.cartList.next(this._cartList);//equivale al emit del evento 
  }

  eliminar(helado:Helado){
   
    this._cartList = this._cartList.map((item)=>{
    if(helado.id == item.id){ //map: recorre el arreglo y devuelve el arreglo modificado
     let borrado = helado;
      borrado.cantidad -= 1;
      return borrado;
     } 
     return item;
    }) //filter recorre la lista y devuelve los que den verdadero de la condicion
    .filter((item)=> item.cantidad != 0)
    console.log(this._cartList);
    this.cartList.next(this._cartList); 
  }
}
