# Puzzle Breakdown (Medium Linear Version)

All stages are sequential (1 → 20). No cross-stage dependencies are required.

## Stage 1: Cold Start
Solve: Take the first letters of the boot log lines.
Answer: `coldstart`.

## Stage 2: Palimpsest
Solve: Use the faint base64 string. Decode → `whsptwzlza`, then Caesar -7.
Answer: `palimpsest`.

## Stage 3: Quartz Lock
Solve: Vigenere-decrypt `chedhr` with the key shown (`mnemosyne`).
Answer: `quartz`.

## Stage 4: Mosaic
Solve: Base64 decode → reverse → Caesar -5.
Answer: `tesselate`.

## Stage 5: The Login That Lies
Solve: Submit fake login, decode base64 in error.
Answer: `ferrum`.

## Stage 6: White Noise
Solve: Trailing whitespace binary (space=1, tab=0).
Answer: `sinew`.

## Stage 7: Mnemonic
Solve: Initials of phrases.
Answer: `mnemosyne`.

## Stage 8: Parallax
Solve: Find the nearly invisible word on the page.
Answer: `parallax`.

## Stage 9: Ivory Hex
Solve: Decode the correct base64 string.
Answer: `ivoryhex`.

## Stage 10: Net Fracture
Solve: Visit `/signal` and decode the base64 fragment.
Answer: `redshift`.

## Stage 11: Gate
Solve: Add `?gate=open` to the URL.
Answer: `axiom`.

## Stage 12: Lattice
Solve: Decode base64 in `lattice.txt`.
Answer: `lattice`.

## Stage 13: Archive
Solve: Open `cache.zip`, decode base64 in `cargo.txt`.
Answer: `corsair`.

## Stage 14: Log 1996
Solve: Inspect PDF metadata.
Answer: `kepler`.

## Stage 15: Null System
Solve: Base64 → reverse → Vigenere with key shown (`ivoryhex`).
Answer: `wraithnode`.

## Stage 16: Echo
Solve: Decode the Morse string shown on the page.
Answer: `abyssal`.

## Stage 17: Coordinates
Solve: Combine N and E fragments on the page; identify the city.
Answer: `prague`.

## Stage 18: Sector 7
Solve: Base64 → XOR with key shown (`quartz`).
Answer: `k9v3q`.

## Stage 19: Vault
Solve: Base64 → reverse → Vigenere with key shown (`redshiftabyssal`).
Answer: `obsidian`.

## Stage 20: Final Gate
Solve: Order the five words by length, take first letters, reverse.
Answer: `mtccp`.
