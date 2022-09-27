import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartserviceService } from '../cartservice.service';
import { EcartserviceService } from '../ecartservice.service';
import { Dress } from '../model/dress';
// import { Tag } from '../model/category';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homearray:Dress[]= [];
  searchText:any;
  // dresscategory?:string[];
  // tag?:Tag[] = [];
  public totalitem : number = 0;
  public filtercategory : any;
  constructor(private serv:EcartserviceService,private cart:CartserviceService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {

    
    this.route.params.subscribe(params=>{
      // if(params['searchItem'])
      // this.homearray=this.serv.data().filter(dress=>dress.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
      // if(params['Tag'])
      // this.homearray = this.serv.getCategory(params['Tag'])
      // else
      this.homearray =this.serv.data();
      this.filtercategory=this.serv.data();
      this.homearray.forEach((a:any)=>{

        // if(a.category === "men"){
        //   a.category="men"
        // }
        Object.assign(a,{quantity:1,total:a.Rs});
      });
      console.log(this.homearray);
      
    });
    this.cart.getproducts()
      .subscribe(res => {
        this.totalitem = res.length;
      })
  }

  addtocart(item:any){
    this.cart.addtocart(item);
  }

  filter(category:string){
    this.filtercategory = this.homearray
    .filter((a:any)=>{
      if(a.category == category || category == ''){
        return a;
      }
    })
  }

  // view(id:any){
  //   console.log(id);
  //   this.router.navigate(['view',id]);
  // }

}
