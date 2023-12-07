import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card, getText } from '../card';
import { FormsModule } from '@angular/forms';
import { CardDetailsComponent } from '../card-details/card-details.component';
import { CardService } from '../card.service';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, FormsModule, CardDetailsComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  cards: Card[] = [];
  selectedCard?: Card;
  onSelect(card: Card): void {
    this.selectedCard = card;
  }
  constructor(private cardService: CardService) {}

  getCards() : void {
    this.cardService.getCards().subscribe(cards => this.cards = cards);
  }

  ngOnInit(): void {
    this.getCards();
  }

  getCardText(card: Card) : string {
    return getText(card);
  }
}
