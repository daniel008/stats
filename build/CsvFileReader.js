import fs from 'fs';
import { dateStringToDate } from './utils.js';
import { MatchResult } from './MatchResult.js';
const isMatchRow = (row) => {
    return row.length === 7;
};
export class CsvFileReader {
    fileName;
    data = [];
    constructor(fileName) {
        this.fileName = fileName;
    }
    read() {
        this.data = fs
            .readFileSync(this.fileName, {
            encoding: 'utf-8',
        })
            .split('\n')
            .map((row) => {
            return row.split(',');
        })
            .map((row) => {
            if (!isMatchRow(row)) {
                throw new Error(`Invalid match row: ${row.join(',')}`);
            }
            const [date, homeTeam, awayTeam, homeScore, awayScore, result, referee,] = row;
            return [
                dateStringToDate(date),
                homeTeam,
                awayTeam,
                parseInt(homeScore),
                parseInt(awayScore),
                result,
                referee,
            ];
        });
    }
}
//# sourceMappingURL=CsvFileReader.js.map