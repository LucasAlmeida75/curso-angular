import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-list-render',
  imports: [CommonModule],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {
  animals = [
    {name: 'Turca', type: 'dog'},
    {name: 'Tom', type: 'cat'},
    {name: 'Frida', type: 'dog'},
    {name: 'Bob', type: 'horse'}
  ]
}
