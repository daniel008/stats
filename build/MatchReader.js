import { CsvFileReader } from './CsvFileReader.js';
import { dateStringToDate } from './utils.js';
import { MatchResult } from './MatchResult.js';
const isMatchRow = (row) => {
    return row.length === 7;
};
export class MatchReader extends CsvFileReader {
    mapRow(row) {
        if (!isMatchRow(row)) {
            throw new Error(`Invalid match row`);
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
    }
}
//# sourceMappingURL=MatchReader.js.map