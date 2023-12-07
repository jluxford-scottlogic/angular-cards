import { Component, Input } from '@angular/core';
import { Card, getText } from '../card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './card-details.component.html',
  styleUrl: './card-details.component.css'
})
export class CardDetailsComponent {
  @Input() card?: Card;
  cardText = getText(this.card);
  newWord = "";

  addNewWord() : void {
    this.card?.text.push({v: this.newWord})
  }
}
