import { Component, OnInit, Input } from '@angular/core';
import { DbconService } from '../dbcon.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private db:DbconService) { }
  @Input() msg: string;
  ngOnInit() {
    
  }
// update()
// {
//   this.db.updateDetails().subscribe(data=>{})
// }
}
