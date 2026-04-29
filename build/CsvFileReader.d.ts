import { MatchResult } from './MatchResult.js';
type MatchData = [Date, string, string, number, number, MatchResult, string];
export declare class CsvFileReader {
    fileName: string;
    data: MatchData[];
    constructor(fileName: string);
    read(): void;
}
export {};
//# sourceMappingURL=CsvFileReader.d.ts.map