import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './common/home.component';
import { AdminComponent } from './common/admin.component';
import { ContactComponent } from './common/contact.component';
import { ErrorComponent } from './common/error.component';
import { ProductsModule } from './products/products.module';


//raouting is used to navigate in angular, in this array, we add the routes where we  will navigate
const routes: Routes = [
  { path: '', redirectTo:'/home',pathMatch:'full' },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'products', loadChildren:() => import('./products/products.module').then(module => module.ProductsModule) },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
