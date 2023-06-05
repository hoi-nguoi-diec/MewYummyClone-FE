import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  formSignup = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    confirmPassword: ['']
  }, { validators: this.checkPassword })

  checkPassword(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;

    if (password === confirmPassword) {
      return null
    }
    return { mismatch: true }
  }
  constructor(private fb: FormBuilder, private auth: AuthService,  private userService: UserService) {

  }
  onHandleSubmit() {
      if (this.formSignup.valid) {
        const email = this.formSignup.get('email')?.value;
        this.userService.checkEmailExists(email).subscribe(exists => {
          if (exists) {
            this.formSignup.get('email')?.setErrors({ exists: true });
          } else {
            this.auth.signup(this.formSignup.value).subscribe(data => {
              console.log(data);
              alert("Đăng ký thành công!");
            });
          }
        });
      }
    }
  }

