import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-comida',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './product-comida.component.html',
  styleUrl: './product-comida.component.css'
})
export class ProductComidaComponent {
  lista_productos = [
    {
      "id": 0,
      "nombre": "Hamburguesa clásica",
      "precio": 5.99,
      "ingredientes": "pan, carne de res, lechuga, tomate, cebolla, mayonesa",
      "imagen" : "https://plus.unsplash.com/premium_photo-1684923609954-e8f7cb7eb3b5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {
      "id": 1,
      "nombre": "Hamburguesa con queso",
      "precio": 6.49,
      "ingredientes": "pan, carne de res, queso cheddar, lechuga, tomate, ketchup",
      "imagen":"https://images.unsplash.com/photo-1605789538467-f715d58e03f9?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {
      "id": 2,
      "nombre": "Hamburguesa doble",
      "precio": 7.99,
      "ingredientes": "pan, doble carne, queso, lechuga, tomate, cebolla caramelizada",
      "imagen":"https://images.unsplash.com/photo-1678110707493-8d05425137ac?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {
      "id": 3,
      "nombre": "Pizza pepperoni",
      "precio": 8.99,
      "ingredientes": "masa, salsa de tomate, queso mozzarella, pepperoni",
      "imagen":"https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {
      "id": 4,
      "nombre": "Pizza hawaiana",
      "precio": 9.49,
      "ingredientes": "masa, salsa, queso, jamón, piña",
      "imagen":"https://images.pexels.com/photos/20115309/pexels-photo-20115309/free-photo-of-pizza-cena-comida-queso.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {
      "id": 5,
      "nombre": "Pizza vegetariana",
      "precio": 8.49,
      "ingredientes": "masa, queso, pimientos, champiñones, cebolla, aceitunas",
      "imagen":"https://cdn.pixabay.com/photo/2024/04/23/09/32/ai-generated-8714516_960_720.jpg"},
    {
      "id": 6,
      "nombre": "Hot dog clásico",
      "precio": 3.99,
      "ingredientes": "pan, salchicha, mostaza, ketchup",
      "imagen":"https://images.unsplash.com/photo-1619740455993-9e612b1af08a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {
      "id": 7,
      "nombre": "Hot dog con queso",
      "precio": 4.49,
      "ingredientes": "pan, salchicha, queso derretido, cebolla",
      "imagen":"https://images.unsplash.com/photo-1603876468126-3f1fbc48de56?q=80&w=1370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {
      "id": 8,
      "nombre": "Tacos de carne",
      "precio": 6.00,
      "ingredientes": "tortilla, carne asada, cebolla, cilantro, salsa",
      "imagen":"https://images.pexels.com/photos/31924344/pexels-photo-31924344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {
      "id": 9,
      "nombre": "Tacos al pastor",
      "precio": 6.50,
      "ingredientes": "tortilla, cerdo adobado, piña, cebolla, cilantro",
      "imagen":"https://plus.unsplash.com/premium_photo-1681406995032-c3ceeb24d7f9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {
      "id": 10,
      "nombre": "Burrito de pollo",
      "precio": 7.00,
      "ingredientes": "tortilla, pollo, arroz, frijoles, queso, salsa",
      "imagen":"https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {
      "id": 11,
      "nombre": "Burrito de carne",
      "precio": 7.50,
      "ingredientes": "tortilla, carne, arroz, frijoles, guacamole",
      "imagen":"https://images.pexels.com/photos/31922735/pexels-photo-31922735/free-photo-of-envoltura.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {
      "id": 12,
      "nombre": "Quesadilla",
      "precio": 5.00,
      "ingredientes": "tortilla, queso, pollo o carne, salsa",
      "imagen":"https://images.pexels.com/photos/1600713/pexels-photo-1600713.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {
      "id": 13,
      "nombre": "Nuggets de pollo",
      "precio": 4.99,
      "ingredientes": "pollo empanizado, salsa BBQ o mostaza",
      "imagen":"assets/nugets.webp"},
    {
      "id": 14,
      "nombre": "Pollo frito",
      "precio": 6.99,
      "ingredientes": "pollo, especias, empanizado",
      "imagen":"https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {
      "id": 15,
      "nombre": "Alitas picantes",
      "precio": 7.49,
      "ingredientes": "alitas de pollo, salsa picante",
      "imagen":"https://images.unsplash.com/photo-1734987942068-a1a459d65d3d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {
      "id": 16,
      "nombre": "Ensalada César",
      "precio": 6.50,
      "ingredientes": "lechuga romana, crutones, pollo, queso parmesano, aderezo César",
      "imagen":"https://images.unsplash.com/photo-1546793665-c74683f339c1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {
      "id": 17,
      "nombre": "Sándwich de pollo",
      "precio": 6.99,
      "ingredientes": "pan, pollo empanizado, lechuga, mayonesa",
      "imagen":"https://images.unsplash.com/photo-1700937244987-92488ab2ada5?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {
      "id": 18,
      "nombre": "Sándwich club",
      "precio": 7.99,
      "ingredientes": "pan, jamón, pavo, tocino, lechuga, tomate",
      "imagen":"https://images.unsplash.com/photo-1665233272941-ae681d11fc06?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {
      "id": 19,
      "nombre": "Wrap de pollo",
      "precio": 6.50,
      "ingredientes": "tortilla, pollo, lechuga, tomate, aderezo ranch",
      "imagen":"assets/wrap_pollo.webp"},
    {
      "id": 20,
      "nombre": "Wrap vegetariano",
      "precio": 6.00,
      "ingredientes": "tortilla, lechuga, zanahoria, aguacate, hummus",
      "imagen":"https://images.pexels.com/photos/29535635/pexels-photo-29535635/free-photo-of-wrap-de-pollo-saludable-con-verduras-frescas.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
    {
      "id": 21,
      "nombre": "Arepa rellena",
      "precio": 4.99,
      "ingredientes": "arepa, carne mechada, queso, aguacate",
      "imagen":"https://images.pexels.com/photos/29465173/pexels-photo-29465173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {
      "id": 22,
      "nombre": "Empanada de carne",
      "precio": 2.50,
      "ingredientes": "masa frita, carne molida, cebolla, ajo",
      "imagen":"assets/empanada_carne.webp"},
    {
      "id": 23,
      "nombre": "Choripán",
      "precio": 5.50,
      "ingredientes": "pan, chorizo, chimichurri",
      "imagen":"https://imgs.search.brave.com/UvVfZ15JPKSFUZsIMJ3DrQdutSMR99NCsa3f_W6MLds/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9va2Rp/YXJpby5jb20vaW1n/L3JlY2V0YXMvMjAx/Ny8xMS8yNi80Lmpw/Zw"},
    {
      "id": 24,
      "nombre": "Croquetas de jamón",
      "precio": 3.99,
      "ingredientes": "jamón, bechamel, pan rallado",
      "imagen":"https://imgs.search.brave.com/qgfHyHUhreBAtWi_TOiYfT9f_nve18ExiQ1Em2in_XQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2xvZm9vZGdyb3Vw/LmNvbS9jZG4vc2hv/cC9hcnRpY2xlcy9j/cm9xdWV0YXMtZGUt/amFtb24tMjM0NzU0/LmpwZz92PTE2MjI3/NzUwMzImd2lkdGg9/MjA0OA"},
    {
      "id": 25,
      "nombre": "Papitas fritas",
      "precio": 2.99,
      "ingredientes": "papas, sal, aceite",
      "imagen":"https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {
      "id": 26,
      "nombre": "Aros de cebolla",
      "precio": 3.49,
      "ingredientes": "cebolla, harina, pan rallado",
      "imagen":"https://imgs.search.brave.com/Z3V5BmZMVoz6oOu6Y74G1L94_-78Yt0uAyrH03f0fhg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cGF1bGluYWNvY2lu/YS5uZXQvd3AtY29u/dGVudC91cGxvYWRz/LzIwMjEvMTIvY2Vi/b2xsYS1mcml0YS5q/cGc"},
    {
      "id": 27,
      "nombre": "Helado de vainilla",
      "precio": 2.99,
      "ingredientes": "leche, azúcar, vainilla",
      "imagen":"https://imgs.search.brave.com/zjBCnkN3JCRlr9KpMPSzgYUBv3KWPvoFzU6fp0lYjpI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4w/LnJlY2V0YXNncmF0/aXMubmV0L2VzL3Bv/c3RzLzUvNC8wL2hl/bGFkb19kZV92YWlu/aWxsYV9jYXNlcm9f/NzQwNDVfNjAwLmpw/Zw"},
    {
      "id": 28,
      "nombre": "Malteada de chocolate",
      "precio": 4.50,
      "ingredientes": "leche, helado, chocolate",
      "imagen":"https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {
      "id": 29,
      "nombre": "Refresco grande",
      "precio": 2.50,
      "ingredientes": "agua carbonatada, azúcar, saborizante",
        "imagen":"assets/refresco_grande.webp"}
];
}
