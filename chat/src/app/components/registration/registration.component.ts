import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RegService } from '../../services/reg/reg.service';
import { User } from '../../user.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit {
  user!: User;
  formReg!: FormGroup;

  constructor(public http: HttpClient) {

  };

  ngOnInit() {
    this.formReg = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
  }

  postData(user: User) {
    const data = { name: user.email, age: user.password };
    return this.http.post("http://192.168.1.109:3000/register/", data);
  }




  onSubmit() {
    console.log('Valid?'); // true or false
    // console.log('Name', form.value.name);
    // console.log('Email', form.value.email);
    // console.log('Message', form.value.message);
  }

  getMessage() {
    this.http.post("http://192.168.1.109:3000/register/", { email: "zzz.lify@icloud.com" }, { responseType: 'text' }).subscribe(data => {
      console.log(data)
    })
  }
}
