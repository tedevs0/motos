import { Component } from '@angular/core';
import { Product, ProductsService } from '../../services/products-service';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  products: Product[] = [];
  constructor(private productsService: ProductsService) {
    this.products = this.productsService.getproducts();
  }
}
