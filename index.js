//ссылки на элементы времени
const refs = {
    daysEl: document.querySelector('span[data-value="days"]'),
    hoursEl: document.querySelector('span[data-value="hours"]'),
    minsEl: document.querySelector('span[data-value="mins"]'),
    secsEl: document.querySelector('span[data-value="secs"]'),
    flexBox: document.getElementById('flex-box'),
};
class CountdownTimer {
    constructor({ targetDate } = {}) {
      this.targetDate = targetDate;
      this.init();
    }

    init() {
      this.getDeltaTime();
      setInterval(() => {
        this.getDeltaTime();
      }, 1000);
    }

    getDeltaTime() {
      const currentTime = Date.now();
      const deltaTime = this.targetDate - currentTime;
      this.getTimeComponents(deltaTime);
    }

    getTimeComponents(time) {
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours = this.pad(
        Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      );
      const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

      this.updateClockface(days, hours, mins, secs);
    }

    pad(value) {
      return String(value).padStart(2, '0');
    }

    updateClockface(days, hours, mins, secs) {
      refs.daysEl.textContent = `${days}`;
      refs.hoursEl.textContent = `${hours}`;
      refs.minsEl.textContent = `${mins}`;
      refs.secsEl.textContent = `${secs}`;
    }
}

const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date(2022, 0, 1, 0, 0, 0, 0),
});