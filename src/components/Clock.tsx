export class Clock {

  private _hours = 0;
  private _minutes = 0;
  private _seconds = 0;

  constructor(hours = 0, minutes = 0, seconds = 0) {

    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
  }

  get hours() {

    return this._hours;
  }

  set hours(hours: number) {

    this._hours = hours % 60;
  }

  get minutes() {

    return this._minutes;
  }

  set minutes(minutes: number) {

    this._minutes = minutes % 60;

    this.hours += (minutes - this._minutes) / 60;
  }

  get seconds() {

    return this._seconds;
  }

  set seconds(seconds: number) {

    this._seconds = seconds % 60;

    this.minutes += (seconds - this._seconds) / 60;
  }

  toSeconds() {

    return (this._hours * 60 + this._minutes) * 60 + this._seconds;
  }


  private static format(value: number) {

    return value.toString().padStart(2, "0");
  }

  hoursToString() {

    return `${Clock.format(this._hours)}h`;
  }

  minutesToString() {

    return `${Clock.format(this._minutes)}m`;
  }

  secondsToString() {

    return `${Clock.format(this._seconds)}s`;
  }

  toString() {

    return `${this.hoursToString()} ${this.minutesToString()} ${this.secondsToString()}`;
  }

  static now() {

    const date = new Date();

    return (date.getHours() * 60 + date.getMinutes()) * 60 + date.getSeconds();
  }

  static fromHours(hours = 0) {

    return new Clock(hours);
  }

  static fromMinutes(minutes = 0) {

    return new Clock(undefined, minutes);
  }

  static fromSeconds(seconds = 0) {

    return new Clock(undefined, undefined, seconds);
  }

}