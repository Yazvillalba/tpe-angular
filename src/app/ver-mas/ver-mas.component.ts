import { Component, Input, OnInit } from '@angular/core';
import { Helado } from '../list/list';
import { VermasServiceService } from '../vermas-service.service';
@Component({
  selector: 'app-ver-mas',
  templateUrl: './ver-mas.component.html',
  styleUrls: ['./ver-mas.component.scss']
})
export class VerMasComponent implements OnInit {

  @Input() detalleHelado: Helado | undefined;

  constructor(private modalSS: VermasServiceService) { }
  ngOnInit(): void {
    console.log(this.detalleHelado)
  }

  cerrarVerMas(){
    this.modalSS.$modal.emit(false);
  }
}

