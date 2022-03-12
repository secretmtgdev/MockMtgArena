const Constants = {
    DEFAULT_MAX_HAND_SIZE: 7,
    PROMPTS: {
        nextPhase: "Move to next phase?",
        endTurn: "End the turn?",
        playCard: (cardName: string) => `Are you sure you would like to play ${cardName}?`
    },
    EVENTS: {
        playCard: "Player card",
        changePhase: "Changed phase",
        endTurn: "End turn"
    },
    NON_PERMANENT_TYPES: new Set(['Sorcery', 'Instant']),
    PERMANENT_TYPES: new Set(['Land', 'Creature', 'Enchantment', 'Artifact'])
    
}

export default Constants;