import type { MatchData } from '../MatchData.js';
import type { Analyzer } from '../Report.js';
export declare class WinAnalysis implements Analyzer {
    team: string;
    constructor(team: string);
    run(matches: MatchData[]): string;
}
//# sourceMappingURL=WinAnalysis.d.ts.map