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

const stageConfig = {
  1: { unlocks: [2] },
  2: { unlocks: [3, 4] },
  3: { unlocks: [6] },
  4: { unlocks: [5] },
  5: { unlocks: [7, 8] },
  6: { unlocks: [9] },
  7: { unlocks: [10] },
  8: { unlocks: [11] },
  9: { unlocks: [12] },
  10: { unlocks: [] },
  11: { unlocks: [] },
  12: { unlocks: [] },
  13: { unlocks: [18] },
  14: { unlocks: [] },
  15: { unlocks: [17] },
  16: { unlocks: [19] },
  17: { unlocks: [20] },
  18: { unlocks: [] },
  19: { unlocks: [] },
  20: { unlocks: [] },
};

const hiddenFlags = {
  13: "archive",
  14: "log1996",
  15: "sysnull",
  16: "nodeecho",
  17: "deaddrop",
  18: "sector7",
  19: "vault",
  20: "finalgate",
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
      <!-- /archive-old still answers? -->
      <!-- anchor -->
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
    `,
  },
  3: {
    title: "Stage 3: Quartz Lock",
    body: () => `
      <p class="mono">chedhr</p>
      <p class="dim">A cipher without a key is just a wall.</p>
    `,
  },
  4: {
    title: "Stage 4: Mosaic",
    body: () => `
      <p class="mono">anlmcWp4eGp5</p>
      <!-- fragment: N50 -->
      <!-- /log/1996 -->
      <!-- anchor -->
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
    `,
  },
  6: {
    title: "Stage 6: White Noise",
    body: () => `
      <a class="mono" href="/assets/trace.log" download>trace.log</a>
      <p class="dim">The margins hold their own language.</p>
    `,
  },
  7: {
    title: "Stage 7: Mnemonic",
    body: (req) => {
      const solvedFive = req.session.solved?.[5];
      const note = solvedFive ? "<p class=\"dim\">a note slips loose</p>" : "";
      return `
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
        ${note}
        ${solvedFive ? "<!-- key: mnemosyne -->" : ""}
        <!-- anchor -->
      `;
    },
  },
  8: {
    title: "Stage 8: Parallax",
    body: (req) => {
      const reveal = shouldRevealPulse(req);
      return `
        <div class="mono">signal lost</div>
        ${reveal ? "<!-- pulse: parallax -->" : ""}
        ${reveal ? "<div class=\"dim\">lat: .0755</div>" : ""}
      `;
    },
  },
  9: {
    title: "Stage 9: Ivory Hex",
    body: () => `
      <p class="dim">The script compiles. The meaning does not.</p>
      <script>
        (function(_0x5c2d,_0x4fbb){
          const _0x5f=function(_0x2a){return _0x5c2d[_0x2a];};
          while(true){
            try{
              const _0x1c=parseInt(_0x5f(0x0)) * parseInt(_0x5f(0x1)) + parseInt(_0x5f(0x2));
              if(_0x1c===0x1b65){break;} else {_0x5c2d.push(_0x5c2d.shift());}
            } catch(_0x2f){_0x5c2d.push(_0x5c2d.shift());}
          }
        })(['0x2','0x59','0x3','aXZvcnloZXg=','0x29','0x1b65'],0x0);
        (function(){
          const _0x4a=['aXZvcnloZXg=','c2lsa3M=','c2hhZGU='];
          const _0x9d=function(_0x1b){return atob(_0x4a[_0x1b]);};
          const _0x6f=_0x9d(0x0).split('').reverse().reverse().join('');
          void _0x6f;
        })();
      </script>
    `,
  },
  10: {
    title: "Stage 10: Net Fracture",
    body: () => `
      <div class="dim">connection unstable</div>
      <div id="net-probe" data-probe="alpha"></div>
      <p class="dim">No output. Only traces.</p>
    `,
  },
  11: {
    title: "Stage 11: Gate",
    body: (req) => {
      const gate = normalize(req.query.gate);
      const reveal = gate === "palimpsest"
        ? "<div class=\"mono\">axiom</div>\n<!-- /system/null -->"
        : "";
      return `
        <p class="dim">the gate listens</p>
        ${reveal}
      `;
    },
  },
  12: {
    title: "Stage 12: Lattice",
    body: () => `
      <a class="mono" href="/assets/ghost.bmp" download>ghost.bmp</a>
      <p class="dim">clean image, dirty signal</p>
      <!-- fragment: E14 -->
    `,
  },
  13: {
    title: "Stage 13: Archive",
    body: () => `
      <a class="mono" href="/assets/cache.zip" download>cache.zip</a>
      <p class="dim">the archive leaks if you force it</p>
      <!-- /sector/7 -->
      <!-- anchor -->
    `,
    hidden: true,
  },
  14: {
    title: "Stage 14: Log 1996",
    body: () => `
      <a class="mono" href="/assets/ledger.pdf" download>ledger.pdf</a>
      <p class="dim">paper carries metadata</p>
      <!-- /vault -->
    `,
    hidden: true,
  },
  15: {
    title: "Stage 15: Null System",
    body: () => `
      <p class="mono">emxscm9yem9tZQ==</p>
      <!-- fragment: E4378 -->
      <p class="dim">the key is already written</p>
      <!-- /dead/drop -->
    `,
    hidden: true,
  },
  16: {
    title: "Stage 16: Echo",
    body: () => `
      <audio controls src="/assets/echo.wav"></audio>
      <p class="dim">the waveform runs backward</p>
    `,
    hidden: true,
  },
  17: {
    title: "Stage 17: Coordinates",
    body: () => `
      <p class="mono">north then east</p>
      <p class="dim">four fragments. one city.</p>
      <!-- anchor -->
    `,
    hidden: true,
  },
  18: {
    title: "Stage 18: Sector 7",
    body: () => `
      <p class="mono">GkwXQQU=</p>
      <p class="dim">xor tastes like memory</p>
    `,
    hidden: true,
  },
  19: {
    title: "Stage 19: Vault",
    body: () => `
      <p class="mono">Z2Zxa2F2ZmY=</p>
      <p class="dim">two keys, one lock</p>
    `,
    hidden: true,
  },
  20: {
    title: "Stage 20: Final Gate",
    body: () => `
      <p class="mono">five anchors. length orders. first letters. reverse.</p>
      <p class="dim">there is no map, only residue</p>
    `,
    hidden: true,
  },
};

function ensureSession(req) {
  if (!req.session.unlocked) req.session.unlocked = { 1: true };
  if (!req.session.solved) req.session.solved = {};
  if (!req.session.attempts) req.session.attempts = {};
  if (!req.session.flags) req.session.flags = {};
  if (!req.session.pulses) req.session.pulses = [];
}

function normalize(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .trim();
}

function canAccessStage(req, id) {
  ensureSession(req);
  const cfg = stages[id];
  if (!cfg) return false;
  if (!req.session.unlocked[id]) return false;
  if (cfg.hidden) {
    const flag = hiddenFlags[id];
    if (!flag || !req.session.flags[flag]) return false;
  }
  return true;
}

function unlockStages(req, ids = []) {
  ensureSession(req);
  ids.forEach((id) => {
    req.session.unlocked[id] = true;
  });
}

function markSolved(req, id) {
  ensureSession(req);
  req.session.solved[id] = true;
  if (id === 17) req.session.flags.finalgate = true;
  unlockStages(req, stageConfig[id]?.unlocks || []);
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

function shouldRevealPulse(req) {
  const now = Date.now();
  const windowMs = 5 * 60 * 1000;
  req.session.pulses = (req.session.pulses || []).filter(
    (t) => now - t < windowMs
  );
  req.session.pulses.push(now);

  const pulses = [...req.session.pulses].sort((a, b) => a - b);
  let count = 1;
  for (let i = 1; i < pulses.length; i++) {
    if (pulses[i] - pulses[i - 1] >= 10000) {
      count += 1;
    }
  }
  return count >= 3;
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
      <div class="tag">STAGE ${stage}</div>
    </header>
    <section class="panel">
      <h2>${title}</h2>
      ${body}
      <form class="answer" method="POST" action="/verify/${stage}">
        <input name="answer" type="text" autocomplete="off" required />
        <button type="submit">submit</button>
      </form>
      ${error ? `<div class="error">${error}</div>` : ""}
    </section>
  </main>
</body>
</html>`;
}

app.get("/", (req, res) => {
  ensureSession(req);
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
    <section class="panel">
      <h2>NO ENTRY POINT</h2>
      <p class="dim">the system is awake</p>
      <!-- /stage/1 -->
    </section>
  </main>
</body>
</html>`);
});

app.get("/stage/:id", (req, res) => {
  ensureSession(req);
  const id = Number(req.params.id);
  const stage = stages[id];

  if (!stage || !canAccessStage(req, id)) {
    return res.status(404).send("not found");
  }

  const body = typeof stage.body === "function" ? stage.body(req) : stage.body;
  const error = req.query.err ? "access denied" : "";
  res.send(renderShell({ title: stage.title, stage: id, body, error }));
});

app.post("/verify/:id", (req, res) => {
  ensureSession(req);
  const id = Number(req.params.id);
  if (!stages[id] || !canAccessStage(req, id)) {
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

  markSolved(req, id);

  if (id === 20) {
    req.session.flags.final = true;
    return res.redirect("/final");
  }

  const next = stageConfig[id]?.unlocks?.[0];
  if (next) {
    return res.redirect(`/stage/${next}`);
  }

  res.redirect(`/stage/${id}`);
});

app.post("/auth", (req, res) => {
  const error = "ERR::ZmVycnVt::AUTH_DENIED";
  res.json({ ok: false, error });
});

app.get("/signal", (req, res) => {
  res.type("text/plain");
  res.send("noise::cmVk c2hp ZnQ=::drop:/node/echo\nnoise::ZG9uJ3QgdHJ1c3QgdGhpcyBsaW5l");
});

app.get("/archive", (req, res) => {
  ensureSession(req);
  req.session.flags.archive = true;
  unlockStages(req, [13]);
  res.redirect("/stage/13");
});

app.get("/log/1996", (req, res) => {
  ensureSession(req);
  req.session.flags.log1996 = true;
  unlockStages(req, [14]);
  res.redirect("/stage/14");
});

app.get("/system/null", (req, res) => {
  ensureSession(req);
  req.session.flags.sysnull = true;
  unlockStages(req, [15]);
  res.redirect("/stage/15");
});

app.get("/node/echo", (req, res) => {
  ensureSession(req);
  req.session.flags.nodeecho = true;
  unlockStages(req, [16]);
  res.redirect("/stage/16");
});

app.get("/dead/drop", (req, res) => {
  ensureSession(req);
  req.session.flags.deaddrop = true;
  unlockStages(req, [17]);
  res.redirect("/stage/17");
});

app.get("/sector/7", (req, res) => {
  ensureSession(req);
  req.session.flags.sector7 = true;
  unlockStages(req, [18]);
  res.redirect("/stage/18");
});

app.get("/vault", (req, res) => {
  ensureSession(req);
  req.session.flags.vault = true;
  unlockStages(req, [19]);
  res.redirect("/stage/19");
});

app.get("/final", (req, res) => {
  ensureSession(req);
  if (!req.session.flags.final) {
    return res.status(403).send("denied");
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
