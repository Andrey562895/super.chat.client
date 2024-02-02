import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './components/chat/chat.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthComponent } from './components/auth/auth.component';
import { RegService } from './services/reg/reg.service';



@NgModule({
  declarations: [AppComponent, ChatComponent, ChatComponent, RegistrationComponent, AuthComponent],
  imports: [
    CommonModule,
    BrowserModule,
  ],
  providers: [RegService],
  bootstrap: [AppComponent]
})
export class AppModule { }
