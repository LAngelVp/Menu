import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-bebida-alcohol',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './product-bebida-alcohol.component.html',
  styleUrl: './product-bebida-alcohol.component.css'
})
export class ProductBebidaAlcoholComponent {
  lista_bebidas_alcoholicas = [
    {
      id: 0,
      nombre: "Cerveza Corona",
      precio: 2.00,
      ingredientes: "agua, malta, lúpulo, levadura",
      imagen: "https://images.unsplash.com/photo-1603644197087-dbeeba73e106?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 1,
      nombre: "Cerveza Heineken",
      precio: 2.50,
      ingredientes: "agua, malta, lúpulo, levadura, frutas",
      imagen: "https://images.unsplash.com/photo-1618885472179-5e474019f2a9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      nombre: "Cerveza STella Artois",
      precio: 2.75,
      ingredientes: "agua, malta, lúpulo, levadura, chocolate",
      imagen: "https://images.unsplash.com/photo-1723195269879-44a4df25ebf7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      nombre: "Margarita",
      precio: 5.50,
      ingredientes: "tequila, licor de naranja, lima, sal",
      imagen: "https://plus.unsplash.com/premium_photo-1721995756052-0f4b1eff2d24?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 4,
      nombre: "Mojito",
      precio: 4.50,
      ingredientes: "ron blanco, hierbabuena, azúcar, lima, soda",
      imagen: "https://plus.unsplash.com/premium_photo-1722194069219-16ec49c08625?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 5,
      nombre: "Piña Colada",
      precio: 5.00,
      ingredientes: "ron blanco, piña, crema de coco",
      imagen: "https://images.unsplash.com/photo-1607644536940-6c300b5784c5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 6,
      nombre: "Daiquiri de fresa",
      precio: 4.75,
      ingredientes: "ron blanco, fresas, azúcar, jugo de lima",
      imagen: "https://images.unsplash.com/photo-1630541010111-1bd604c9aba2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 7,
      nombre: "Caipirinha",
      precio: 5.25,
      ingredientes: "cachaça, lima, azúcar",
      imagen: "https://imgs.search.brave.com/OCLTo1Pyne-wsiYvSnwB-EiAAwax1tyvQRNUrsWdswU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bGF5bGl0YS5jb20v/cmVjZXRhcy93cC1j/b250ZW50L3VwbG9h/ZHMvQ2FpcGlyaW5o/YXMtcmVjZXRhLmpw/Zw"
    },
    {
      id: 8,
      nombre: "Gin Tonic",
      precio: 6.00,
      ingredientes: "ginebra, agua tónica, limón",
      imagen: "https://images.unsplash.com/photo-1453824979084-c8fd42932378?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 9,
      nombre: "Bloody Mary",
      precio: 6.50,
      ingredientes: "vodka, jugo de tomate, salsa picante, limón, especias",
      imagen: "https://images.unsplash.com/photo-1551734322-f43b0798585a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];
  
}
