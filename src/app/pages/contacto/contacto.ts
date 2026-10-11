import { Component, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ProductoService } from '../../services/producto';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class ContactoComponent {
  private productoService = inject(ProductoService);

  productos = this.productoService.getProductos();

  nombre = '';
  email = '';
  productoInteres = this.productoService.interesSeleccionado();
  mensaje = '';

  formularioEnviado = signal(false);

  resumenNombre = '';
  resumenEmail = '';
  resumenProducto = '';

  enviarFormulario(formulario: NgForm) {
    if (formulario.invalid) {
      formulario.form.markAllAsTouched();
      return;
    }

    this.resumenNombre = this.nombre.trim();
    this.resumenEmail = this.email.trim();
    this.resumenProducto = this.productoInteres;
    this.formularioEnviado.set(true);

    this.nombre = '';
    this.email = '';
    this.productoInteres = '';
    this.mensaje = '';
    this.productoService.interesSeleccionado.set('');
  }
}