import { Injectable, signal } from '@angular/core';
import { Producto } from '../models/producto';
import { PRODUCTOS } from '../data/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private productosLista = signal<Producto[]>(PRODUCTOS);

  interesSeleccionado = signal<string>('');

  getProductos() {
    return this.productosLista.asReadonly();
  }
}