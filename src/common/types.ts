enum Responses {
    Yes,
    No
}

enum Rarity {
    Common,
    Uncommon,
    Rare,
    Mythic
}

type CardType = {
    base: string;
    subType: string;
}

type CardSet = {
    name: string;
    symbolRef: string;
    cardNumber: number;
    rarity: Rarity
}

type Card = {
    name: string;
    description: string;
    castingCost: number;
    imgRef: string;
    cardType: CardType;
}

export { Responses, Rarity, CardType, CardSet, Card }