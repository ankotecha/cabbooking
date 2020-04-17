import { Component, OnInit } from '@angular/core';
import { DbconService } from '../dbcon.service';
import { User } from '../model/user';
@Component({
  selector: 'app-user-get',
  templateUrl: './user-get.component.html',
  styleUrls: ['./user-get.component.css']
})
export class UserGetComponent implements OnInit {

  users: User[];
  constructor(private ps: DbconService) { }
  deleteUser(id) {
    this.ps.deleteUser(id).subscribe(res => {
      this.users.splice(id, 1);
    });
} 

  ngOnInit() {
    this.ps
      .getUsers()
      .subscribe((data: User[]) => {
        this.users = data;
    });
  }

}