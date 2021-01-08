// ( ͡° ͜ʖ ͡°)  (͡o‿O͡)  ( ͡^ ͜ʖ ͡^)  乁(✿ ͡° ͜ʖ ͡°)و   ヽ(͡◕ ͜ʖ ͡◕)ﾉ   ( ཀ ʖ̯ ཀ)  ( ͡°Ĺ̯ ͡° )  (つ ͡ꈍ ͜ʖ̫ ͡ꈍ )つ
// Note the lenny faces render weirdly in vscode with fira code, and other monospace fonts
// This site is useful: https://www.lennyfaces.net/

export interface LennyOptions {
  facing: "left" | "right";
  looking: "left" | "straight" | "right";
  emotion: "happy" | "suprise" | "angery"; // This probably best maps to eyebrow position. Maybe refactor later to seperate eyebrow position from mouth changes
  mouth: "open" | "closed";
}

export const DEFAULT_LENNY: LennyOptions = {
  facing: "right",
  looking: "right",
  emotion: "happy",
  mouth: "closed"
};

export default function renderLenny(
  options?: Partial<LennyOptions>
): string {

  const { facing, looking, emotion, mouth: mouthState } = { ...DEFAULT_LENNY, ...options };

  let nose = facing === "right" ? "\u0296" : "L";
  // let eye = looking === "right" ? " ͡° " : " ͡ °";

  let eye, eyebrow, mouth;

  switch (emotion) {
    case "happy":
      eyebrow = "\u0361";
      mouth = "\u035C"
      break;
    case "suprise":
      eyebrow = "\u0300";
      mouth = "\u0330"
      break;
    case "angery":
      eyebrow = "\u035E";
      mouth = "\u032F"
      break;
  }

  if (mouthState === "open") {
    mouth = "o";
    nose = "";
  }

  switch (looking) {
    case "right": eye = ` ${eyebrow} °`; break;
    case "straight": eye = ` ${eyebrow}° `; break;
    case "left": eye = `°${eyebrow}  `; break;
  }

  return `(${eye}${mouth}${nose} ${eye})`;
}
