import { Component, OnInit } from '@angular/core';
import { DbconService } from '../dbcon.service';

@Component({
  selector: 'app-viewride',
  templateUrl: './viewride.component.html',
  styleUrls: ['./viewride.component.css']
})
export class ViewrideComponent implements OnInit {

  constructor(private dbcon:DbconService) { }
  public ride:any[]=new Array()  

  public msg=localStorage.getItem('currentuser');
  ngOnInit() {
    var user=localStorage.getItem('currentuser');
  //var u=JSON.parse(user);
  var u={'user':user}
    this.dbcon.viewrideservice(u).subscribe( data => {
      if(data)
       {
        //var d=JSON.stringify(data)
        
          //console.log(data[0]['src']);
        // data.forEach(function (value) {
        //     this.a=value;
        
        //this.ride=(any)data
        //console.log(a)
        var i;

        // for(i=0;i<data.size();i++)
        console.log(Object.keys(data).length)
      
        // });
        for(i=0;i<Object.keys(data).length;i++)
          this.ride[i]=data[i];

        // this.ride.forEach(function (value) {
        //    console.log(value)
        // });
        //  console.log(this.a)
          // this.router.navigate(["/login"])
      }
  });

}
}