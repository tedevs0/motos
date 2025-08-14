import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  private products: Product[] = [
    {
      id: 1,
      name: 'kawasaky 600',
      description: 'Description for Product 1',
      price: 100,
      image: '/img/kawasaky 600.jpg'
    },
    {
      id: 2,
      name: 'kawasaky-kx250',
      description: 'Description for Product 2',
      price: 200,
      image: '/img/kawasaky-kx250.jpg'
    },
    {
      id: 3,
      name: 'suzuki-1200',
      description: 'Description for Product 3',
      price: 300,
      image: '/img/suzuki-1200.jpg'
    },
    {
      id: 4,
      name: 'suzuki-gixxer-sf-720',
      description: 'Description for Product 3',
      price: 300,
      image: '/img/suzuki-gixxer-sf-720.jpg'
    }
  ]

  getproducts(): Product[] {
    return this.products;
  }
}
