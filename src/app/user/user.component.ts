import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EcartserviceService } from '../ecartservice.service';
import * as alertyfy from 'alertifyjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  cform=this.fb.group({
    Name:["",[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    Email:["",[Validators.required,Validators.email]],
    Contactnum:["",[Validators.required,Validators.pattern('[0-9 ]*'),Validators.maxLength(10),Validators.minLength(10)]],
    Password:["",[Validators.required,Validators.pattern('[a-zA-Z0-9]*'),Validators.maxLength(12),Validators.minLength(6)]],
    Confirmpassword:["",[Validators.required,Validators.pattern('[a-zA-Z0-9]*'),Validators.maxLength(12),Validators.minLength(6)]],
    Address:["",[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    City:["",[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    Pincode:["",[Validators.required,Validators.pattern('[0-9]*')]],
    State:["",[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    Country:["",[Validators.required,Validators.pattern('[a-zA-Z ]*')]]
  })

  user:any={};

  constructor(private route:ActivatedRoute,private router:Router,private fb:FormBuilder,private serv1:EcartserviceService) { }

  ngOnInit(): void {
  }
  onLogin(loginForm:NgForm){
    console.log(loginForm.value)
    const token= this.serv1.authuser(loginForm.value);
    if(token){
      localStorage.setItem('token',token.Name);
      alertyfy.set('notifier','position', 'top-center');
      alertyfy.success('Congrats , You are Successfully LoggedIn');
      this.router.navigateByUrl('')
    }
    else{
      alertyfy.set('notifier','position', 'top-center');
      alertyfy.error('Invalid Details');
    }
  }

  reg(){
    console.log(this.cform.value);
    if(this.cform.valid){
      this.user = Object.assign(this.user,this.cform.value);
    this.serv1.adduser(this.user);
    this.cform.reset;
    alertyfy.set('notifier','position', 'top-center');
    alertyfy.success('Congrats , You are Successfully registered');
    this.router.navigateByUrl('dashboard');
    }
    else{
      alertyfy.set('notifier','position', 'top-center');
      alertyfy.error('Kindly Provide Required Fields');
    }
  }

}
