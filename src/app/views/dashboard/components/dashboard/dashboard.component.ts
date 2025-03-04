import { Component } from '@angular/core';
import {AccountsComponent} from '../../../../modules/accounts/accounts.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    AccountsComponent
  ],
  templateUrl: './dashboard.component.html',
  standalone: true,
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
