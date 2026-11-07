"use strict";

const SAVE_KEY = "noobish-shapefighters-war-save-v1";
const levelCap = 5;
const shapeNames = ["circle", "square", "triangle", "star"];
const factionNames = { light: "Light", void: "Void" };
const abilityData = {
  light: [
    { name: "Dawnstrike", level: 1, power: 26, description: "A fast, focused blade of light." },
    { name: "Sunflare", level: 2, power: 36, description: "A burst of scorching radiance." },
    { name: "Radiant Nova", level: 3, power: 43, heal: 12, description: "Blast your foe. Restore 12 HP." },
    { name: "Phoenix Guard", level: 4, power: 45, heal: 20, description: "Strike and recover 20 HP." },
    { name: "Celestial Break", level: 5, power: 62, description: "Unleash the full force of the dawn." }
  ],
  void: [
    { name: "Umbral Bolt", level: 1, power: 26, description: "A quick shot of starless energy." },
    { name: "Nightfall", level: 2, power: 36, description: "Smother your foe in living shadow." },
    { name: "Void Rend", level: 3, power: 43, heal: 12, description: "Tear through your foe. Drain 12 HP." },
    { name: "Eclipse Veil", level: 4, power: 45, heal: 20, description: "Strike from the dark. Drain 20 HP." },
    { name: "Oblivion", level: 5, power: 62, description: "Let the endless dark consume everything." }
  ]
};
const enemies = {
  light: [
    { name: "Void Scout", shape: "triangle", hp: 72, power: 13 },
    { name: "Rift Warden", shape: "square", hp: 100, power: 17 },
    { name: "Void Master", shape: "star", hp: 132, power: 21 }
  ],
  void: [
    { name: "Dawn Sentinel", shape: "circle", hp: 72, power: 13 },
    { name: "Sunblade Knight", shape: "triangle", hp: 100, power: 17 },
    { name: "Ascended Light", shape: "star", hp: 132, power: 21 }
  ]
};
const dummyData = {
  straw: { name: "Practice Dummy", label: "TRAINING TARGET", description: "A simple target for steady progress.", xp: 12 },
  stone: { name: "Stone Golem", label: "HEAVY TARGET", description: "A sturdy opponent. Strong hits earn more.", xp: 20 },
  rift: { name: "Rift Echo", label: "RIFT TARGET", description: "A dangerous drill. High risk, high reward.", xp: 28 }
};
const openingScenes = [
  "At the edge of the last dawn, the Ascended Light stepped forward to face the one who had swallowed the stars.",
  "The Void Master answered with a wave of living night. Light and shadow collided—and the old world broke between them.",
  "Their battle vanished into legend. Now the rifts are opening again. Before the final war, you must choose who you will become."
];

const notice = document.getElementById("notice");
const freshState = () => ({
  introSeen: false,
  faction: null,
  level: 1,
  xp: 0,
  dummy: "straw",
  warAccess: false,
  warStarted: false,
  warComplete: false,
  warFailed: false,
  warWave: 0,
  warHp: 0,
  warEnemyHp: 0,
  warTurn: "player"
});

function loadState() {
  let saved;
  try {
    saved = localStorage.getItem(SAVE_KEY);
  } catch (error) {
    showNotice(`Your campaign could not be read from this browser: ${error.message}`);
    return freshState();
  }
  if (saved === null) return freshState();
  try {
    const parsed = JSON.parse(saved);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new SyntaxError("Invalid save data");
    const fresh = freshState();
    const faction = ["light", "void"].includes(parsed.faction) ? parsed.faction : null;
    const warStarted = Boolean(parsed.warStarted);
    const warComplete = Boolean(parsed.warComplete);
    return {
      ...fresh,
      introSeen: Boolean(parsed.introSeen),
      faction,
      level: Number.isInteger(parsed.level) ? Math.max(1, Math.min(levelCap, parsed.level)) : 1,
      xp: Number.isInteger(parsed.xp) ? Math.max(0, Math.min(100000, parsed.xp)) : 0,
      dummy: Object.hasOwn(dummyData, parsed.dummy) ? parsed.dummy : fresh.dummy,
      warAccess: Boolean(parsed.warAccess) || warStarted || warComplete,
      warStarted: warStarted && !warComplete,
      warComplete,
      warFailed: Boolean(parsed.warFailed) && !warStarted && !warComplete,
      warWave: Number.isInteger(parsed.warWave) ? Math.max(0, Math.min(2, parsed.warWave)) : 0,
      warHp: Number.isInteger(parsed.warHp) ? Math.max(0, parsed.warHp) : 0,
      warEnemyHp: Number.isInteger(parsed.warEnemyHp) ? Math.max(0, parsed.warEnemyHp) : 0,
      warTurn: parsed.warTurn === "enemy" ? "enemy" : "player"
    };
  } catch (error) {
    if (error instanceof SyntaxError) {
      showNotice("Your campaign save could not be read. A new campaign has started.");
      return freshState();
    }
    throw error;
  }
}

let state = loadState();
let openingScene = 0;
let enemyTurnTimer = null;
let noticeTimer = null;

function showNotice(message) {
  notice.textContent = message;
  notice.hidden = false;
  window.clearTimeout(noticeTimer);
  noticeTimer = window.setTimeout(() => { notice.hidden = true; }, 6000);
}

function saveState() {
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(state));
    notice.hidden = true;
  } catch (error) {
    showNotice(`Your campaign could not be saved in this browser: ${error.message}`);
  }
}

function xpForNextLevel(level = state.level) {
  return level * 60;
}

function awardExperience(amount) {
  if (state.level >= levelCap) return [];
  state.xp += amount;
  const unlocked = [];
  while (state.level < levelCap && state.xp >= xpForNextLevel()) {
    state.xp -= xpForNextLevel();
    state.level += 1;
    unlocked.push(state.level);
  }
  if (state.level >= levelCap) state.xp = 0;
  return unlocked;
}

function unlockedAbilities(faction = state.faction) {
  return faction ? abilityData[faction].filter(ability => ability.level <= state.level) : [];
}

function showScreen(name) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.hidden = screen.id !== `screen-${name}`;
  });
  document.getElementById("app").dataset.faction = state.faction ?? "none";
}

function renderHeader() {
  const factionBadge = document.getElementById("faction-badge");
  const levelBadge = document.getElementById("level-badge");
  factionBadge.hidden = !state.faction;
  factionBadge.textContent = state.faction ? `${factionNames[state.faction]} SIDE` : "";
  levelBadge.hidden = !state.faction;
  levelBadge.textContent = `LEVEL ${state.level}`;
}

function renderHub() {
  if (!state.faction) return;
  const name = factionNames[state.faction];
  document.getElementById("hub-eyebrow").textContent = `YOUR FACTION / ${state.faction === "light" ? "THE DAWNBORN" : "THE UNBOUND"}`;
  document.getElementById("hub-title").innerHTML = state.faction === "light"
    ? "The calm<br><span>before the storm.</span>"
    : "The hush<br><span>before the storm.</span>";
  document.getElementById("hub-copy").textContent = state.faction === "light"
    ? "The Dawnborn are counting on you. Every battle begins with the fighter you become here."
    : "The Unbound are counting on you. Every battle begins with the fighter you become here.";
  document.getElementById("fighter-level").textContent = `Level ${state.level} fighter`;
  document.getElementById("training-level").textContent = `LEVEL ${state.level}`;
  const needed = xpForNextLevel();
  const progress = state.level >= levelCap ? 100 : Math.min(100, state.xp / needed * 100);
  document.getElementById("xp-label").textContent = state.level >= levelCap ? "MAX LEVEL" : `${state.xp} / ${needed} XP`;
  document.getElementById("xp-bar").style.width = `${progress}%`;
  const progressBar = document.getElementById("xp-progress");
  progressBar.setAttribute("aria-valuemax", String(state.level >= levelCap ? 100 : needed));
  progressBar.setAttribute("aria-valuenow", String(state.level >= levelCap ? 100 : state.xp));
  const abilities = document.getElementById("hub-abilities");
  abilities.replaceChildren(...abilityData[state.faction].map(ability => {
    const row = document.createElement("div");
    row.className = `ability-row${ability.level <= state.level ? " unlocked" : " locked"}`;
    const icon = document.createElement("span");
    icon.className = "ability-symbol";
    icon.textContent = ability.level <= state.level ? (state.faction === "light" ? "✧" : "◈") : "·";
    const copy = document.createElement("span");
    const title = document.createElement("strong");
    title.textContent = ability.name;
    const description = document.createElement("small");
    description.textContent = ability.level <= state.level ? ability.description : `Unlocks at level ${ability.level}`;
    copy.append(title, description);
    const rank = document.createElement("span");
    rank.className = "ability-rank";
    rank.textContent = ability.level <= state.level ? "READY" : `LVL ${ability.level}`;
    row.append(icon, copy, rank);
    return row;
  }));
  const warTitle = document.getElementById("war-action-title");
  const warCopy = document.getElementById("war-action-copy");
  const warButton = document.getElementById("open-war");
  warButton.disabled = state.level < 3 && !state.warAccess && !state.warComplete;
  if (state.warComplete) {
    warTitle.textContent = "The war is over";
    warCopy.textContent = "You changed the fate of the world.";
  } else if (state.warFailed) {
    warTitle.textContent = "Return to the front";
    warCopy.textContent = "You can train more, or take another stand.";
  } else if (state.level >= 3 || state.warAccess) {
    warTitle.textContent = "Enter the final war";
    warCopy.textContent = state.warAccess ? "The front line is waiting. There is no retreat." : "You are strong enough. The front line is waiting.";
  } else {
    warTitle.textContent = "Prepare for war";
    warCopy.textContent = `Reach level 3 to answer the call · level ${3 - state.level} more to go.`;
  }
  document.getElementById("war-faction-name").textContent = name.toUpperCase();
}

function renderTraining() {
  const dummy = dummyData[state.dummy];
  const stage = document.getElementById("dummy-stage");
  stage.dataset.faction = state.faction ?? "light";
  stage.dataset.dummy = state.dummy;
  document.getElementById("dummy-name").textContent = dummy.name;
  document.getElementById("dummy-type-label").textContent = dummy.label;
  document.getElementById("dummy-description").textContent = dummy.description;
  document.querySelectorAll(".dummy-option").forEach(button => {
    const selected = button.dataset.dummy === state.dummy;
    button.classList.toggle("selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  document.getElementById("train-hit").disabled = state.level >= levelCap;
  if (state.level >= levelCap) {
    document.getElementById("training-feedback").textContent = "You have mastered every ability. The final war is waiting.";
  }
}

function currentEnemy() {
  return enemies[state.faction][state.warWave];
}

function renderCombatAbilities() {
  const container = document.getElementById("combat-abilities");
  container.replaceChildren(...unlockedAbilities().map((ability, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "combat-ability";
    button.disabled = state.warTurn !== "player" || !state.warStarted;
    const name = document.createElement("strong");
    name.textContent = ability.name;
    const detail = document.createElement("small");
    detail.textContent = ability.heal ? `${ability.power} PWR · +${ability.heal} HP` : `${ability.power} POWER`;
    button.append(name, detail);
    button.addEventListener("click", () => playerAttack(index));
    return button;
  }));
}

function renderWar() {
  if (!state.faction) return;
  const isLight = state.faction === "light";
  const active = state.warStarted && !state.warComplete;
  const maxHp = 100 + state.level * 15;
  const enemy = currentEnemy();
  const playerName = isLight ? "Dawnborn Fighter" : "Unbound Fighter";
  document.getElementById("player-tag").textContent = isLight ? "THE DAWNBORN" : "THE UNBOUND";
  document.getElementById("player-combat-name").textContent = playerName;
  document.getElementById("player-health-label").textContent = `${Math.max(0, active ? state.warHp : maxHp)} / ${maxHp} HP`;
  document.getElementById("player-health-bar").style.width = `${Math.max(0, Math.min(100, (active ? state.warHp : maxHp) / maxHp * 100))}%`;
  document.getElementById("enemy-name").textContent = enemy.name;
  document.getElementById("enemy-health-label").textContent = `${Math.max(0, active ? state.warEnemyHp : enemy.hp)} / ${enemy.hp} HP`;
  document.getElementById("enemy-health-bar").style.width = `${Math.max(0, Math.min(100, (active ? state.warEnemyHp : enemy.hp) / enemy.hp * 100))}%`;
  document.getElementById("war-step").textContent = state.warComplete ? "CAMPAIGN COMPLETE" : `BATTLE ${state.warWave + 1} / 3`;
  document.getElementById("war-eyebrow").textContent = isLight ? "THE VOID LEGION IS HERE" : "THE DAWNBORN HAVE ARRIVED";
  document.getElementById("war-title").innerHTML = state.warComplete ? "A new<br><span>beginning.</span>" : "No turning<br><span>back now.</span>";
  document.getElementById("war-copy").textContent = state.warComplete
    ? (isLight ? "The Void Master has fallen. Light returns to the world." : "The Ascended Light has fallen. The void remakes the world.")
    : active ? "You answered the call. Stand your ground." : "When you enter the war, the only way forward is to fight.";
  document.getElementById("combat-arena").dataset.faction = state.faction;
  document.getElementById("player-emblem").dataset.shape = isLight ? "star" : "square";
  document.getElementById("enemy-emblem").dataset.shape = enemy.shape;
  document.getElementById("war-log").textContent = state.warComplete
    ? (isLight ? "The Void Master was defeated. The Dawnborn victory will be remembered." : "The Ascended Light was defeated. The Unbound have claimed the future.")
    : state.warFailed ? "You were driven from the front. Train, then choose when to return."
      : state.warAccess && !active ? "Your forces are waiting. Once you enter, you must fight through to the end." : "Every ability you unlock will matter here.";
  document.getElementById("combat-eyebrow").textContent = state.warComplete ? "VICTORY" : state.warFailed ? "THE FRONT STILL NEEDS YOU" : state.warTurn === "enemy" ? "ENEMY TURN" : "CHOOSE YOUR ATTACK";
  document.getElementById("combat-message").textContent = state.warComplete
    ? "You survived the final battle and changed the fate of the world."
    : state.warFailed ? "You may train before entering the war again."
      : active ? state.warTurn === "enemy" ? `${enemy.name} is striking back...` : `${enemy.name} closes in. Make your move.`
        : state.warAccess ? "There is no retreat after you enter the war." : `Level 3 reached. Fight for the future of ${factionNames[state.faction]}.`;
  document.getElementById("start-war").hidden = active || state.warComplete || state.warFailed;
  document.getElementById("retry-war").hidden = !state.warFailed;
  document.getElementById("return-hub").hidden = active;
  document.querySelector("footer a").hidden = active;
  const abilities = document.getElementById("combat-abilities");
  abilities.hidden = !active;
  renderCombatAbilities();
  if (active && state.warTurn === "enemy") scheduleEnemyAttack();
}

function renderAll() {
  renderHeader();
  renderHub();
  renderTraining();
  renderWar();
}

function finishIntro() {
  state.introSeen = true;
  saveState();
  showScreen("faction");
}

function selectFaction(faction) {
  if (!["light", "void"].includes(faction)) return;
  state.faction = faction;
  state.introSeen = true;
  saveState();
  renderAll();
  showScreen("hub");
}

function train() {
  if (!state.faction || state.level >= levelCap) return;
  const target = dummyData[state.dummy];
  const oldLevel = state.level;
  const unlocked = awardExperience(target.xp);
  const message = unlocked.length
    ? `Training complete! +${target.xp} XP. Level ${state.level} reached—${abilityData[state.faction][state.level - 1].name} unlocked.`
    : state.level > oldLevel
      ? `Training complete! +${target.xp} XP. You reached level ${state.level}.`
      : `Solid hit! +${target.xp} XP. ${state.level >= levelCap ? "All abilities unlocked." : `${state.xp} / ${xpForNextLevel()} XP to level ${state.level + 1}.`}`;
  document.getElementById("dummy-stage").classList.remove("struck");
  void document.getElementById("dummy-stage").offsetWidth;
  document.getElementById("dummy-stage").classList.add("struck");
  document.getElementById("training-feedback").textContent = message;
  document.getElementById("hub-log").textContent = unlocked.length
    ? `LEVEL UP! ${abilityData[state.faction][state.level - 1].name} is yours.`
    : `Training paid off: +${target.xp} XP.`;
  saveState();
  renderAll();
}

function openWarRoom() {
  if (state.warComplete || state.warStarted || state.warFailed || state.warAccess) {
    showScreen("war");
    return;
  }
  if (state.level < 3) {
    document.getElementById("hub-log").textContent = "The war front is locked. Train until you reach level 3.";
    return;
  }
  state.warAccess = true;
  saveState();
  renderAll();
  showScreen("war");
}

function startWar() {
  if (!state.faction || state.level < 3 || state.warComplete || state.warStarted) return;
  state.warStarted = true;
  state.warFailed = false;
  state.warWave = 0;
  state.warHp = 100 + state.level * 15;
  state.warEnemyHp = enemies[state.faction][0].hp;
  state.warTurn = "player";
  document.getElementById("war-log").textContent = `The final war begins. ${currentEnemy().name} blocks your path.`;
  saveState();
  renderAll();
}

function retryWar() {
  if (!state.warFailed) return;
  state.warFailed = false;
  startWar();
}

function finishWar(result) {
  if (result === "victory") {
    state.warComplete = true;
    state.warStarted = false;
    state.warTurn = "player";
    awardExperience(30);
    document.getElementById("war-log").textContent = `The ${currentEnemy().name} has fallen. The war is over.`;
  } else {
    state.warStarted = false;
    state.warFailed = true;
    state.warWave = 0;
    state.warHp = 0;
    state.warEnemyHp = 0;
    state.warTurn = "player";
    document.getElementById("war-log").textContent = "You were defeated. The war is not over—you can train and try again.";
  }
  saveState();
  renderAll();
}

function playerAttack(abilityIndex) {
  if (!state.warStarted || state.warTurn !== "player") return;
  const ability = unlockedAbilities()[abilityIndex];
  if (!ability) return;
  const enemy = currentEnemy();
  const damage = Math.max(1, Math.floor(ability.power + state.level * 3 - 10));
  state.warEnemyHp = Math.max(0, state.warEnemyHp - damage);
  if (ability.heal) {
    state.warHp = Math.min(100 + state.level * 15, state.warHp + ability.heal);
  }
  const healing = ability.heal ? ` You recover ${ability.heal} HP.` : "";
  if (state.warEnemyHp === 0) {
    document.getElementById("war-log").textContent = `${ability.name} deals ${damage} damage! ${enemy.name} is down.${healing}`;
    if (state.warWave === enemies[state.faction].length - 1) {
      finishWar("victory");
      document.getElementById("combat-message").textContent = `${enemy.name} has fallen. You won the war!`;
      return;
    }
    state.warWave += 1;
    state.warEnemyHp = currentEnemy().hp;
    state.warTurn = "player";
    const unlocks = awardExperience(24);
    document.getElementById("war-log").textContent += ` Battle won! +24 XP. ${currentEnemy().name} enters the fray.${unlocks.length ? ` Level ${state.level}! ${abilityData[state.faction][state.level - 1].name} unlocked.` : ""}`;
    document.getElementById("combat-message").textContent = `The first enemy fell. ${currentEnemy().name} joins the battle!`;
    saveState();
    renderAll();
    return;
  }
  state.warTurn = "enemy";
  document.getElementById("war-log").textContent = `${ability.name} hits ${enemy.name} for ${damage} damage.${healing}`;
  document.getElementById("combat-message").textContent = `${ability.name} hits for ${damage}. ${enemy.name} is retaliating...`;
  saveState();
  renderAll();
}

function scheduleEnemyAttack() {
  if (enemyTurnTimer !== null) return;
  enemyTurnTimer = window.setTimeout(() => {
    enemyTurnTimer = null;
    enemyAttack();
  }, 750);
}

function enemyAttack() {
  if (!state.warStarted || state.warTurn !== "enemy") return;
  const enemy = currentEnemy();
  state.warHp = Math.max(0, state.warHp - enemy.power);
  if (state.warHp === 0) {
    document.getElementById("war-log").textContent = `${enemy.name} strikes for ${enemy.power} damage. You have been defeated.`;
    finishWar("defeat");
    return;
  }
  state.warTurn = "player";
  document.getElementById("war-log").textContent = `${enemy.name} strikes for ${enemy.power} damage. Choose your next ability.`;
  document.getElementById("combat-message").textContent = `${enemy.name} hits for ${enemy.power}. Your turn.`;
  saveState();
  renderAll();
}

function resetCampaign() {
  window.clearTimeout(enemyTurnTimer);
  enemyTurnTimer = null;
  state = freshState();
  openingScene = 0;
  saveState();
  renderAll();
  renderOpeningScene();
  showScreen("intro");
  document.getElementById("hub-log").textContent = "";
  document.getElementById("training-feedback").textContent = "Pick your target, then land a hit.";
}

function renderOpeningScene() {
  document.getElementById("scene-count").textContent = `SCENE ${String(openingScene + 1).padStart(2, "0")} / ${String(openingScenes.length).padStart(2, "0")}`;
  document.getElementById("story-line").textContent = openingScenes[openingScene];
  document.getElementById("next-scene").textContent = openingScene === openingScenes.length - 1 ? "Choose your side  →" : "Continue  →";
}

function beginCampaign() {
  if (!state.introSeen) {
    renderOpeningScene();
    showScreen("intro");
  } else if (!state.faction) {
    showScreen("faction");
  } else if (state.warStarted || state.warComplete || state.warFailed || state.warAccess) {
    showScreen("war");
  } else {
    showScreen("hub");
  }
  if (state.warStarted && state.warTurn === "enemy") scheduleEnemyAttack();
}

document.getElementById("next-scene").addEventListener("click", () => {
  if (openingScene >= openingScenes.length - 1) {
    finishIntro();
    return;
  }
  openingScene += 1;
  renderOpeningScene();
});
document.getElementById("skip-intro").addEventListener("click", finishIntro);
document.querySelectorAll("[data-faction]").forEach(button => {
  if (button.classList.contains("faction-card")) button.addEventListener("click", () => selectFaction(button.dataset.faction));
});
document.querySelectorAll("[data-screen]").forEach(button => {
  button.addEventListener("click", () => showScreen(button.dataset.screen));
});
document.querySelectorAll(".dummy-option").forEach(button => {
  button.addEventListener("click", () => {
    state.dummy = button.dataset.dummy;
    saveState();
    renderTraining();
  });
});
document.getElementById("train-hit").addEventListener("click", train);
document.getElementById("open-war").addEventListener("click", openWarRoom);
document.getElementById("start-war").addEventListener("click", startWar);
document.getElementById("retry-war").addEventListener("click", retryWar);
document.getElementById("return-hub").addEventListener("click", () => showScreen("hub"));
document.getElementById("reset-save").addEventListener("click", () => document.getElementById("reset-dialog").showModal());
document.getElementById("confirm-reset").addEventListener("click", resetCampaign);

window.unlockShapefightersCampaign = () => {
  state.introSeen = true;
  state.faction = "light";
  state.level = levelCap;
  state.xp = 0;
  state.warAccess = true;
  state.warStarted = false;
  state.warComplete = true;
  state.warFailed = false;
  state.warWave = 2;
  state.warHp = 100 + levelCap * 15;
  state.warEnemyHp = 0;
  state.warTurn = "player";
  saveState();
  renderAll();
  showScreen("hub");
  return "Campaign unlocked and saved.";
};

renderAll();
beginCampaign();
