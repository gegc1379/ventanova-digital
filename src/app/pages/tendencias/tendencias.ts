import { Component, inject, signal, computed } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ProductoService } from '../../services/producto';
import { TarjetaProductoComponent } from '../../components/tarjeta-producto/tarjeta-producto';
import { Producto } from '../../models/producto';

const MAX_COMPARACION = 3;

@Component({
  selector: 'app-tendencias',
  standalone: true,
  imports: [TarjetaProductoComponent, CurrencyPipe],
  templateUrl: './tendencias.html',
  styleUrl: './tendencias.css'
})
export class TendenciasComponent {
  private productoService = inject(ProductoService);
  
  private todosLosProductos = this.productoService.getProductos();

  categoriaSeleccionada = signal<string>('Todas');
  seleccionados = signal<Producto[]>([]);

  categoriasDisponibles = computed(() => {
    const categoriasBase = this.todosLosProductos().map(p => p.categoria);
    return ['Todas', ...Array.from(new Set(categoriasBase))];
  });

  productosFiltradosPorCategoria = computed(() => {
    const categoria = this.categoriaSeleccionada();
    if (categoria === 'Todas') {
      return this.todosLosProductos();
    }
    return this.todosLosProductos().filter(p => p.categoria === categoria);
  });

  resumenCategorias = computed(() => {
    const grupos = new Map<string, Producto[]>();
    for (const p of this.todosLosProductos()) {
      grupos.set(p.categoria, [...(grupos.get(p.categoria) ?? []), p]);
    }

    const resumen = [...grupos].map(([categoria, items]) => ({
      categoria,
      cantidad: items.length,
      precioPromedio: Math.round(items.reduce((t, p) => t + p.precio, 0) / items.length),
      crecimiento: Math.round(items.reduce((t, p) => t + p.crecimientoVentas, 0) / items.length)
    }));

    const maximo = Math.max(...resumen.map(r => r.crecimiento));
    return resumen.map(r => ({ ...r, barra: Math.round((r.crecimiento / maximo) * 100) }));
  });

  mejorCrecimientoId = computed(() => {
    const lista = this.seleccionados();
    if (lista.length < 2) return null;
    return lista.reduce((a, b) => (b.crecimientoVentas > a.crecimientoVentas ? b : a)).id;
  });

  limiteAlcanzado = computed(() => this.seleccionados().length >= MAX_COMPARACION);

  estaSeleccionado(producto: Producto): boolean {
    return this.seleccionados().some(p => p.id === producto.id);
  }

  alternarComparacion(producto: Producto) {
    this.seleccionados.update(lista => {
      if (lista.some(p => p.id === producto.id)) {
        return lista.filter(p => p.id !== producto.id);
      }
      return lista.length < MAX_COMPARACION ? [...lista, producto] : lista;
    });
  }

  limpiarComparacion() {
    this.seleccionados.set([]);
  }
}