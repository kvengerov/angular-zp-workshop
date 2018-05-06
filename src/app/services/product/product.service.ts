import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<any> {
    return this.http.get<any>('/api/products');
  }
}
