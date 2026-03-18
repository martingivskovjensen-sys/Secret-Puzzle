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
  1: ["shadow"],
  2: ["decode"],
  3: ["signal"],
  4: ["rotate"],
  5: ["mirror"],
  6: ["binary"],
  7: ["ghost"],
  8: ["obfuscate"],
  9: ["lumen"],
  10: ["thunder"],
  11: ["whisper"],
  12: ["glitch"],
  13: ["portal"],
  14: ["34"],
  15: ["labyrinth"],
  16: ["robot"],
  17: ["copenhagen", "kobenhavn"],
  18: ["shadowghostwhisperportal"],
};

const hints = {
  1: "Right-click, inspect, and read what the page refuses to show.",
  2: "It is not random. Decode the string in a common web-safe alphabet.",
  3: "Dots and dashes. Translate carefully.",
  4: "Classic Caesar shift. Try a small positive rotation.",
  5: "You already have the key. Substitute each letter using the mapping.",
  6: "Each 8-bit group is a letter.",
  7: "The answer is on the page, just nearly invisible.",
  8: "Open the source or console. Numbers can still speak.",
  9: "Download the image and open it as text.",
  10: "The audio is corrupted. The answer is hidden in the source.",
  11: "The file hides a word in a pattern.",
  12: "The error is fake. The clue is not.",
  13: "The URL itself is part of the lock.",
  14: "A famous sequence of sums.",
  15: "Two layers: decode base64, then undo a Caesar shift.",
  16: "Use the first letters of earlier answers and add the middle of stage 2.",
  17: "Decode to coordinates, then find the nearest city.",
  18: "Concatenate answers from stages 1, 7, 11, and 13 with no spaces.",
};

const stages = {
  1: {
    title: "Stage 1: The Quiet Wall",
    body: `
      <p>There is a word hidden in plain sight, but the page refuses to speak it aloud.</p>
      <!-- The first key hides in the shadow -->
      <p class="subtle">Some secrets are only visible when you look beneath the surface.</p>
    `,
  },
  2: {
    title: "Stage 2: The Ghost Alphabet",
    body: `
      <p>Decode this signal:</p>
      <div class="code">ZGVjb2Rl</div>
      <p class="subtle">It travels safely through systems that dislike symbols.</p>
    `,
  },
  3: {
    title: "Stage 3: The Old Clicking Tongue",
    body: `
      <p>Translate the Morse:</p>
      <div class="code">... .. --. -. .- .-..</div>
      <p class="subtle">The rhythm matters more than the noise.</p>
    `,
  },
  4: {
    title: "Stage 4: The Caesar Turn",
    body: `
      <p>Apply a shift of +3 to reveal the word:</p>
      <div class="code">urwdwh</div>
      <p class="subtle">An emperor loved this trick.</p>
    `,
  },
  5: {
    title: "Stage 5: The Mirror Cipher",
    body: `
      <p>Use the substitution key to decode the ciphertext.</p>
      <div class="code">Plain: ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
      <div class="code">Key:   QWERTYUIOPASDFGHJKLZXCVBNM</div>
      <div class="code">Cipher: DOKKGK</div>
      <p class="subtle">Red herring: the word "keyboard" is not the answer.</p>
    `,
  },
  6: {
    title: "Stage 6: The Machine Whisper",
    body: `
      <p>Binary is patient. Read each byte:</p>
      <div class="code">01100010 01101001 01101110 01100001 01110010 01111001</div>
      <p class="subtle">Eight bits at a time.</p>
    `,
  },
  7: {
    title: "Stage 7: The Thin Ink",
    body: `
      <p>There is a word hidden in the fog.</p>
      <p class="ghost">ghost</p>
      <p class="subtle">Sometimes the answer is visible only at the right angle.</p>
    `,
  },
  8: {
    title: "Stage 8: The Obfuscator",
    body: `
      <p>The answer is assembled, but never displayed.</p>
      <p class="subtle">Look at the source.</p>
      <script>
        // Obfuscated string: 111,98,102,117,115,99,97,116,101
        const _x = [111, 98, 102, 117, 115, 99, 97, 116, 101];
        void _x;
      </script>
    `,
  },
  9: {
    title: "Stage 9: The Veiled Image",
    body: `
      <p>Download the image and inspect it. The clue is sewn inside.</p>
      <img src="/assets/veil.svg" alt="Veil" class="veil" />
      <p class="subtle">Red herring: the filename is not the answer.</p>
    `,
  },
  10: {
    title: "Stage 10: The Corrupted Track",
    body: `
      <p>The audio file is corrupted. The truth is still here.</p>
      <button class="btn" onclick="fakeAudio()">Play Corrupted Audio</button>
      <!-- answer: thunder -->
      <p class="subtle">The source remembers what the speakers forget.</p>
    `,
  },
  11: {
    title: "Stage 11: The Courier",
    body: `
      <p>Download the file and read the pattern:</p>
      <a class="btn" href="/assets/packet.txt" download>Download packet.txt</a>
      <p class="subtle">The first letters of each line matter.</p>
    `,
  },
  12: {
    title: "Stage 12: The Broken Screen",
    body: `
      <div class="error-box">
        <h2>500 - Internal Server Error</h2>
        <p>Something went wrong. Please contact the administrator.</p>
        <pre>
Error: GhostReferenceException
    at /core/mind.js:66:13
    at /core/trace.js:101:9
    at /core/shadow.js:42:5
        </pre>
      </div>
      <!-- The real clue is glitch -->
      <p class="subtle">Not all errors are accidents.</p>
    `,
  },
  13: {
    title: "Stage 13: The Lock in the URL",
    body: `
      <p>The lock only opens if you provide the correct key in the URL.</p>
      <p class="subtle">Try adding <code>?key=open</code> to the address bar.</p>
      ${"REPLACE_WITH_QUERY"}
    `,
  },
  14: {
    title: "Stage 14: The Sequence",
    body: `
      <p>Find the next number:</p>
      <div class="code">1, 1, 2, 3, 5, 8, 13, 21, ?</div>
      <p class="subtle">Each term is the sum of the two before it.</p>
    `,
  },
  15: {
    title: "Stage 15: The Double Lock",
    body: `
      <p>Decode base64, then undo a Caesar shift of +3 to find the word.</p>
      <div class="code">b2RlYnVscXdr</div>
      <p class="subtle">Two layers, one truth.</p>
    `,
  },
  16: {
    title: "Stage 16: The Meta Key",
    body: `
      <p>Take the first letters of answers from stages 4, 6, 8, and 10.</p>
      <p>Insert the middle letter from stage 2 between the first and second letters.</p>
      <p class="subtle">What word appears?</p>
    `,
  },
  17: {
    title: "Stage 17: The Coordinates",
    body: `
      <p>Decode the string to find coordinates, then locate the nearest city.</p>
      <div class="code">NTUuNjc2MSwxMi41Njgz</div>
      <p class="subtle">Enter the city name.</p>
    `,
  },
  18: {
    title: "Stage 18: The Final Gate",
    body: `
      <p>Combine the answers from stages 1, 7, 11, and 13 in order.</p>
      <p>Concatenate them with no spaces or punctuation.</p>
      <p class="subtle">This is the last lock.</p>
    `,
  },
};

function normalizeAnswer(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .trim();
}

function ensureSession(req) {
  if (!req.session.maxStage) {
    req.session.maxStage = 1;
  }
}

function renderPage({ title, stage, body, error }) {
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
  <div class="scanlines"></div>
  <main class="container">
    <header>
      <h1>Secret Puzzle Hunt</h1>
      <div class="stage-tag">Stage ${stage} / 18</div>
    </header>
    <section class="panel">
      <h2>${title}</h2>
      ${body}
      <form class="answer" method="POST" action="/verify/${stage}">
        <label for="answer">Answer</label>
        <input id="answer" name="answer" type="text" autocomplete="off" required />
        <button class="btn" type="submit">Submit</button>
      </form>
      ${error ? `<div class="error">${error}</div>` : ""}
      <div class="hint-link">
        <a href="/hint/${stage}">Need a hint?</a>
      </div>
    </section>
  </main>
</body>
</html>`;
}

app.get("/", (req, res) => {
  ensureSession(req);
  res.redirect(`/stage/${req.session.maxStage}`);
});

app.get("/start", (req, res) => {
  req.session.maxStage = 1;
  req.session.completed = false;
  res.redirect("/stage/1");
});

app.get("/stage/:id", (req, res) => {
  ensureSession(req);
  const id = Number(req.params.id);

  if (!stages[id]) {
    return res.status(404).send("Not found");
  }

  if (id > req.session.maxStage) {
    return res.redirect(`/stage/${req.session.maxStage}`);
  }

  const stageData = stages[id];
  let body = stageData.body;

  if (id === 13) {
    const key = normalizeAnswer(req.query.key);
    const reveal = key === "open" ? `<div class="code reveal">portal</div>` : "";
    body = stageData.body.replace("REPLACE_WITH_QUERY", reveal);
  }

  const error = req.query.err ? "That answer slips away." : "";
  res.send(renderPage({ title: stageData.title, stage: id, body, error }));
});

app.post("/verify/:id", (req, res) => {
  ensureSession(req);
  const id = Number(req.params.id);
  const input = normalizeAnswer(req.body.answer);

  if (!stages[id]) {
    return res.status(404).send("Not found");
  }

  const validAnswers = answers[id] || [];
  const isCorrect = validAnswers.some((ans) => normalizeAnswer(ans) === input);

  if (!isCorrect) {
    return res.redirect(`/stage/${id}?err=1`);
  }

  if (id === 18) {
    req.session.completed = true;
    req.session.maxStage = 18;
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
    return res.status(404).send("No hint available.");
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
  <div class="scanlines"></div>
  <main class="container">
    <section class="panel">
      <h2>Hint for Stage ${id}</h2>
      <p>${hints[id]}</p>
      <a class="btn" href="/stage/${id}">Back to stage</a>
    </section>
  </main>
</body>
</html>`);
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
  <title>Secret Unlocked</title>
  <link rel="stylesheet" href="/style.css" />
  <script defer src="/app.js"></script>
</head>
<body>
  <div class="scanlines"></div>
  <main class="container">
    <section class="panel final">
      <h2>Access Granted</h2>
      <p class="final-message">You solved it. The hunt ends, but the network remembers.</p>
      <div class="reward">WELCOME TO THE INNER CIRCLE</div>
      <a class="btn" href="/start">Play again</a>
    </section>
  </main>
</body>
</html>`);
});

app.listen(PORT, () => {
  console.log(`Secret Puzzle Hunt running on port ${PORT}`);
});









