import { Component, inject, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { ProductoService } from '../../services/producto';
import { TarjetaProductoComponent } from '../../components/tarjeta-producto/tarjeta-producto';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [TarjetaProductoComponent, RouterLink, CurrencyPipe],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class InicioComponent {
  private productoService = inject(ProductoService);
  private todosLosProductos = this.productoService.getProductos();

  ultimoProductoConsultado = signal<Producto | null>(null);
  consultados = signal<Producto[]>([]);

  productosDestacados = computed(() => 
    this.todosLosProductos().filter(p => p.destacado)
  );

  totalConsultados = computed(() => this.consultados().length);

  registrarInteres(producto: Producto) {
    this.ultimoProductoConsultado.set(producto);
    this.consultados.update(lista =>
      lista.some(p => p.id === producto.id) ? lista : [...lista, producto]
    );
  }

  cotizar(producto: Producto) {
    this.productoService.interesSeleccionado.set(producto.nombre);
  }
}