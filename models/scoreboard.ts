import { Teams } from '../utils/constants';
import type { Scoreboard } from '../utils/types';

interface ScoreboardStore {
  updateScore(team: Teams): void;
  getScores(): Scoreboard;
}

export default class InMemoryScoreboardStore implements ScoreboardStore {
  private scoreboard: Scoreboard;

  constructor(scoreboard: Readonly<Scoreboard>) {
    this.scoreboard = scoreboard;
  }

  updateScore(team: Teams): void {
    this.scoreboard[team] += 1;
  }

  getScores(): Scoreboard {
    return { ...this.scoreboard };
  }
}
