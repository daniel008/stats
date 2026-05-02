import type { OutputTarget } from '../Report.js';

export class ConsoleReport implements OutputTarget {
  print(report: string): void {
    console.log(report);
  }
}
