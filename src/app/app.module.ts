import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './components/chat/chat.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { RegService } from './services/reg/reg.service';
import { AlertComponent } from './components/alert/alert.component';



@NgModule({
  declarations: [AppComponent, ChatComponent, ChatComponent, RegistrationComponent, AlertComponent],
  imports: [
    CommonModule,
    BrowserModule,
  ],
  providers: [RegService],
  bootstrap: [AppComponent]
})
export class AppModule { }
