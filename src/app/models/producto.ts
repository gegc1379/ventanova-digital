export interface Producto {
  id: number;
  nombre: string;
  categoria: string;
  descripcion: string;
  precio: number;
  imagenUrl: string;
  destacado: boolean;
  crecimientoVentas: number;
  calificacion: number;
}