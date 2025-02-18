import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 loginForm !:FormGroup;
  constructor(private formBuilder:FormBuilder) {}


  ngOnInit(): void {
    this.loginForm =this.formBuilder.group({

      email :['',[Validators.email,Validators.required]],
      password :['',[Validators.required,Validators.minLength(6),Validators.maxLength(8)]],
    })
  }
  login(){

    console.log("here user",this. loginForm.value)
      }

}
