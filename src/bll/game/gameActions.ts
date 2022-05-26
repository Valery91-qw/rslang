import {IWord} from "../../types/types";
import GameActionTypes from "./gameAction.types";

export const addGameWords = (words: Array<IWord>) => ({type: GameActionTypes.add_words, words}) as const;

export type Actions = ReturnType<typeof addGameWords>