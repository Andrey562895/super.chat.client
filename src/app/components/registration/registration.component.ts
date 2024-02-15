import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RegService } from '../../services/reg/reg.service';
import { User } from '../../user.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, Router, RouterModule } from '@angular/router';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule,
    ReactiveFormsModule, RouterModule, AlertComponent],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit {
  user!: User;
  formReg!: FormGroup;
  formCode!: FormGroup;
  showRegForm: boolean = true;
  isDisplayed: boolean = false;
  errorMessageForm?: string;

  constructor(public http: HttpClient, private router: Router) { };

  ngOnInit() {
    this.formReg = new FormGroup({
      email: new FormControl(null),
      password: new FormControl(null)
    });
    this.formCode = new FormGroup({
      code: new FormControl(null),
    });
  }

  onSubmitReg() {
    this.http.post("http://paungram.store/api/register/", this.formReg.value, { responseType: 'text' }).subscribe(data => {
      console.log(data)
      console.log(JSON.parse(data).error)
      this.errorMessageForm = JSON.parse(data).error_log;
      if (!JSON.parse(data).hasOwnProperty('error')) {
        this.showRegForm = false;
        this.isDisplayed = true;
      }

      setInterval(() => {
        this.isDisplayed = false;
      }, 9000);
    })
  }

  onSubmitCode() {
    this.http.post("http://paungram.store/api/confirm/", this.formCode.value, { responseType: 'text' }).subscribe(data => {
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

