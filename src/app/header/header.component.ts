import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartserviceService } from '../cartservice.service';
import { EcartserviceService } from '../ecartservice.service';
import * as alertyfy from 'alertifyjs';
import { Tag } from '../model/category';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input()
  // dresscategory?:string[];
  // tag?:Tag[] = [];
  public totalitem : number = 0;
  loggedinuser: any;
  // searchText:string='';
  constructor(private route:Router,private serv4:EcartserviceService,private cart1:CartserviceService) { }

  ngOnInit(): void {
    // if (!this.dresscategory)
    //   this.tag = this.serv4.getAllCategory();
    // console.log();

    // this.cart1.getproducts()
    //   .subscribe(res => {
    //     this.totalitem = res.length;
    //   })

  }
  // search():void{
  //   if(this.searchText)
  //   this.route.navigateByUrl('/search/' + this.searchText)
  // }
  loggedin(){
    this.loggedinuser = localStorage.getItem('token');
    return this.loggedinuser;

  }
  onlogout(){
    localStorage.removeItem('token');
    alertyfy.set('notifier','position', 'top-center');
    alertyfy.success(' You are LoggedOut !');
    
  }

}
