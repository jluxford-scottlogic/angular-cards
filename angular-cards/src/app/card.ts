export interface Card {
    id: number;
    text: Flag<string>[];
}

export interface Flag<T> {v: T, flagged?: Boolean};

export let getText : (card?: Card) => string = (card?: Card) => {
    if (!card) {return ""}
    let splitText = card.text.map(v => v.v);
    return splitText.join(" ")
}