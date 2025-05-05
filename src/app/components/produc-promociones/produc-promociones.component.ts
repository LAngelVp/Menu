import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importar CommonModule

@Component({
  selector: 'app-produc-promociones',
  standalone: true,
  imports: [CommonModule], // Añadir CommonModule a la lista de imports
  templateUrl: './produc-promociones.component.html',
  styleUrls: ['./produc-promociones.component.css']
})
export class ProducPromocionesComponent {
  promociones = [
    { id: 1, imagen: 'assets/promocion1.png', descripcion: '¡Oferta especial en hamburguesas!' },
    { id: 2, imagen: 'assets/promocion2.png' , descripcion: '30% de descuento en pizzas de pepperoni' },
    { id: 3, imagen: 'assets/promocion3.png', descripcion: 'Alitas de cualquier especialidad' },
  ];

  currentIndex: number = 0;

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.promociones.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.promociones.length) % this.promociones.length;
  }
}
