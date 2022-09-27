import { Injectable } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {
   
  public cartitemlist: any=[]
  public productlist = new BehaviorSubject<any>([]);

  constructor() { }

  getproducts(){
    return this.productlist.asObservable(); 
   }

  setproducts(product :any){
    this.cartitemlist.push(...product);
    this.productlist.next(product);
  } 

  addtocart(product :any){
    this.cartitemlist.push(product);
    this.productlist.next(this.cartitemlist);
    this.gettotalprice();
    console.log(this.cartitemlist);
    
  }

  gettotalprice(): number{
    let grandTotal = 0;
    this.cartitemlist.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }

  removecartitem(product:any){
    this.cartitemlist.map((a:any,index:any)=>{
      if(product.id === a.id){
        this.cartitemlist.splice(index,1);
      }
    })
    this.productlist.next(this.cartitemlist);
  }

  removeall(){
    this.cartitemlist=[];
    this.productlist.next(this.cartitemlist);
  }
}
