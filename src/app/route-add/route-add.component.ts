

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, FormBuilder } from '@angular/forms';
import { DbconService } from '../dbcon.service';
import {User } from '../model/user';
import { VirtualTimeScheduler } from 'rxjs';
import { utf8Encode } from '@angular/compiler/src/util';
import { Router } from '@angular/router';
// import { MustMatch } from './match';
@Component({
  selector: 'app-route-add',
  templateUrl: './route-add.component.html',
  styleUrls: ['./route-add.component.css']
})
export class RouteAddComponent implements OnInit {
  angForm: FormGroup;

  constructor(private fb: FormBuilder, private ps: DbconService,router: Router) { 
    this.createForm();

  }
  createForm() {
    this.angForm = this.fb.group({
      place1: ['', Validators.required ],
      place2: ['', Validators.required ],
      distance: ['', Validators.required ],
      
    });
  }
  // saveuser()
  // {
  // this.ps.postUser().subscribe( data => {

  // }

   addRoute(place1, place2, distance) {
    this.ps.addRoute(place1, place2, distance)
  }

  ngOnInit() {

  }

}
