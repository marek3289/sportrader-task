import InMemoryScoreboardStore from '../models/scoreboard';
import { Teams, SimulationStatus, initialScoreboard } from '../utils/constants';

export default class Simulation {
  private scoreboard: InMemoryScoreboardStore | null = null;
  private status: SimulationStatus = SimulationStatus.NOT_STARTED;
  private interval: NodeJS.Timeout | null = null;
  private startTime: Date | null = null;

  private readonly SCORE_INTERVAL = 1000;
  private readonly MATCH_DURATION = 9000;

  getState() {
    return {
      scoreboard: this.scoreboard?.getScores()|| { ...initialScoreboard },
      status: this.status,
    }
  }
  
  startSimulation() {
    this.scoreboard = new InMemoryScoreboardStore({ ...initialScoreboard });
    this.startTime = new Date();
    this.interval = setInterval(() => this.updateScore(), this.SCORE_INTERVAL);
    this.status = SimulationStatus.IN_PROGRESS;
  }
  
  finishSimulation() {
    this.startTime = null;
    if (this.interval) clearInterval(this.interval);
    this.status = SimulationStatus.FINISHED;
  }

  restartSimulation() {
    if (this.scoreboard) {
      this.scoreboard.resetScore({ ...initialScoreboard });
    } else {
      const scoreboard = { ...initialScoreboard };
      this.scoreboard = new InMemoryScoreboardStore(scoreboard);
    }

    this.startSimulation();
  }

  private updateScore(): void {
    if (!this.scoreboard) return;
    const elapsedTime = this.getElapsedTime();
    
    if (elapsedTime >= this.MATCH_DURATION) {
      this.finishSimulation();
      return;
    }

    const randomTeam = this.getRandomTeam();
    this.scoreboard.updateScore(randomTeam);
  }

  private getElapsedTime(): number {
    if (!this.startTime) {
      return 0;
    }

    const elapsedMillis = new Date().getTime() - this.startTime.getTime();
    return Math.round(elapsedMillis / 1000) * 1000;
  }

  private getRandomTeam(): Teams {
    const teams = Object.values(Teams);
    return teams[Math.floor(Math.random() * teams.length)] as Teams;
  }
}
