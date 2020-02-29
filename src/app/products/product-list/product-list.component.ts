import { Component, OnInit } from '@angular/core';
import { Product } from '../product.interface';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  title: string = 'products';
  products$: Observable<Product[]>;
  selectedProduct: Product;

  //pagination
  pageSize = 5;
  start = 0;
  end = this.pageSize;
  currentPage = 1;

  constructor(
    private productService: ProductService,
    private router:Router) {
  }

  ngOnInit() {
    this.products$ = this.productService.getProducts()
  }

  onSelect(product: Product) {
    this.selectedProduct = product;
    this.router.navigateByUrl('/products/'+product.id)
  }

  nextPage() {
    this.start += this.pageSize
    this.end += this.pageSize
    this.selectedProduct = null
    this.currentPage++
  }
  prevPage() {
    this.start -= this.pageSize
    this.end -= this.pageSize
    this.selectedProduct = null
    this.currentPage--
  }

}
