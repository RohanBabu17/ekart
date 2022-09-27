import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartserviceService } from '../cartservice.service';
import { EcartserviceService } from '../ecartservice.service';
import { Dress } from '../model/dress';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  id:any;
  public viewDatas =<any>[];
  dress!:Dress;
  // item!:Dress;
  viewarray:Dress[]= [];
  constructor(private serv3:EcartserviceService,private cart2:CartserviceService ,private route:ActivatedRoute,private router:Router) {
    route.params.subscribe((params)=>{
      if(params['id'])
      this.dress= serv3.getDessById(params['id'])

      this.viewarray=this.serv3.data();

      this.viewarray.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.Rs});
      })
    })
   }

  ngOnInit(): void {
    console.log("res",this.viewarray);
    
  }
  addtocart(item:any){
    this.cart2.addtocart(item);
    this.router.navigateByUrl('/checkout')
  }

}
