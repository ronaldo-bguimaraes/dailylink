function createClock(hours = 0, minutes = 0, seconds = 0) {

  const _clock = { hours, minutes, seconds };

  return {

    get hours() {
      return _clock.hours;
    },

    set hours(hours) {
      _clock.hours = hours;
    },

    get minutes() {
      return _clock.minutes;
    },

    set minutes(minutes) {
      _clock.minutes = minutes;
    },

    get seconds() {
      return _clock.seconds;
    },

    set seconds(seconds) {
      _clock.seconds = seconds;
    },

    toSeconds() {

      return ((_clock.hours * 60) + _clock.minutes) * 60 + _clock.seconds;
    },

    toString() {

      const $ = (e) => `00${e}`.slice(-2);

      return `${$(_clock.hours)}h ${$(_clock.minutes)}m ${$(_clock.seconds)}s`;
    },

    fromSeconds(seconds = 0) {

      const clock = createClock.fromSeconds(seconds);

      _clock.hours = clock.hours;

      _clock.minutes = clock.minutes;

      _clock.seconds = clock.seconds;
    },

    setHours(hours = 0) {

      const clock = createClock.fromSeconds(_clock.toSeconds());

      clock.hours = hours;

      _clock.fromSeconds(clock.toSeconds());
    },

    setMinutes(minutes = 0) {

      const clock = createClock.fromSeconds(_clock.toSeconds());

      clock.minutes = minutes;

      _clock.fromSeconds(clock.toSeconds());
    },

    setSeconds(seconds = 0) {

      const clock = createClock.fromSeconds(_clock.toSeconds());

      clock.seconds = seconds;

      _clock.fromSeconds(clock.toSeconds());
    }
  }
}

createClock.now = function () {

  const date = new Date();

  const clock = createClock(date.getHours(), date.getMinutes(), date.getSeconds());

  return clock.toSeconds();
}

createClock.fromSeconds = function (seconds = 0) {

  const clock = createClock();

  clock.seconds = seconds % 60;

  seconds -= clock.seconds;

  seconds = seconds / 60;

  clock.minutes = seconds % 60;

  seconds -= clock.minutes;

  clock.hours = seconds / 60;

  return clock;
}

export default createClock;