import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';  // Importar esta función

@Component({
  selector: 'app-produc-promociones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produc-promociones.component.html',
  styleUrls: ['./produc-promociones.component.css']
})
export class ProducPromocionesComponent implements OnInit {
  currentIndex: number = 0;
  promociones: any[] = [];

  promociones_escritorio = [
    { id: 1, imagen: 'assets/promocion1.webp', descripcion: '¡Oferta especial en hamburguesas!' },
    { id: 2, imagen: 'assets/promocion2.webp', descripcion: '30% de descuento en pizzas de pepperoni' },
    { id: 3, imagen: 'assets/promocion3.webp', descripcion: 'Alitas de cualquier especialidad' },
  ];

  promociones_movil = [
    { id: 1, imagen: 'assets/Alitas.webp', descripcion: '¡Oferta especial (móvil)!' },
    { id: 2, imagen: 'assets/DISFRUTAYA.webp', descripcion: 'Descuento exclusivo en móvil' },
    { id: 3, imagen: 'assets/PIZZAPEPPERONI.webp', descripcion: 'Alitas de cualquier especialidad' },
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    // Solo accede a window si está en el navegador
    if (isPlatformBrowser(this.platformId)) {
      this.updatePromociones();
      window.addEventListener('resize', this.updatePromociones.bind(this));
    }
  }

  updatePromociones(): void {
    if (isPlatformBrowser(this.platformId)) {
      const isMobile = window.innerWidth <= 768;
      this.promociones = isMobile ? this.promociones_movil : this.promociones_escritorio;
      this.currentIndex = 0; // Reiniciar al cambiar entre versiones
    }
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.promociones.length;
  }

  prev(): void {
    this.currentIndex = (this.currentIndex - 1 + this.promociones.length) % this.promociones.length;
  }
}
