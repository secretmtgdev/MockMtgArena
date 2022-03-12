import { Card } from '../common/types';

// TODO: Board service will be a singleton that will interact with the board object to keep track
// of the global state of the game
const BoardService = {
    PlayNonPermanent: (card: Card) => {
        // TODO: Update the graveyard state
        return true;
    },
    PlayPermanent: (card: Card) => {
        // TODO: Update the board state
        return true;
    }
}

export default BoardService;