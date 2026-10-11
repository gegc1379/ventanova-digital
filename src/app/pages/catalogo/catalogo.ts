import { Component, inject, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductoService } from '../../services/producto';
import { TarjetaProductoComponent } from '../../components/tarjeta-producto/tarjeta-producto';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [FormsModule, RouterLink, CurrencyPipe, TarjetaProductoComponent],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css'
})
export class CatalogoComponent {
  private productoService = inject(ProductoService);

  private todosLosProductos = this.productoService.getProductos();

  textoBusqueda = signal<string>('');
  categoriaSeleccionada = signal<string>('Todas');
  productoActivo = signal<Producto | null>(null);

  categorias = computed(() => [
    'Todas',
    ...new Set(this.todosLosProductos().map(p => p.categoria))
  ]);

  productosFiltrados = computed(() => {
    const busqueda = this.textoBusqueda().toLowerCase().trim();
    const categoria = this.categoriaSeleccionada();

    return this.todosLosProductos().filter(producto =>
      (categoria === 'Todas' || producto.categoria === categoria) &&
      (!busqueda ||
        producto.nombre.toLowerCase().includes(busqueda) ||
        producto.categoria.toLowerCase().includes(busqueda))
    );
  });

  limpiarFiltros() {
    this.textoBusqueda.set('');
    this.categoriaSeleccionada.set('Todas');
  }

  cotizar(producto: Producto) {
    this.productoService.interesSeleccionado.set(producto.nombre);
  }
}