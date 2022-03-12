import { Card } from '../common/types';
import { useState, useEffect } from 'react';

// Default objects
import BoardService from '../services/BoardService';
import Constants from '../common/constants';
import Utils from '../common/utils';
import EventEmitter from '../services/EventEmitter';

const Hand = (cards: Array<Card>, eventEmitter: EventEmitter) => {
    const [currentCards, setCurrentCards] = useState(new Array<Card>(Constants.DEFAULT_MAX_HAND_SIZE));
    useEffect(() => {
        eventEmitter.on(Constants.EVENTS.playCard, (cardName: string) => console.error(`[HAND]: Playing card ${cardName}`));
        setCurrentCards(cards);
    }, []);
    
    const PlayCard = (cardIdx: number) => {
        const currentHandState: Card[] = currentCards;
        const currentCard = currentHandState[cardIdx];
        // TODO: Remove the card from the current hand and create a card visual modal to showcase the card
        
        // Will continually prompt the user until a valid response is returned
        const playedCard = Utils.PromptPlayCard(currentCard.name);
        if(!playedCard) {
            return;
        }

        // Player did play the card, remove it from the current hand and add to board
        if(Constants.NON_PERMANENT_TYPES.has(currentCard.cardType.base)) {
            BoardService.PlayNonPermanent(currentCard);
        } else if(Constants.PERMANENT_TYPES.has(currentCard.cardType.base)) {
            BoardService.PlayPermanent(currentCard);
        } else {
            throw new Error(`Invalid card type: ${currentCard.cardType.base}`);
        }
        
        eventEmitter.emit(Constants.EVENTS.playCard, currentCard.name);
    }
}

export default Hand;