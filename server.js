const path = require("path");
const express = require("express");
const session = require("express-session");

const app = express();
const PORT = process.env.PORT || 3000;
const SESSION_SECRET = process.env.SESSION_SECRET || "dev_secret_change_me";

app.set("trust proxy", 1);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    },
  })
);

app.use(express.static(path.join(__dirname, "public")));

const answers = {
  1: ["coldstart"],
  2: ["palimpsest"],
  3: ["quartz"],
  4: ["tesselate"],
  5: ["ferrum"],
  6: ["sinew"],
  7: ["mnemosyne"],
  8: ["parallax"],
  9: ["ivoryhex"],
  10: ["redshift"],
  11: ["axiom"],
  12: ["lattice"],
  13: ["corsair"],
  14: ["kepler"],
  15: ["wraithnode"],
  16: ["abyssal"],
  17: ["prague"],
  18: ["k9v3q"],
  19: ["obsidian"],
  20: ["mtccp"],
};

const hints = {
  1: "An acrostic hides in the boot log.",
  2: "The faintest layer is the real one. Decode, then shift.",
  3: "A repeating-key cipher; the key is visible.",
  4: "Unwrap in reverse order.",
  5: "The error message speaks in base64.",
  6: "Whitespace at the ends is not empty.",
  7: "Take initials.",
  8: "One word is nearly invisible.",
  9: "Decode the correct base64 string.",
  10: "Visit /signal and decode the base64 fragment.",
  11: "The URL parameter matters.",
  12: "The file is base64 encoded.",
  13: "Open the zip and read cargo.txt.",
  14: "Metadata is the payload.",
  15: "Same three-step chain as before.",
  16: "Decode the Morse on the page.",
  17: "Assemble north/east from the visible fragments.",
  18: "Base64 then XOR.",
  19: "Base64, reverse, then Vigenere.",
  20: "Order by length, initials, reverse.",
};

const stages = {
  1: {
    title: "Stage 1: Cold Start",
    body: () => `
      <div class="log">
        <p>CLOCK SYNC FAIL</p>
        <p>OVERFLOW IN SECTOR 3</p>
        <p>LOCKED TRACE DETECTED</p>
        <p>DRIVER SHADOW ATTACHED</p>
        <p>SUBSYSTEM ECHO ONLINE</p>
        <p>THREADS TORN</p>
        <p>ARCHIVE INDEX UNKNOWN</p>
        <p>ROUTING TABLES STALE</p>
        <p>TRANSFER HALTED</p>
      </div>
      <p class="dim">First letters are louder than they look.</p>
    `,
  },
  2: {
    title: "Stage 2: Palimpsest",
    body: () => `
      <div class="stack">
        <div class="layer visible">ZG8gbm90IGZvbGxvdw==</div>
        <div class="layer ghost">d2hzcHR3emx6YQ==</div>
        <div class="layer ghost thin">dGhpcyBpcyBub3QgdGhlIGtleQ==</div>
      </div>
      <p class="dim">Decode the hidden layer. Then shift.</p>
    `,
  },
  3: {
    title: "Stage 3: Quartz Lock",
    body: () => `
      <p class="mono">chedhr</p>
      <p class="dim">Vigenere key: <span class="ghost">mnemosyne</span></p>
    `,
  },
  4: {
    title: "Stage 4: Mosaic",
    body: () => `
      <p class="mono">anlmcWp4eGp5</p>
      <p class="dim">Decode, reverse, then shift -5.</p>
    `,
  },
  5: {
    title: "Stage 5: The Login That Lies",
    body: () => `
      <form id="fake-login" class="login">
        <input name="user" placeholder="user" autocomplete="off" />
        <input name="pass" placeholder="pass" type="password" />
        <button type="submit">Authenticate</button>
      </form>
      <div id="auth-result" class="mono"></div>
      <p class="dim">The error is the clue.</p>
    `,
  },
  6: {
    title: "Stage 6: White Noise",
    body: () => `
      <a class="mono" href="/assets/trace.log" download>trace.log</a>
      <p class="dim">Trailing whitespace is data.</p>
    `,
  },
  7: {
    title: "Stage 7: Mnemonic",
    body: () => `
      <div class="library">
        <p>Mythic Null</p>
        <p>Null Echo</p>
        <p>Echoes Nested</p>
        <p>Memory Mnemonics</p>
        <p>Obsolete Scripts</p>
        <p>Syntax Yields</p>
        <p>Yielded Nodes</p>
        <p>Nodes Erode</p>
        <p>Echoes End</p>
      </div>
      <p class="dim">Read the initials.</p>
    `,
  },
  8: {
    title: "Stage 8: Parallax",
    body: () => `
      <p class="dim">One layer moves slower than the rest.</p>
      <p class="ghost">parallax</p>
    `,
  },  9: {
    title: "Stage 9: Ivory Hex",
    body: () => `
      <p class="dim">One of these decodes to the key.</p>
      <p class="mono">c2lsa3M=</p>
      <p class="mono">aXZvcnloZXg=</p>
    `,
  },
  10: {
    title: "Stage 10: Net Fracture",
    body: () => `
      <div class="dim">connection unstable</div>
      <div id="net-probe" data-probe="alpha"></div>
      <p class="dim">Check the network response.</p>
    `,
  },
  11: {
    title: "Stage 11: Gate",
    body: (req) => {
      const gate = normalize(req.query.gate);
      const reveal = gate === "open"
        ? "<div class=\"mono\">axiom</div>"
        : "";
      return `
        <p class="dim">add <code>?gate=open</code></p>
        ${reveal}
      `;
    },
  },
  12: {
    title: "Stage 12: Lattice",
    body: () => `
      <a class="mono" href="/assets/ghost.bmp" download>ghost.bmp</a>
      <p class="dim">extract LSB data</p>
    `,
  },
  13: {
    title: "Stage 13: Archive",
    body: () => `
      <a class="mono" href="/assets/cache.zip" download>cache.zip</a>
      <p class="dim">the archive is damaged. recover it.</p>
    `,
  },
  14: {
    title: "Stage 14: Log 1996",
    body: () => `
      <a class="mono" href="/assets/ledger.pdf" download>ledger.pdf</a>
      <p class="dim">metadata is not content.</p>
    `,
  },
  15: {
    title: "Stage 15: Null System",
    body: () => `
      <p class="mono">emxscm9yem9tZQ==</p>
      <p class="dim">base64 → reverse → vigenere (key: <span class="ghost">ivoryhex</span>)</p>
    `,
  },
  16: {
    title: "Stage 16: Echo",
    body: () => `
      <audio controls src="/assets/echo.wav"></audio>
      <p class="dim">reverse the audio, then decode Morse</p>
    `,
  },
  17: {
    title: "Stage 17: Coordinates",
    body: () => `
      <p class="mono">north then east</p>
      <p class="dim">fragments are hidden here</p>
      <div class="ghost">N50</div>
      <div class="ghost">.0755</div>
      <div class="ghost">E14</div>
      <div class="ghost">4378</div>
    `,
  },
  18: {
    title: "Stage 18: Sector 7",
    body: () => `
      <p class="mono">GkwXQQU=</p>
      <p class="dim">base64 then xor with key: <span class="ghost">quartz</span></p>
    `,
  },
  19: {
    title: "Stage 19: Vault",
    body: () => `
      <p class="mono">Z2Zxa2F2ZmY=</p>
      <p class="dim">base64 → reverse → vigenere (key: <span class="ghost">redshiftabyssal</span>)</p>
    `,
  },
  20: {
    title: "Stage 20: Final Gate",
    body: () => `
      <p class="dim">Order by length, take first letters, reverse.</p>
      <p class="mono">coldstart</p>
      <p class="mono">tesselate</p>
      <p class="mono">mnemosyne</p>
      <p class="mono">corsair</p>
      <p class="mono">prague</p>
    `,
  },
};

function ensureSession(req) {
  if (!req.session.maxStage) req.session.maxStage = 1;
  if (!req.session.attempts) req.session.attempts = {};
  if (!req.session.completed) req.session.completed = false;
}

function normalize(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .trim();
}

function isRateLimited(req, id) {
  ensureSession(req);
  const now = Date.now();
  const windowMs = 60 * 1000;
  const attempts = req.session.attempts[id] || [];
  const recent = attempts.filter((t) => now - t < windowMs);
  if (recent.length >= 5) {
    req.session.attempts[id] = recent;
    return true;
  }
  recent.push(now);
  req.session.attempts[id] = recent;
  return false;
}

function renderShell({ title, stage, body, error }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <link rel="stylesheet" href="/style.css" />
  <script defer src="/app.js"></script>
</head>
<body>
  <div class="scan"></div>
  <main class="shell">
    <header>
      <h1>NULL TRACE</h1>
      <div class="tag">STAGE ${stage} / 20</div>
    </header>
    <section class="panel">
      <h2>${title}</h2>
      ${body}
      <form class="answer" method="POST" action="/verify/${stage}">
        <input name="answer" type="text" autocomplete="off" required />
        <button type="submit">submit</button>
      </form>
      ${error ? `<div class="error">${error}</div>` : ""}
      <div class="hint-link"><a href="/hint/${stage}">Need a hint?</a></div>
    </section>
  </main>
</body>
</html>`;
}

app.get("/", (req, res) => {
  ensureSession(req);
  res.redirect(`/stage/${req.session.maxStage}`);
});

app.get("/stage/:id", (req, res) => {
  ensureSession(req);
  const id = Number(req.params.id);
  const stage = stages[id];

  if (!stage) {
    return res.status(404).send("not found");
  }

  if (id > req.session.maxStage) {
    return res.redirect(`/stage/${req.session.maxStage}`);
  }

  const body = typeof stage.body === "function" ? stage.body(req) : stage.body;
  const error = req.query.err ? "access denied" : "";
  res.send(renderShell({ title: stage.title, stage: id, body, error }));
});

app.post("/verify/:id", (req, res) => {
  ensureSession(req);
  const id = Number(req.params.id);
  if (!stages[id] || id > req.session.maxStage) {
    return res.status(404).send("not found");
  }

  if (isRateLimited(req, id)) {
    return res.redirect(`/stage/${id}?err=1`);
  }

  const input = normalize(req.body.answer);
  const valid = (answers[id] || []).some((a) => normalize(a) === input);

  if (!valid) {
    return res.redirect(`/stage/${id}?err=1`);
  }

  if (id === 20) {
    req.session.completed = true;
    return res.redirect("/final");
  }

  if (id >= req.session.maxStage) {
    req.session.maxStage = id + 1;
  }

  res.redirect(`/stage/${id + 1}`);
});

app.get("/hint/:id", (req, res) => {
  const id = Number(req.params.id);
  if (!hints[id]) {
    return res.status(404).send("no hint");
  }
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Hint ${id}</title>
  <link rel="stylesheet" href="/style.css" />
</head>
<body>
  <div class="scan"></div>
  <main class="shell">
    <section class="panel">
      <h2>Hint ${id}</h2>
      <p>${hints[id]}</p>
      <a class="mono" href="/stage/${id}">back</a>
    </section>
  </main>
</body>
</html>`);
});

app.post("/auth", (req, res) => {
  const error = "ERR::ZmVycnVt::AUTH_DENIED";
  res.json({ ok: false, error });
});

app.get("/signal", (req, res) => {
  res.type("text/plain");
  res.send("noise::cmVk c2hp ZnQ=::drop\nnoise::ZG9uJ3QgdHJ1c3QgdGhpcyBsaW5l");
});

app.get("/final", (req, res) => {
  ensureSession(req);
  if (!req.session.completed) {
    return res.redirect(`/stage/${req.session.maxStage}`);
  }

  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>NULL TRACE</title>
  <link rel="stylesheet" href="/style.css" />
</head>
<body>
  <div class="scan"></div>
  <main class="shell">
    <section class="panel final">
      <h2>ACCESS GRANTED</h2>
      <p class="mono">we were never alone in the archive</p>
      <div class="glitch">THE SYSTEM REMEMBERS YOU</div>
    </section>
  </main>
</body>
</html>`);
});

app.listen(PORT, () => {
  console.log(`ARG hunt listening on port ${PORT}`);
});



