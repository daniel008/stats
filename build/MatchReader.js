import { dateStringToDate } from './utils.js';
import { MatchResult } from './MatchResult.js';
import { isMatchRow } from './MatchData.js';
export class MatchReader {
    reader;
    matches = [];
    constructor(reader) {
        this.reader = reader;
    }
    load() {
        this.reader.read();
        this.matches = this.reader.data.map((row) => {
            if (!isMatchRow(row)) {
                throw new Error(`Invalid match row: ${row.join(',')}`);
            }
            const [date, homeTeam, awayTeam, homeScore, awayScore, result, referee] = row;
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
