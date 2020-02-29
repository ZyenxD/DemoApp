import { Injectable } from '@angular/core';
import { Product } from './product.interface';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, shareReplay, first, flatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl: string = 'http://storerestservice.azurewebsites.net/api/products/';
  private products$: Observable<Product[]>;

  constructor(private httpClient: HttpClient) { }


  getProducts(): Observable<Product[]> {

    //pipe allow us to use rxjs operators
    if (!this.products$) {
      this.products$ = this.httpClient
        .get<Product[]>(this.baseUrl)
        .pipe(
          shareReplay(),
          catchError(this.handleError)
        );
    }
    return this.products$;

  }

  getProductById(id: Number): Observable<Product> {
    return this.getProducts().pipe(
      //flatmap creates a list of products and now, first can return an object
      flatMap(p => p),
      first(product => product.id === id),
      catchError(this.handleError)
    )
  }

  insertProduct(product: Product): Observable<Product> {
    return this.
      httpClient.post<Product>(this.baseUrl, product);
  }

  clearCache() {
    this.products$ = null
  }

  private handleError(errorResponse: HttpErrorResponse) {
    let errorMsg: string;
    if (errorResponse.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMsg = 'An error occurred:' + errorResponse.error.message;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMsg = `Backend returned code ${errorResponse.status}, body was: ${errorResponse.error}`;
    }
    console.error(errorMsg);
    return throwError(errorMsg);
  }
}
