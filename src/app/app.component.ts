import { Component } from '@angular/core';

import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DirectivesComponent } from './components/directives/directives.component';

@Component({
  selector: 'app-root',
  imports: [FirstComponentComponent, ParentDataComponent, DirectivesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userName: string = 'Joaquim';
  title: string = 'curso-angular';
  userData: {email: string, role: string} = {
    email: 'joaquim@gmail.com',
    role: 'Admin'
  };
}
