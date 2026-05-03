import { MatchResult } from './MatchResult.js';
export type MatchData = [
    Date,
    string,
    string,
    number,
    number,
    MatchResult,
    string
];
export type MatchRow = [string, string, string, string, string, string, string];
export declare const isMatchRow: (row: string[]) => row is MatchRow;
//# sourceMappingURL=MatchData.d.ts.map