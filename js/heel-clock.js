// The heel's clock (pug/sections/_09-heel.pug): the room's real time in the 24-hour clock the room uses, so the heel can be appalled by it whenever the talk lands. It ticks every few seconds for as long as the deck is open, which costs nothing.
(() => {
  const clocks = document.querySelectorAll(".reveal time.now");
  if (!clocks.length) return;

  const tick = () => {
    const now = new Date().toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit", hourCycle: "h23" });
    for (const clock of clocks) {
      clock.textContent = now;
      clock.dateTime = now;
    }
  };

  tick();
  setInterval(tick, 5000);
})();
