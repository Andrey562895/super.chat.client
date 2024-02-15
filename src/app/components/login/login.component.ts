import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule,
    ReactiveFormsModule, RouterModule, AlertComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;
  isDisplayed: boolean = false;

  constructor(public http: HttpClient, private router: Router) { };

  ngOnInit() {
    this.formLogin = new FormGroup({
      email: new FormControl(null),
      password: new FormControl(null)
    });
  }

  onSubmitLogin() {
    this.http.post("http://paungram.store/api/login/", this.formLogin.value, { responseType: 'text' }).subscribe(data => {
      console.log(data)
      if (JSON.parse(data).success) {
        setInterval(() => {
          this.isDisplayed = false;
          this.router.navigate(['/chat']);
        }, 9000);
      } else {
        setInterval(() => {
          this.isDisplayed = false;
        }, 9000);
      }
    })
  }
}
