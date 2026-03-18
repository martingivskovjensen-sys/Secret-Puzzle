# Puzzle Breakdown (Operator)

## Stage 1: Cold Start
User sees: A boot log with nine lines.
Hidden layers: HTML comments include a red-herring route (`/archive-old`). The first letters of the log lines form an acrostic.
Solve: Take the first letters of each log line to spell the answer.
Answer: `coldstart`.
Dependencies: None. Unlocks Stage 2.

## Stage 2: Palimpsest
User sees: A visible base64 string in a bordered layer.
Hidden layers: Two near-invisible layers. One contains the true base64 string, one is a decoy message.
Solve: Decode the hidden base64 to get `whsptwzlza`, then Caesar-shift -7 to get the answer.
Answer: `palimpsest`.
Dependencies: Stage 1. Unlocks Stage 3 and Stage 4.

## Stage 3: Quartz Lock
User sees: Ciphertext `chedhr` with a warning line.
Hidden layers: None.
Solve: Decrypt with Vigenere using the key from Stage 7 (`mnemosyne`).
Answer: `quartz`.
Dependencies: Stage 2 for access, Stage 7 for key. Unlocks Stage 6.

## Stage 4: Mosaic
User sees: Base64 string `anlmcWp4eGp5`.
Hidden layers: HTML comments with coordinate fragment `N50` and hidden route `/log/1996`. Anchor marker in comment.
Solve: Base64 decode → reverse → Caesar shift -5 to get the answer.
Answer: `tesselate`.
Dependencies: Stage 2. Unlocks Stage 5.

## Stage 5: The Login That Lies
User sees: A fake login form that always fails.
Hidden layers: The error message contains base64 of the answer (`ZmVycnVt`).
Solve: Submit the login, decode the base64 from the error string.
Answer: `ferrum`.
Dependencies: Stage 4. Unlocks Stage 7 and Stage 8.

## Stage 6: White Noise
User sees: Download link to `trace.log`.
Hidden layers: Trailing whitespace encodes binary. File also includes `/archive` as base64 checksum and a red-herring `/archive-old` line.
Solve: Interpret trailing spaces as 1 and tabs as 0 to decode `sinew`.
Answer: `sinew`.
Dependencies: Stage 3. Unlocks Stage 9.

## Stage 7: Mnemonic
User sees: A list of seven phrases.
Hidden layers: If Stage 5 is solved, a hidden HTML comment reveals the Vigenere key.
Solve: First letters of the phrases spell `MNEMOSYNE`.
Answer: `mnemosyne`.
Dependencies: Stage 5. Unlocks Stage 10 and resolves Stage 3.

## Stage 8: Parallax
User sees: A dead signal message.
Hidden layers: If the player visits the page at least three times with 10-second gaps within 5 minutes, a hidden comment reveals `parallax` and a coordinate fragment `.0755`.
Solve: Repeated timed visits reveal the answer in a comment.
Answer: `parallax`.
Dependencies: Stage 5. Unlocks Stage 11.

## Stage 9: Ivory Hex
User sees: A message about a script and an obfuscated script block.
Hidden layers: Obfuscated JS holds a base64 string for the answer.
Solve: Deobfuscate and decode the script to extract `ivoryhex`.
Answer: `ivoryhex`.
Dependencies: Stage 6. Unlocks Stage 12.

## Stage 10: Net Fracture
User sees: A page claiming the connection is unstable.
Hidden layers: A silent network request to `/signal` returns base64 fragments and the hidden route `/node/echo`.
Solve: Inspect the network response, decode `cmVk c2hp ZnQ=` → `redshift`.
Answer: `redshift`.
Dependencies: Stage 7. Reveals `/node/echo`.

## Stage 11: Gate
User sees: A gate message.
Hidden layers: With `?gate=palimpsest`, the answer appears and `/system/null` is revealed in a comment.
Solve: Provide the correct gate parameter to expose the answer.
Answer: `axiom`.
Dependencies: Stage 8, Stage 2 for the gate value.

## Stage 12: Lattice
User sees: Download link to `ghost.bmp`.
Hidden layers: LSB steganography encodes `lattice`. A comment contains coordinate fragment `E14`.
Solve: Extract LSB data from the BMP to get the answer.
Answer: `lattice`.
Dependencies: Stage 9. Provides coordinate fragment.

## Stage 13: Archive (hidden: /archive)
User sees: Download link to corrupted `cache.zip`.
Hidden layers: Zip contains `cargo.txt` with base64 for `corsair` and a decoy line. Comment reveals `/sector/7`.
Solve: Repair or recover the zip, decode the base64 from the file.
Answer: `corsair`.
Dependencies: Hidden route `/archive`. Unlocks Stage 18 and provides an anchor.

## Stage 14: Log 1996 (hidden: /log/1996)
User sees: Download link to `ledger.pdf`.
Hidden layers: PDF metadata includes Title `KEPLER`. Comment reveals `/vault`.
Solve: Inspect PDF metadata to get the answer.
Answer: `kepler`.
Dependencies: Hidden route `/log/1996`.

## Stage 15: Null System (hidden: /system/null)
User sees: Base64 string `emxscm9yem9tZQ==`.
Hidden layers: Comment includes coordinate fragment `E4378` and `/dead/drop`.
Solve: Base64 decode → reverse → Vigenere decrypt with key from Stage 9 (`ivoryhex`) to get the answer.
Answer: `wraithnode`.
Dependencies: Hidden route `/system/null`, Stage 9 for key. Provides coordinate fragment.

## Stage 16: Echo (hidden: /node/echo)
User sees: An audio file player.
Hidden layers: The audio is reversed Morse for `abyssal`.
Solve: Reverse the audio, decode Morse to get the answer.
Answer: `abyssal`.
Dependencies: Hidden route `/node/echo`. Unlocks Stage 19.

## Stage 17: Coordinates (hidden: /dead/drop)
User sees: A short instruction to assemble north/east.
Hidden layers: Coordinates are split across Stage 4 (`N50`), Stage 8 (`.0755`), Stage 12 (`E14`), Stage 15 (`4378`).
Solve: Assemble coordinates `N50.0755 E14.4378`, locate the city.
Answer: `prague`.
Dependencies: Hidden route `/dead/drop` and fragments from Stages 4, 8, 12, 15. Unlocks Stage 20.

## Stage 18: Sector 7 (hidden: /sector/7)
User sees: Base64 string `GkwXQQU=`.
Hidden layers: None.
Solve: Base64 decode, then XOR with key from Stage 3 (`quartz`) to get `k9v3q`.
Answer: `k9v3q`.
Dependencies: Hidden route `/sector/7`, Stage 3 for key.

## Stage 19: Vault (hidden: /vault)
User sees: Base64 string `Z2Zxa2F2ZmY=`.
Hidden layers: None.
Solve: Base64 decode → reverse → Vigenere decrypt using key `redshiftabyssal` (Stage 10 + Stage 16).
Answer: `obsidian`.
Dependencies: Hidden route `/vault`, Stage 10 and Stage 16 for key.

## Stage 20: Final Gate (hidden)
User sees: A short instruction: “five anchors. length orders. first letters. reverse.”
Hidden layers: Anchors are marked via HTML comments in Stages 1, 4, 7, 13, 17.
Solve: Order anchor answers by length (ties by stage order), take first letters, then reverse.
Answer: `mtccp`.
Dependencies: Stage 17 (unlocks), anchors from Stages 1, 4, 7, 13, 17.
