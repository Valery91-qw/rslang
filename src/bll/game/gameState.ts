import {IWord} from "../../types/types";

export const gameState: GameStateType = {
    gameWords: [],
};

export type GameStateType = {
    gameWords: Array<IWord>
}