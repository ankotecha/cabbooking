import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { DbconService } from '../dbcon.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder, private ps: DbconService) {
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

  addUser(name, username, password,contact,email) {
    this.ps.addUser(name, username, password,contact,email);
  }

  ngOnInit() {
  }

}