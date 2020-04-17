import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DbconService } from '../dbcon.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  angForm: FormGroup;
  user: any = {};
public id:any;
  constructor(private route: ActivatedRoute, private router: Router, private ps: DbconService, private fb: FormBuilder) {
      this.createForm();
 }

  createForm() {
    this.angForm = this.fb.group({
    name: ['', Validators.required ],
      username: ['', Validators.required ],
      password: ['', Validators.required ],
      contact: ['', Validators.required ],
      email: ['', Validators.required ],

    });
  }
  public msg123:any;
  updateUser(name, username, password,email,contact, _id) {
    this.route.params.subscribe(params => {
      console.log(this.id)
      this.ps.updateUser(name,username,password,email,contact, this.id);
      //this.router.navigate(['users']);
      this.msg123 = 'user details updated sucessfully';
    });
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
        this.ps.editUser(params['id']).subscribe(res => {
          this.user = res;
          this.id=this.user._id;
         // localStorage.setItem('id',this.id);
      });
    });
    
  }
}