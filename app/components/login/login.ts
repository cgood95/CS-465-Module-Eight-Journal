import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html'
})
export class LoginComponent {

  email = '';
  password = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  login() {
    this.auth.login(this.email, this.password)
      .subscribe({
        next: (res: any) => {
          console.log('LOGIN SUCCESS:', res);

          // store JWT token
          localStorage.setItem('token', res.token);

          // navigate to trips page
          this.router.navigate(['/trips']);
        },
        error: (err: any) => {
          console.error('LOGIN FAILED:', err);
        }
      });
  }
}