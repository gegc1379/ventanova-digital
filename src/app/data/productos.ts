import { Producto } from '../models/producto';

export const PRODUCTOS: Producto[] = [
  {
    id: 1,
    nombre: 'iPhone 15 Pro Max',
    categoria: 'Smartphones',
    descripcion: 'Caja de titanio de grado aeroespacial, chip A17 Pro, sistema de cámaras avanzado con zoom óptico de 5x y puerto USB-C.',
    precio: 1149990,
    imagenUrl: 'img/iphone.jpg',
    destacado: true,
    crecimientoVentas: 18,
    calificacion: 4.8
  },
  {
    id: 2,
    nombre: 'MacBook Pro 14 M3',
    categoria: 'Computación',
    descripcion: 'Pantalla Liquid Retina XDR, chip M3 con CPU de 8 núcleos, GPU de 10 núcleos, 16GB de memoria unificada y batería de larga duración.',
    precio: 1849990,
    imagenUrl: 'img/macbook.jpg',
    destacado: true,
    crecimientoVentas: 22,
    calificacion: 4.9
  },
  {
    id: 3,
    nombre: 'Sony WH-1000XM5',
    categoria: 'Audio',
    descripcion: 'Audífonos inalámbricos premium con cancelación de ruido activa líder en el sector, sonido de alta resolución y 30 horas de autonomía.',
    precio: 229990,
    imagenUrl: 'img/sony.png',
    destacado: false,
    crecimientoVentas: 15,
    calificacion: 4.7
  },
  {
    id: 4,
    nombre: 'Apple Watch Ultra 2',
    categoria: 'Accesorios',
    descripcion: 'Caja de titanio de 49 mm, la pantalla más brillante de Apple, GPS de doble frecuencia de alta precisión y hasta 36 horas de batería.',
    precio: 899990,
    imagenUrl: 'img/apple.jpg',
    destacado: false,
    crecimientoVentas: 28,
    calificacion: 4.6
  },
  {
    id: 5,
    nombre: 'iPad Pro M4',
    categoria: 'Computación',
    descripcion: 'Pantalla Ultra Retina XDR con tecnología OLED, el revolucionario y potente chip M4 de Apple y diseño increíblemente delgado.',
    precio: 1169990,
    imagenUrl: 'img/ipad.jpg',
    destacado: true,
    crecimientoVentas: 25,
    calificacion: 4.8
  }
];