import { Component, OnInit } from '@angular/core';
import { DbconService } from '../dbcon.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  angForm: FormGroup;

  constructor(private fb: FormBuilder, private ps: DbconService,private router: Router ) 
  {    this.createForm();
  }
  createForm() {
  }

  Createnav()
  {
    this.router.navigate(['user/create']);
  }

  

  Getnav()
  {
    this.router.navigate(['users']);
  }
  Addroutes123()
    {
      this.router.navigate(['admin/addroute']);
    }

    ViewRidesRoutes123()
  {
    this.router.navigate(['/adminride']);
  }
  
  ngOnInit() {
  }

}
