import type { MatchData } from './MatchData.js';
export interface Analyzer {
    run(matches: MatchData[]): string;
}
export interface OutputTarget {
    print(report: string): void;
}
export declare class Report {
    analyzer: Analyzer;
    outputTarget: OutputTarget;
    constructor(analyzer: Analyzer, outputTarget: OutputTarget);
    PrintReport(matches: MatchData[]): void;
}
//# sourceMappingURL=Report.d.ts.map