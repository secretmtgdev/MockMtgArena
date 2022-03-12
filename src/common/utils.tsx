import { Responses } from './types';
import Constants from './constants';

// More details on localeCompare: https://tinyurl.com/3478t48a
const CompareStrings = (first: string, second: string) => {
    return first.localeCompare(second, 'en', { sensitivity: 'base' })
}

// Any nonZero value indicates that the user didn't type in Yes or No
const ValidBinaryResponse = (response: string) => {
    const isYes = CompareStrings(response, Responses.Yes.toString());
    const isNo = CompareStrings(response, Responses.No.toString());
    return isYes == 0 || isNo == 0;
}

const Utils = {
    PromptPlayCard: (cardName: string) => {
        let response = "";
        while(!ValidBinaryResponse(response)) {
            response = prompt(Constants.PROMPTS.playCard(cardName));
            if(!ValidBinaryResponse(response)) {
                continue;
            }

            if(CompareStrings(response, Responses.Yes.toString())) {
                // TODO: Handle playing the card (put the card on the battlefield)
                console.error("Playing the card on the battlefield");
                return true;
            } else {
                // TODO: Handle not playing the card (put the card back in the hand)
                console.error("Putting the card back in the users hand");
                return false;
            }
        }
    }
}

export default Utils;