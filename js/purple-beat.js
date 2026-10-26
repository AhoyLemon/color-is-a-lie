// The purple beat (pug/sections/_05-line-of-purples.pug): on its first click the spectrum's bands slide from a straight line into the horseshoe. Each band carries both shapes, as data-line and data-shoe point lists with the same corners in the same order, and this tweens every corner between them. Reveal's events bubble from the .reveal element, so this loads ahead of the config like arrivals.js.
(() => {
  const DURATION = 1100;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const easeInOut = (t) => (t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2);
  const numbers = (list) => list.trim().split(/[\s,]+/).map(Number);

  const deck = document.querySelector(".reveal");
  const slide = deck && deck.querySelector("section.purple-beat");
  if (!slide) return;

  const bend = slide.querySelector(".bend");
  const bands = [...slide.querySelectorAll("polygon[data-line][data-shoe]")].map((element) => ({
    element,
    line: numbers(element.dataset.line),
    shoe: numbers(element.dataset.shoe),
  }));

  let shown = 0;
  let frame = 0;

  // t = 0 is the straight line, t = 1 the horseshoe.
  const draw = (t) => {
    for (const { element, line, shoe } of bands) {
      const corners = [];
      for (let i = 0; i < line.length; i += 2) {
        corners.push(`${(line[i] + (shoe[i] - line[i]) * t).toFixed(1)},${(line[i + 1] + (shoe[i + 1] - line[i + 1]) * t).toFixed(1)}`);
      }
      element.setAttribute("points", corners.join(" "));
    }
    shown = t;
  };

  const tweenTo = (target) => {
    cancelAnimationFrame(frame);
    if (reducedMotion.matches) return draw(target);
    const from = shown;
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / DURATION, 1);
      draw(from + (target - from) * easeInOut(progress));
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
  };

  // A step can show several fragments at once (the bend shares its step with the unlit ends, the heels and a caption), and event.fragment is only the first of them, so look through all of them.
  const includesBend = (event) => (event.fragments || [event.fragment]).includes(bend);
  deck.addEventListener("fragmentshown", (event) => {
    if (includesBend(event)) tweenTo(1);
  });
  deck.addEventListener("fragmenthidden", (event) => {
    if (includesBend(event)) tweenTo(0);
  });

  // Arriving on the slide by any route other than a click (backing in from the next slide, a reload, the hash) shows it in whatever state its fragments are already in.
  const settle = () => {
    cancelAnimationFrame(frame);
    draw(bend.classList.contains("visible") ? 1 : 0);
  };
  deck.addEventListener("slidechanged", (event) => {
    if (event.currentSlide === slide) settle();
  });
  deck.addEventListener("ready", settle);
})();
