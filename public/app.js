function playReversed() {
  const phrase = "rednuht";
  if (!("speechSynthesis" in window)) {
    alert("Speech synthesis not supported in this browser.");
    return;
  }
  const utterance = new SpeechSynthesisUtterance(phrase);
  utterance.rate = 0.9;
  utterance.pitch = 0.7;
  window.speechSynthesis.speak(utterance);
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
