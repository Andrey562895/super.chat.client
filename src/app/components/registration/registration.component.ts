import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RegService } from '../../services/reg/reg.service';
import { User } from '../../user.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule,
    ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit {
  user!: User;
  formReg!: FormGroup;
  formCode!: FormGroup;
  showRegForm: boolean = true;
  errorMessageForm?: string;

  constructor(public http: HttpClient) {

  };

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
    this.http.post("http://paungram.store/register/", this.formReg.value, { responseType: 'text' }).subscribe(data => {
      console.log(data)
      console.log(JSON.parse(data).error)
      this.errorMessageForm = JSON.parse(data).error_log;
      if (!JSON.parse(data).hasOwnProperty('error')) this.showRegForm = false;

    })
  }

  onSubmitCode() {
    this.http.post("http://paungram.store/confirm/", this.formCode.value, { responseType: 'text' }).subscribe(data => {
      console.log(data)
    })
  }
}

