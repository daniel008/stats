// import { CsvFileReader } from './CsvFileReader.js';
// import { dateStringToDate } from './utils.js';
// import { MatchResult } from './MatchResult.js';

// type MatchRow = [string, string, string, string, string, string, string];
// type MatchData = [Date, string, string, number, number, MatchResult, string];

// const isMatchRow = (row: string[]): row is MatchRow => {
//   return row.length === 7;
// };

// export class MatchReader extends CsvFileReader<MatchData> {
//   mapRow(row: MatchRow): MatchData {
//     if (!isMatchRow(row)) {
//       throw new Error(`Invalid match row`);
//     }

//     const [date, homeTeam, awayTeam, homeScore, awayScore, result, referee] =
//       row;

//     return [
//       dateStringToDate(date),
//       homeTeam,
//       awayTeam,
//       parseInt(homeScore),
//       parseInt(awayScore),
//       result as MatchResult,
//       referee,
//     ];
//   }
// }
