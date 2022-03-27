export const complexWordsState: IComplexWordsState = {
    complexWords: []
}

export interface IComplexWordsState {
    complexWords: Array<IComplexWord>
}

export interface IComplexWord {
    id: string,
    showNumber: number
    amountRight: number
    amountWrong: number
    learned: boolean
}