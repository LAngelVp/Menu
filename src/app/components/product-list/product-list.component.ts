import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComidaComponent } from '../product-comida/product-comida.component';
import { ProductBebidaComponent } from "../product-bebida/product-bebida.component";
import { ProductBebidaAlcoholComponent } from '../product-bebida-alcohol/product-bebida-alcohol.component';
import { ProducPromocionesComponent } from "../produc-promociones/produc-promociones.component";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    ProductComidaComponent,
    CommonModule,
    ProductBebidaComponent,
    ProductBebidaAlcoholComponent,
    ProducPromocionesComponent
],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  seleccionado: "comida" | "bebidas" | "bebidas-alcoholicas" = "comida"; // Valor inicial

  // Método para cambiar el valor de 'seleccionado' al hacer clic
  onSelect(tipo: "comida" | "bebidas" | "bebidas-alcoholicas") {
    this.seleccionado = tipo;
  }
}
