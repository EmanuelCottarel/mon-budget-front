import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SideNavComponent} from './views/side-nav/components/side-nav/side-nav.component';
import {TopNavComponent} from './views/top-nav/components/top-nav/top-nav.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideNavComponent, TopNavComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mon-budget';
}
