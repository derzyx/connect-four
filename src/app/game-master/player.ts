export interface Player{
    color: string;
    tokens: number;
    hasTurn: boolean;
    hasWon: boolean;
}

export enum GameColors{
    yellow = 'yellow',
    red = 'red',
    default = 'white'
}