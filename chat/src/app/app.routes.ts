import { Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { WelcomeComponent } from './welcome/welcome.component';

export const routes: Routes = [
    { path: "", component: WelcomeComponent },
    { path: "chat", component: ChatComponent }
];