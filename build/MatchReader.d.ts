import { MatchResult } from './MatchResult.js';
interface DataReader {
    read(): void;
    data: string[][];
}
type MatchData = [Date, string, string, number, number, MatchResult, string];
export declare class MatchReader {
    reader: DataReader;
    matches: MatchData[];
    constructor(reader: DataReader);
    load(): void;
}
export {};
//# sourceMappingURL=MatchReader.d.ts.map