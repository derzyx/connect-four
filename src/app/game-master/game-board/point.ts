import { GameColors } from "../player";

export interface Coordinate {
    col: number,
    row: number
}

export class BoardPoint {
    constructor(point: Coordinate, color: string, occupied: boolean) {
        this.point = point
        this.color = color
        this.occupied = occupied
    }

    point: Coordinate;
    color: string;
    occupied: boolean;

    /**
     * Returns available points in horizontal axis for given board point
     * @param boardPoint main point
     * @param columns columns in board
     * @returns array of Coordinate type points
     */
    horizExp(boardPoint: Coordinate, columns: number): Coordinate[] {
        const arr: Coordinate[] = [];
        for (let i = -3; i < 4; i++) {
            if (boardPoint.col - i > columns - 1 || boardPoint.col - i < 0) continue;
            else {
                arr.push({
                    col: boardPoint.col - i,
                    row: boardPoint.row
                })
            }
        }
        return arr;
    }

    /**
     * Returns available points in vertical axis for given board point
     * @param boardPoint main point
     * @param rows rows in board
     * @returns array of Coordinate type points
     */
    vertExp(boardPoint: Coordinate, rows: number): Coordinate[] {
        const arr: Coordinate[] = [];
        for (let i = -3; i < 4; i++) {
            if (boardPoint.row - i > rows - 1 || boardPoint.row - i < 0) continue;
            else {
                arr.push({
                    col: boardPoint.col,
                    row: boardPoint.row - i
                })
            }
        }
        return arr;
    }

    /**
     * Returns available points in diagonal top left to bottom right \ axis for given board point 
     * @param boardPoint main point
     * @param columns columns in board
     * @param rows rows in board
     * @returns array of Coordinate type points
     */
    diagTL_BR(boardPoint: Coordinate, columns: number, rows: number): Coordinate[] {
        const arr: Coordinate[] = [];

        for (let i = -3; i < 4; i++) {
            if (
                boardPoint.col - i > columns - 1 || boardPoint.col - i < 0 ||
                boardPoint.row - i > rows - 1 || boardPoint.row - i < 0
            ) continue;
            else {
                arr.push({ // 6-0, 5-1, 4-2, 3-3, 2-4, 1-5 0-6
                    col: boardPoint.col - i,
                    row: boardPoint.row - i
                })
            }
        }
        return arr;
    }

    /**
     * Returns available points in diagonal bottom left to top right / axis for given board point 
     * @param boardPoint main point
     * @param columns columns in board
     * @param rows rows in board
     * @returns array of Coordinate type points
     */
    diagBL_TR(boardPoint: Coordinate, columns: number, rows: number): Coordinate[] {
        const arr: Coordinate[] = [];

        for (let i = -3; i < 4; i++) {
            if (
                boardPoint.col - i > columns - 1 || boardPoint.col - i < 0 ||
                boardPoint.row + i > rows - 1 || boardPoint.row + i < 0
            ) continue;
            else {
                arr.push({ // 6-0, 5-1, 4-2, 3-3, 2-4, 1-5 0-6
                    col: boardPoint.col - i,
                    row: boardPoint.row + i
                })
            }
        }
        return arr;
    }
}