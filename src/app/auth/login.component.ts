import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logInForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });
  error: string;
  constructor(  private fb: FormBuilder,
    private authService: AuthService,
    private route: Router) {this.error = ''; }

  ngOnInit(): void {
  }

  logIn() {
    this.authService.proceedLogin(this.logInForm.value).subscribe({
      next: (result: any) => {
        if (result != null) {
          this.authService.storeUser(result);
          this.authService.emitChange(true);
          this.route.navigate(['/dashboard']);
        }
      },
      error: (er) => {
        this.error = er.statusText;
      },
    });
  }
}
