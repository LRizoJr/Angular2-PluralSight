import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'app/user/profile.component.html',
  styles: [`
    em { float:right; color:red; padding-left:10px; }
    .error input { background-color: #FE5D5D; }    
  `]
})
export class ProfileComponent implements OnInit {
  profileForm:FormGroup;
  authService:AuthService;
  router:Router;
  private firstName:FormControl;
  private lastName:FormControl;

  constructor(authServ:AuthService, routerParam:Router) {
    this.authService = authServ;
    this.router = routerParam;
  }

  ngOnInit() {
    this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern("[a-zA-Z].*")]);
    this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);

    this.profileForm = new FormGroup ({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  validateLastName() {
    return this.lastName.valid || this.lastName.untouched;
  }

  validateFirstName() { 
    return this.firstName.valid || this.firstName.untouched;
  }

  cancel() {
    this.router.navigate(['events']);
  }

  saveProfile(formValues) {
    if(this.profileForm.valid) {
      this.authService.updateCurrentUser(formValues.firstName, formValues.LastName);
      this.router.navigate(['events']);
    }
  }

}