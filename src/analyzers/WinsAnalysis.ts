import { MatchData } from "../MatchData";
import { MatchResult } from "../matchResult";
import { Analyzer } from "../Summary";

export class WinsAnalysis implements Analyzer {
  constructor(public teamName: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;

    for (let match of matches) {
      if (match[1] === "Man United" && match[5] === MatchResult.homeWin) {
        wins++;
      } else if (
        match[2] === "Man United" &&
        match[5] === MatchResult.awayWin
      ) {
        wins++;
      }
    }

    return `Team ${this.teamName} won ${wins} games`;
  }
}
