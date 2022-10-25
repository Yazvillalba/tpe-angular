import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, VirtualTimeScheduler } from 'rxjs';
import { Helado } from './list/list';

@Injectable({
  providedIn: 'root'
})
export class HeladosCartService {
 
 private _cartList: Helado[] = [];

  cartList: BehaviorSubject<Helado []>= new BehaviorSubject(this._cartList);
  public stockSubject = new Subject<Helado>();
  constructor() { }
  
  addToCart(helado: Helado) {
  let item: Helado | undefined = this._cartList.find((v1) => v1.nombre == helado.nombre);
  if(!item){
    this._cartList.push({... helado}); //copia del objeto y hace el push de esa copia
   } else{
    item.cantidad += helado.cantidad;
   }
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
    .filter((item)=> item.cantidad != 0);
    this.cartList.next(this._cartList); 
  }
  setStock(helado: Helado){
    this.stockSubject.next(helado);

  }
  obtenerStock(): Observable<Helado>{
    return this.stockSubject.asObservable();
  }
}
