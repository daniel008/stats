import fs from 'fs';
import { dateStringToDate } from './utils.js';
import { MatchResult } from './MatchResult.js';

type MatchData = [Date, string, string, number, number, MatchResult, string];
type MatchRow = [string, string, string, string, string, string, string];

const isMatchRow = (row: string[]): row is MatchRow => {
  return row.length === 7;
};

export class CsvFileReader {
  data: MatchData[] = [];

  constructor(public fileName: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      })
      .map((row: string[]): MatchData => {
        if (!isMatchRow(row)) {
          throw new Error(`Invalid match row: ${row.join(',')}`);
        }

        const [
          date,
          homeTeam,
          awayTeam,
          homeScore,
          awayScore,
          result,
          referee,
        ] = row;

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
