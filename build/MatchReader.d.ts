import { CsvFileReader } from './CsvFileReader.js';
import { MatchResult } from './MatchResult.js';
type MatchRow = [string, string, string, string, string, string, string];
type MatchData = [Date, string, string, number, number, MatchResult, string];
export declare class MatchReader extends CsvFileReader<MatchData> {
    mapRow(row: MatchRow): MatchData;
}
export {};
//# sourceMappingURL=MatchReader.d.ts.map