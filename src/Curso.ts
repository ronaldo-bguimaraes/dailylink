import { Clock } from "./components/Clock";

export interface Time {
  readonly hours?: number;
  readonly minutes?: number;
  readonly seconds?: number;
}

export interface CursoData {
  readonly day: number;
  readonly prof: string;
  readonly nome: string;
  readonly time: Time;
  readonly link: string;
}

export enum DAY {
  DOM,
  SEG,
  TER,
  QUA,
  QUI,
  SEX,
  SAB
}

export class Curso {

  readonly day: string;
  readonly prof: string;
  readonly nome: string;
  readonly clock: Clock;
  readonly link: string;

  constructor(data: CursoData) {

    this.day = DAY[data.day];

    this.prof = data.prof;

    this.nome = data.nome;

    this.clock = new Clock(data.time.hours, data.time.minutes, data.time.seconds);

    this.link = data.link;

  }

}