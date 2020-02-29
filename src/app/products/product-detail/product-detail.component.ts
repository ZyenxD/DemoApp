import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product.interface';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {


  product: Product;

  constructor(private route: ActivatedRoute,
    private productService: ProductService) { }

  ngOnInit() {

    let id = + this.route.snapshot.params["id"];
    if (id) {
      this.productService
        .getProductById(id)
        .subscribe(
          result => this.product = result
        )
    }
  }

}
