import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { concat } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  addProduct(data:any){
   return this.http.post('http://localhost:3000/products',data)
    
  }
  productList(){
    return this.http.get<any>('http://localhost:3000/products')
  }
  deleteProduct(id:any){
    return this.http.delete('http://localhost:3000/products/'+id)
  }
  updProduct(id:string){
    return this.http.get('http://localhost:3000/products/'+id)


  }
  popularProducts(){
    return this.http.get('http://localhost:3000/products?_limit=3');
  
  }
}
