import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, Form } from '@angular/forms';
import { DbconService } from '../dbcon.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { BookconfirmService } from '../bookconfirm.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {


  constructor(private user:DbconService,private bc:BookconfirmService,private router: Router,private route:ActivatedRoute) { }
  booking:FormGroup
  public msg=localStorage.getItem('currentuser');
  public msg1:any

  ngOnInit() {
  
    if(this.msg==null)
      this.router.navigate(['/login']);

    $(".centered").fadeOut(1);
     $(".centered").fadeIn(1000)//, function(){
      $(document).ready(function() { 
          $("#includedcontent").load("./base.html"); 
        
   })
  // this.msg=this.route.snapshot.paramMap.get('id');
   this.booking= new FormGroup({
    src:new FormControl('', [
      Validators.required,
      Validators.minLength(3),
       // <-- Here's how you pass in the custom validator.
    ]),
    dest:new FormControl('', [
      Validators.required,
      Validators.minLength(3),
       // <-- Here's how you pass in the custom validator.
    ]),
    date:new FormControl('',Validators.required),
  });
}
  book()
  {
    
    var value=this.booking.value;
    console.log(value)
    //this.user1.name=value.name;
    
    this.user.bookservice(this.booking.value).subscribe( data =>{if(data["check"]=="false"){
          console.log("not found")
          this.msg1="invalid source destination";
    }
    else{
      
      this.router.navigate(['/confirm']);
      //,{'id':data["session"],'distance':data["distance"],skipLocationChange: true}]);
      this.bc.distance=data["distance"];
      this.bc.src=data["src"];
      this.bc.dest=data["dest"];
      this.bc.date=data["date"]
      //this.bc.msg=data["session"];
      console.log(localStorage.getItem('currentuser'));

      //console.log(this.msg);
    }
  });
    //this.router.navigate(['/payment'])
  }
}


