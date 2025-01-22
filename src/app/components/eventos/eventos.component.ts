import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ChangeNumberComponent } from '../change-number/change-number.component';

@Component({
  selector: 'app-eventos',
  imports: [CommonModule, ChangeNumberComponent],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})
export class EventosComponent {
  myNumber   : number  = 0;
  show       : boolean = false;
  buttonText : string  = "Clique para exibir a mensagem";

  showMessage(): void {
    this.show = !this.show;

    this.buttonText = !this.show ? "Clique para exibir a mensagem" : "Clique para ocultar a mensagem";
  };

  onChangeNumber(): void {
    this.myNumber = Math.floor(Math.random() * 10);
  }
}
