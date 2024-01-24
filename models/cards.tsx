export interface CardModel{
    [key: string]: any
}

export class CardClass implements Partial<CardModel>{

    name: string
    front_url?: string
    back_url?: string

    constructor( card: CardModel ) {

        this.name = card.name
        this.front_url = card.front_url ?? ''
        this.back_url = card.back_url ?? ''

    }
}