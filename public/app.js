function playReversedMorse() {
  const morse = "- .... ..- -. -.. . .-.";
  const segments = buildMorseSegments(morse);
  const reversed = segments.slice().reverse();
  playSegments(reversed);
}

function buildMorseSegments(morse) {
  const unit = 0.12;
  const segments = [];
  const letters = morse.trim().split(" ");

  letters.forEach((letter, letterIndex) => {
    const symbols = letter.split("");
    symbols.forEach((symbol, symbolIndex) => {
      const duration = symbol === "." ? unit : unit * 3;
      segments.push({ tone: true, duration });
      if (symbolIndex < symbols.length - 1) {
        segments.push({ tone: false, duration: unit });
      }
    });

    if (letterIndex < letters.length - 1) {
      segments.push({ tone: false, duration: unit * 3 });
    }
  });

  return segments;
}

function playSegments(segments) {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) {
    alert("Audio not supported in this browser.");
    return;
  }

  const ctx = new AudioContext();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = "sine";
  osc.frequency.value = 620;
  gain.gain.value = 0;

  osc.connect(gain).connect(ctx.destination);

  let t = ctx.currentTime + 0.05;
  segments.forEach((segment) => {
    gain.gain.setValueAtTime(segment.tone ? 0.9 : 0.0, t);
    t += segment.duration;
  });

  osc.start(ctx.currentTime);
  osc.stop(t + 0.05);
}

document.addEventListener("DOMContentLoaded", () => {
  const panel = document.querySelector(".panel");
  if (!panel) return;
  panel.animate(
    [
      { opacity: 0, transform: "translateY(12px)" },
      { opacity: 1, transform: "translateY(0px)" },
    ],
    { duration: 450, easing: "ease-out" }
  );
});
