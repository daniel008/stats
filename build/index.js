import { CsvFileReader } from './CsvFileReader.js';
import { MatchReader } from './MatchReader.js';
import { ConsoleReport } from './reportTargets/ConsoleReport.js';
import { WinAnalysis } from './analyzers/WinAnalysis.js';
import { Report } from './Report.js';
// const reader = new MatchReader('football.csv');
// reader.read();
// enum - enumeration
// enum MatchResult {
//   HomeWin = 'H',
//   AwayWin = 'A',
//   Draw = 'D',
// }
// create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv');
// create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
// let manUnitedWins = 0;
// for (let match of reader.data) {
//   if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
//     manUnitedWins++;
//   } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
//     manUnitedWins++;
//   }
// }
const report = new Report(new WinAnalysis('Liverpool'), new ConsoleReport());
report.PrintReport(matchReader.matches);
