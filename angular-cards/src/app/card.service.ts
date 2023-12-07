import { Injectable } from '@angular/core';
import { Card } from './card';
import { CARDS } from './mock-cards';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

  getCards(): Observable<Card[]> {
    const cards = of(CARDS);
    return cards;
  }
}
