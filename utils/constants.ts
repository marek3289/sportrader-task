import { Scoreboard } from "./types";

export enum Teams {
  Germany = 'Germany',
  Poland = 'Poland',
  Brazil = 'Brazil',
  Mexico = 'Mexico',
  Argentina = 'Argentina',
  Uruguay = 'Uruguay',
}

export enum SimulationStatus {
  NOT_STARTED = 'NOT_STARTED',  // -> PRZYCISK START
  IN_PROGRESS = 'IN_PROGRESS',  // -> PRZYCISK FINISH
  FINISHED = 'FINISHED',        // -> PRZYCISK RESTART 
}

export const initialScoreboard: Readonly<Scoreboard> = {
  [Teams.Germany]: 0,
  [Teams.Poland]: 0,
  [Teams.Brazil]: 0,
  [Teams.Mexico]: 0,
  [Teams.Argentina]: 0,
  [Teams.Uruguay]: 0,
};
