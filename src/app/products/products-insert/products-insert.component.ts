import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Product } from '../product.interface';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-insert',
  templateUrl: './products-insert.component.html',
  styleUrls: ['./products-insert.component.css']
})
export class ProductsInsertComponent implements OnInit {

  insertForm: FormGroup;

  name: FormControl;
  price: FormControl;
  description: FormControl;
  imageUrl: FormControl;

  constructor(private formBuild: FormBuilder
    ,private productService:ProductService,
    private router:Router) {

  }

  ngOnInit() {
    let validImgUrlRegex: string = '^(https?\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,5}(?:\/\S*)?(?:[-A-Za-z0-9+&@#/%?=~_|!:,.;])+\.(?:jpg|jpeg|gif|png))$';

    this.name = new FormControl('', [Validators.required, Validators.maxLength(50)]);
    this.price = new FormControl('', [Validators.required, Validators.min(0), Validators.max(10000000)]);
    this.description = new FormControl('', [Validators.minLength(3), Validators.maxLength(500)]);
    this.imageUrl = new FormControl('', [Validators.pattern(validImgUrlRegex)]);

    this.insertForm = this.formBuild.group(
      {
        'name': this.name,
        'price': this.price,
        'description': this.description,
        'imageUrl': this.imageUrl,
        'discontinued': false,
        'fixedPrice': false
      }
    );
  }

  onSubmit(){
    let newProduct:Product = this.insertForm.value;
    //ALWAYS subscribe when recibing ovservavle data
    this.productService.insertProduct(newProduct).subscribe(
      result => {
        console.log(result)
        this.productService.clearCache()
        this.router.navigateByUrl('/products')
      }
    );
  }

}
