import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartserviceService } from '../cartservice.service';
import * as alertyfy from 'alertifyjs';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  
  public product:any=[];
  public grandtotal: number = 0;
  constructor(private router:Router, private cart2:CartserviceService) { }

  ngOnInit(): void {
    this.cart2.getproducts()
    .subscribe(res=>{
      this.product = res; 

      this.grandtotal = this.cart2.gettotalprice();
    })
  }
  removecartitem(item:any){
    this.cart2.removecartitem(item);
  }
  emptycart(){
    this.cart2.removeall();
  }
  checkout(){
    alertyfy.set('notifier','position', 'top-center');
    alertyfy.success(' Your Order Has Been Placed');
  }

}
