import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { Animal } from '../../Animal';

@Component({
  selector: 'app-list-render',
  imports: [CommonModule],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {
  animals: Animal[] = [
    {name: 'Turca', type: 'dog', age: 2},
    {name: 'Tom', type: 'cat', age: 5},
    {name: 'Frida', type: 'dog', age: 3},
    {name: 'Bob', type: 'horse', age: 1}
  ]

  animalDetails = '';

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
  }
}
