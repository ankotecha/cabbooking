import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

import { User } from '../model/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DbconService } from '../dbcon.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user1=new User()
  public msg1:any
  constructor(private toastr:ToastrService,private user:DbconService,private router: Router) { }
login:FormGroup;
public msg=localStorage.getItem('currentuser');

  ngOnInit() {
   // localStorage.removeItem('currentuser');

    $(".centered").fadeOut(1);
     $(".centered").fadeIn(1000)//, function(){
      $(document).ready(function() { 
          $("#includedcontent").load("./base.html"); 
        
   })
  this.login = new FormGroup({
    uname:new FormControl('', [
      Validators.required,
      Validators.minLength(3),
       // <-- Here's how you pass in the custom validator.
    ]),
    pass:new FormControl('', [
      Validators.required,
      Validators.minLength(3),
       // <-- Here's how you pass in the custom validator.
    ]),
  });
}

// public toastr:
  login1()
  {
    
    var value=this.login.value;
    console.log(value)
    //this.user1.name=value.name;
    this.user1.username=value.uname;
    this.user1.password=value.pass;
   // this.user1.email=value.email;
    this.user.login(this.user1).subscribe( data => {
      if(data["check"]=='true')
      {
        
        this.toastr.success('login sucessfully')
        localStorage.setItem('currentuser',data['session']);
        this.msg=localStorage.getItem('currentuser');
        this.msg1="";
        console.log(data["session"]);
        this.router.navigate(["/home",{'id':data["session"]}])
      }
      else if(data["check"]=='false')
      {
        // this.toastr.suc
       this.msg1="login invalid try again";
      //  $('#ak').text("failed");

      } 
      else if(data["check"]=='admin')
      {
        console.log("admin navigation")
        this.router.navigate(["/admin"])
      }
    });
  }
}
