import { Component } from '@angular/core';

import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWayDataBindingComponent } from './components/two-way-data-binding/two-way-data-binding.component';

@Component({
  selector: 'app-root',
  imports: [FirstComponentComponent, ParentDataComponent, DirectivesComponent, IfRenderComponent, EventosComponent, ListRenderComponent, PipesComponent, TwoWayDataBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userName: string = 'Joaquim';
  title: string = 'curso-angular';
  userData: { email: string, role: string } = {
    email: 'joaquim@gmail.com',
    role: 'Admin'
  };
}
