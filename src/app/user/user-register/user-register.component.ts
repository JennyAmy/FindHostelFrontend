import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/validators/passwordValidator';
import { AlertifyService } from 'src/app/services/alertify.service';
import { UserForRegister } from 'src/app/models/IUser';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registrationForm!: FormGroup;
  user: UserForRegister;
  userSubmitted: boolean;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private alertify: AlertifyService) { }

  ngOnInit(): void {
    this.createRegistrationForm();
  }

  createRegistrationForm() {

    this.registrationForm = this.fb.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.maxLength(11)]],
    }, {
      validators: MustMatch('password', 'confirmPassword')
    });
  }


  onSubmit() {
    console.log(this.registrationForm.value);
    this.userSubmitted = true;

    if (this.registrationForm.valid) {
      // this.user = Object.assign(this.user, this.registrationForm.value);
      this.authService.registerUser(this.userData()).subscribe(() => {
        this.onReset();
        this.alertify.success('Successfully registered!');
      });
    }
  }


  onReset() {
    this.userSubmitted = false;
    this.registrationForm.reset();
  }

  userData(): UserForRegister {
    return this.user = {
      userName: this.userName.value,
      email: this.email.value,
      password: this.password.value,
      phone: this.phone.value
    }
  }




  // passwordMatchValidator(fg: FormGroup): Validators{
  //   return fg.get('password').value === fg.get('confirmPassword').value ? null :
  //   {notMatched: true};
  // }

  get userName() {
    return this.registrationForm.get('userName') as FormControl
  }

  get email() {
    return this.registrationForm.get('email') as FormControl
  }

  get password() {
    return this.registrationForm.get('password') as FormControl
  }
  get confirmPassword() {
    return this.registrationForm.get('confirmPassword') as FormControl
  }
  get phone() {
    return this.registrationForm.get('phone') as FormControl
  }



}
