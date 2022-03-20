import ComplexWordsConstants from "./complexWords.constants";
import {IComplexWord} from "./complexWordsState";

export const addComplexWord = (word: IComplexWord) => (
    {type: ComplexWordsConstants.add_word, word} as const
)

export const deleteComplexWord = (id: string) => (
    {type: ComplexWordsConstants.delete_word, id} as const
)

export const increaseShowNumbers = (id: string) => (
    {type: ComplexWordsConstants.increase_show_number, id} as const
)
export type ComplexWordsActionsType =
    | ReturnType<typeof addComplexWord>
    | ReturnType<typeof deleteComplexWord>
    | ReturnType<typeof increaseShowNumbers>