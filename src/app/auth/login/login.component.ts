import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  formSignin = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  })

 
  constructor(private fb: FormBuilder, private auth: AuthService,private router: Router) {

  }
  onHandleSubmit() {
    if (this.formSignin.valid) {
      this.auth.signin(this.formSignin.value).subscribe(data => {
        localStorage.setItem('credential', JSON.stringify(data))
       if(data?.user?.role == "admin"){
        alert('Đăng nhập thành công')
        this.router.navigate(['/admin'])
       }else{
        alert('Đăng nhập thành công')
        this.router.navigate(['/'])
       }
        
      })
    }
  }
}
