import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent implements OnInit {

  constructor() { }
  @Input()
  cantidad!: number;
  @Input()
  max!: number;

  @Output()
  cantidadChange: EventEmitter<number>= new EventEmitter<number>();
  
  @Output()
  maxReacher: EventEmitter<string>= new EventEmitter<string>();
  //evento para cada vez que el stock alcanzo el maximo
  
  ngOnInit(): void {
  }
  upQuantity(): void{
    if(this.max > this.cantidad){
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad);  
    } else{
      this.maxReacher.emit("se alcanzo el maximo");
    }
    
  }
  downQuantity(): void{
    if(this.cantidad> 0){
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad);
    }
  }

  changeQuantity(event: any): void{
    console.log(event);
    this.cantidadChange.emit(this.cantidad);
  }
}
