import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClientsComponent } from './clients/clients.component';
import { MeetingsComponent } from './meetings/meetings.component';

export class AppComponent {
    title = 'myapp';
}

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'clients',
        component: ClientsComponent
    },
    {
        path: 'meetings',
        component: MeetingsComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];
