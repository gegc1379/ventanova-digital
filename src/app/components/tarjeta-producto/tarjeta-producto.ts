import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-tarjeta-producto',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './tarjeta-producto.html',
  styleUrl: './tarjeta-producto.css'
})
export class TarjetaProductoComponent {
  @Input({ required: true }) producto!: Producto;
  @Input() textoBoton = 'Ver más';

  @Output() productoSeleccionado = new EventEmitter<Producto>();

  notificarSeleccion() {
    this.productoSeleccionado.emit(this.producto);
  }
}