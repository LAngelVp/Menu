import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-bebida',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './product-bebida.component.html',
  styleUrl: './product-bebida.component.css'
})
export class ProductBebidaComponent {
  lista_bebidas = [
    {
      id: 0,
      nombre: "Refresco de cola",
      precio: 1.99,
      ingredientes: "agua carbonatada, azúcar, cafeína, saborizante natural",
      imagen: "https://images.pexels.com/photos/50593/coca-cola-cold-drink-soft-drink-coke-50593.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 1,
      nombre: "Jugo de naranja natural",
      precio: 2.49,
      ingredientes: "naranja fresca exprimida",
      imagen: "https://plus.unsplash.com/premium_photo-1667543228378-ec4478ab2845?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      nombre: "Agua mineral",
      precio: 1.50,
      ingredientes: "agua con gas",
      imagen: "https://images.unsplash.com/photo-1695191531200-2d64a72ab782?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      nombre: "Limonada",
      precio: 2.00,
      ingredientes: "agua, limón, azúcar",
      imagen: "https://images.unsplash.com/photo-1507281549113-040fcfef650e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 4,
      nombre: "Café americano",
      precio: 1.75,
      ingredientes: "agua, café molido",
      imagen: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 5,
      nombre: "Té helado",
      precio: 2.25,
      ingredientes: "té negro, limón, azúcar, hielo",
      imagen: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 6,
      nombre: "Malteada de fresa",
      precio: 4.00,
      ingredientes: "leche, helado de fresa, crema batida",
      imagen: "https://images.unsplash.com/photo-1611928237590-087afc90c6fd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 7,
      nombre: "Smoothie tropical",
      precio: 4.50,
      ingredientes: "mango, piña, plátano, yogur",
      imagen: "https://plus.unsplash.com/premium_photo-1720446089066-661e8fb6b7b3?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 8,
      nombre: "Café con leche",
      precio: 2.25,
      ingredientes: "café expreso, leche vaporizada",
      imagen: "https://plus.unsplash.com/premium_photo-1663932464569-d30684dae248?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 9,
      nombre: "Chocolate caliente",
      precio: 2.75,
      ingredientes: "leche, cacao, azúcar, crema",
      imagen: "https://images.unsplash.com/photo-1517578239113-b03992dcdd25?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];
}
