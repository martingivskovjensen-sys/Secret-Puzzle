async function initFakeLogin() {
  const form = document.getElementById("fake-login");
  const out = document.getElementById("auth-result");
  if (!form || !out) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    out.textContent = "auth...";
    try {
      const res = await fetch("/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user: "guest" }),
      });
      const data = await res.json();
      out.textContent = data.error || "denied";
    } catch (err) {
      out.textContent = "denied";
    }
  });
}

async function initNetworkProbe() {
  const probe = document.getElementById("net-probe");
  if (!probe) return;
  const phase = probe.dataset.probe || "alpha";
  try {
    await fetch(`/signal?phase=${encodeURIComponent(phase)}&t=${Date.now()}`);
  } catch (err) {
    // silent by design
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initFakeLogin();
  initNetworkProbe();
});
