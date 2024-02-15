import { Routes } from '@angular/router';
import { ChatComponent } from './components/chat/chat.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { AuthComponent } from './components/auth/auth.component';
import { ContainerAuthComponent } from './components/container-auth/container-auth.component';

export const routes: Routes = [
    { path: "", redirectTo: "/auth", pathMatch: "full" },
    { path: "auth", component: ContainerAuthComponent,
        children: [
            { path: '', component: AuthComponent },
            { path: 'registration', component: RegistrationComponent },
            { path: 'login', component: LoginComponent },
        ]
    },
    { path: "chat", component: ChatComponent }
];