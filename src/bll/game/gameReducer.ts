import {gameState, GameStateType} from "./gameState";
import {Actions} from "./gameActions";
import GameActionTypes from "./gameAction.types";

export default function gameReducer(state = gameState, action: Actions): GameStateType {
    switch (action.type) {
        case GameActionTypes.add_words:
            return {...state, gameWords: [...action.words]}
        default: return state;
    }
}