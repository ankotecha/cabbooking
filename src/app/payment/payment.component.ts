import { Component, OnInit } from '@angular/core';
import { BookconfirmService } from '../bookconfirm.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private bc:BookconfirmService,private router:Router) { }
 // public msg:any;
  public msg=localStorage.getItem('currentuser');
       
  ngOnInit() {
    if(this.msg==null)
        this.router.navigate(['/login']);
    $(".centered").fadeOut(1);
     $(".centered").fadeIn(1000)//, function(){
      $(document).ready(function() { 
        //  $("#includedcontent").load("./base.html"); 
      //  this.msg=this.bc.msg;
        // this.bc.msg="hello"
        
   })
  }
}