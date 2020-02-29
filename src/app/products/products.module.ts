import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


/* this is a module, it it use divided the app in modules 
and make it modular, you can make as mamy modules as you want */
import { ProductsRoutingModule } from './products-routing.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ProductsInsertComponent } from './products-insert/products-insert.component';

@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductListComponent,
    ProductsInsertComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProductsRoutingModule,
  ],
  exports:[ProductListComponent,ProductDetailComponent]
})
export class ProductsModule { }
