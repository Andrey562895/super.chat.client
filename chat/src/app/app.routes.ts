import { Routes } from '@angular/router';
import { ChatComponent } from './components/chat/chat.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthComponent } from './components/auth/auth.component';

export const routes: Routes = [
    { path: "", redirectTo: "/registration", pathMatch: "full" },
    { path: "registration", component: RegistrationComponent },
    { path: "auth", component: AuthComponent },
    { path: "chat", component: ChatComponent }
];