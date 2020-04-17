import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookconfirmService } from '../bookconfirm.service';
import { DbconService } from '../dbcon.service';
import { Ride } from '../model/Ride';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  constructor(private router:Router,private bc:BookconfirmService,private route:ActivatedRoute,private dbcon:DbconService) { }
public fare:any;
public distance:any;
  public src:any;
  public dest:any;
  public date:Date;
  // public msg:any;
  public msg=localStorage.getItem('currentuser');

  ngOnInit() {
    if(this.msg==null)
      this.router.navigate(['/login']);
   // this.msg=this.bc.msg;
    this.distance=this.bc.distance;
    this.src=this.bc.src;
    this.dest=this.bc.dest;
    this.fare=(this.distance*10);
    this.date=(this.bc.date)
    console.log(this.date);

  }
  //public ride:Ride
  ride=new Ride();
  navigate()
  {
    console.log(this.src)
    this.ride.src=this.src;
    this.ride.dest=this.dest;
    this.ride.fare=this.fare;
    this.ride.date=this.date
    this.ride.username=localStorage.getItem('currentuser');
    this.dbcon.confirmservice(this.ride).subscribe( data => {
      if(data["check"]=="true")
      {
          //this.msg="you are registered succesfully";
          //Router.na
          $('#b1').hide();
         $('#d1').text('your booking is confirmed and details has been sent to your email id')
      }
    //this.router.navigate(["/payment"]);
    
  });
  }
}
