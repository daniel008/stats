import type { MatchData } from './MatchData.js';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Report {
  constructor(
    public analyzer: Analyzer,
    public outputTarget: OutputTarget,
  ) {}

  PrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
