import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { Animal } from '../../Animal';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-list-render',
  imports: [CommonModule],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {
  constructor(private listService: ListService) {}

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

  removeAnimal(animal: Animal) {
    console.log('Removendo animal...');
    this.animals = this.listService.remove(this.animals, animal);
  }
}
