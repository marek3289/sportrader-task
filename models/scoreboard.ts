import { Teams } from '../utils/constants';
import type { Scoreboard } from '../utils/types';

interface ScoreboardStore {
  updateScore(team: Teams): void;
  resetScore(scoreboard: Readonly<Scoreboard>): void;
  getScores(): Scoreboard;
}

export default class InMemoryScoreboardStore implements ScoreboardStore {
  private scoreboard: Scoreboard;

  constructor(scoreboard: Readonly<Scoreboard>) {
    this.scoreboard = { ...scoreboard };
  }

  updateScore(team: Teams): void {
    this.scoreboard[team] += 1;
  }

  resetScore(scoreboard: Readonly<Scoreboard>): void {
    this.scoreboard = { ...scoreboard };
  }

  getScores(): Scoreboard {
    return { ...this.scoreboard };
  }
}
