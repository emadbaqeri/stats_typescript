import { MatchData } from "./MatchData";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTraget {
  print(report: string): void;
}

export class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTraget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const outputReport = this.analyzer.run(matches);
    this.outputTarget.print(outputReport);
  }
}
