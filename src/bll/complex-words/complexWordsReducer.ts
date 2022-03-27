import {complexWordsState, IComplexWordsState} from "./complexWordsState";
import ComplexWordsConstants from "./complexWords.constants";
import {ComplexWordsActionsType} from "./complexWordsActions";

export default function complexWordsReducer(state = complexWordsState, action: ComplexWordsActionsType): IComplexWordsState {
    switch (action.type) {
        case ComplexWordsConstants.add_word:
            return {...state, complexWords: [...state.complexWords, action.word]};
        case ComplexWordsConstants.delete_word:
            return {...state, complexWords: state.complexWords.filter(word => word.id !== action.id)}
        case ComplexWordsConstants.increase_show_number:
            return {...state, complexWords: state.complexWords.map(
                    word => word.id === action.id ? {...word, showNumber: word.showNumber++} : word
                )}
        default:
            return state;
    }
}