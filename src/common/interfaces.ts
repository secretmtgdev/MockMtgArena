import { Card } from './types';

interface IBoardService {
    PlayNonPermanentCard: (data: Card) => boolean;
    PlayPermanentCard: (data: Card) => boolean;
}