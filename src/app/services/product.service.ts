import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct, Product } from '../modal/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
   apiUrl:string="https://projectapi.gerasim.in/api/";
  constructor(private http:HttpClient) { }

         getdata():Observable<IProduct[]>{
          return this.http.get<IProduct[]>(this.apiUrl+"Products");
         }

         postdata(data:any){
          return this.http.post("https://projectapi.gerasim.in/api/Products",data);

         }
          
         delete(id: any) {
          return this.http.delete(`https://projectapi.gerasim.in/api/Products/deleteProduct?id=${id}`);
        }
        
        
}
