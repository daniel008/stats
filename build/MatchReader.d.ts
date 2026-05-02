import type { MatchData } from './MatchData.js';
interface DataReader {
    read(): void;
    data: string[][];
}
export declare class MatchReader {
    reader: DataReader;
    matches: MatchData[];
    constructor(reader: DataReader);
    load(): void;
}
export {};
//# sourceMappingURL=MatchReader.d.ts.map