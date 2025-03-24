import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IProduct, Product } from 'src/app/modal/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    @ViewChild('myModal') modal:ElementRef|undefined;

     constructor(private http:ProductService,private fb:FormBuilder){}
       productList:IProduct[]=[];
        registerForm!:FormGroup;
        id:number=0;
     ngOnInit(): void {
         this.loadproducts();

         this.registerForm=this.fb.group({
                // productId: 0,
                productName: " ",
                shortName: " ",
                category: " ",
                sku: " ",
                price: 0,
                thumbnailImageUrl: "",
                deliveryTimeSpan: ""

         })
         
     }

  openModal(){
     if(this.modal){
      this.modal.nativeElement.style.display='block';
     }

  }
  closemodal(){
    if(this.modal){
      this.modal.nativeElement.style.display="none";
    }
  }

  loadproducts(){
    this.http.getdata().subscribe((res:IProduct[])=>{
      
      this.productList=res;
        debugger;  
    },
  (error)=>{
    console.log(error);
  })
  }

  postdata(){
    const requestdata=this.registerForm.value;

    // if (this.id) {
    //   this.http.updatedata(requestdata).subscribe((res) => {
    //     alert("The data updated successfully");
      
    //   },
    //   (error) => {
    //     console.log(error);
    //   });
    // }
    // else{
       
         alert("post data is called");
       this.http.postdata(requestdata).subscribe((res)=>{
                 debugger;
       },
       (error)=>{
        console.log(error);
       }
      )
    }
  // }
       
  
  delete(id:any){
    const isConfirm=confirm('Are you Sure to Delete');
    if(isConfirm){
      this.http.delete(id).subscribe((response)=>{

      },
    (error)=>{
      console.log(error);
    })
  }
}

editmethod(data:any){
    this.id=data.productId
    this.registerForm.patchValue({
      productId:data.productId,
      productName:data.productName,
      shortName:data.shortName,
      category:data.category,
      sku:data.sku,
      price:data.price,
      thumbnailImageUrl:data.thumbnailImageUrl,
      deliveryTimeSpan:data.deliveryTimeSpan
    })
    this.openModal();
}
}
