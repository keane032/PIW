import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url:string = "http://localhost:3000/products";

  constructor(private httpClient:HttpClient) { }

  register(prod:Product){
    return this.httpClient.post(`${this.url}/register`,prod);  
  }

  list(){
    return this.httpClient.get(this.url+'/list');  
  }

  delete(id:number){
    return this.httpClient.delete(`${this.url}/delete/${id}`);
  }

  retrieveById(id:number){
    return this.httpClient.get(`${this.url}/retrieve/${id}`);
  }

  update(prod:Product){
    return this.httpClient.put(`${this.url}/update/${prod._id}`,prod);
  }
}
