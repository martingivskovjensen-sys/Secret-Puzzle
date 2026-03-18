function fakeAudio() {
  alert("Audio file corrupted. Inspect the source for a residue.");
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
