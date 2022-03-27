import {IWord} from "../../types/types";

export const gameState: sprintStateType = {
    gameWords: [],
};

export type sprintStateType = {
    gameWords: Array<IWord>
}