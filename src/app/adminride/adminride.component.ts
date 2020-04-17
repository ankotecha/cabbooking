import { Component, OnInit } from '@angular/core';
import { DbconService } from '../dbcon.service';

@Component({
  selector: 'app-adminride',
  templateUrl: './adminride.component.html',
  styleUrls: ['./adminride.component.css']
})
export class AdminrideComponent implements OnInit {

  constructor(private dbcon:DbconService) { }
  public ride:any[]=new Array()
  public route:any[]=new Array()

  ngOnInit() {
    $('#t1').hide()
    $('#t2').hide()

  }
  viewbooking()
  {

    this.dbcon.allride().subscribe(data=>
      {
        var i;
        $('#t1').show();
        $('#t2').hide();
        // for(i=0;i<data.size();i++)
        console.log(Object.keys(data).length)
        console.log(data)
        // });
        for(i=0;i<Object.keys(data).length;i++)
          this.ride[i]=data[i];
      })

  }

  viewroutes()
  {
    //$('#t2').show();
    this.dbcon.allroutes().subscribe(data=>
      {
        var i;
        $('#t1').hide();

        $('#t2').show();
        // for(i=0;i<data.size();i++)
        console.log(Object.keys(data).length)
        console.log(data)
        // });
        for(i=0;i<Object.keys(data).length;i++)
          this.route[i]=data[i];
      })

  }


}
