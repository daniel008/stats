import { dateStringToDate } from './utils.js';
import { MatchResult } from './MatchResult.js';
import type { MatchData } from './MatchData.js';
import { isMatchRow } from './MatchData.js';

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  matches: MatchData[] = [];

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map((row: string[]): MatchData => {
      if (!isMatchRow(row)) {
        throw new Error(`Invalid match row: ${row.join(',')}`);
      }

      const [date, homeTeam, awayTeam, homeScore, awayScore, result, referee] =
        row;

      return [
        dateStringToDate(date),
        homeTeam,
        awayTeam,
        parseInt(homeScore),
        parseInt(awayScore),
        result as MatchResult,
        referee,
      ];
    });
  }
}
