import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './common/home.component';
import { AdminComponent } from './common/admin.component';
import { ErrorComponent } from './common/error.component';
import { ContactComponent } from './common/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    ErrorComponent,
    ContactComponent
  ],
  imports: [
    //if lazy load is applied, the module shoul be removed from imports
    //custom modules shoudl be added on import
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
