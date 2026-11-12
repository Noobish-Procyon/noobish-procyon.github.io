import { n as e, r as t, t as n } from "./index-Bpqcx_79.js";
var r = t(e(), 1),
  i = [`z`, `x`, `c`, `v`],
  a = [
    {
      id: `fire`,
      name: `FIRE`,
      awakenedName: `LAVA`,
      cost: 10,
      color: `#f07846`,
      baseMoves: [`EMBER SHOT`, `BLAZE RING`, `FIRESTEP`, `INFERNO`],
      awakeMoves: [`MAGMA LANCE`, `ERUPTION`, `LAVA SKIN`, `VOLCANIC HEART`],
      moveCosts: [10, 20, 30, 40],
    },
    {
      id: `ice`,
      name: `ICE`,
      awakenedName: `SNOW`,
      cost: 10,
      color: `#80c9e8`,
      baseMoves: [`FROST NEEDLE`, `SNOW SQUALL`, `ICE WALL`, `GLACIAL PRISON`],
      awakeMoves: [`ABSOLUTE ZERO`, `BLIZZARD`, `PERMAFROST`, `WHITEOUT`],
      moveCosts: [10, 20, 30, 40],
    },
    {
      id: `nature`,
      name: `NATURE`,
      awakenedName: `FOREST`,
      cost: 15,
      color: `#68a76c`,
      baseMoves: [`THORN SEED`, `ROOT SNARE`, `RENEWAL`, `WILDSURGE`],
      awakeMoves: [`ANCIENT SPEAR`, `OVERGROWTH`, `HEARTWOOD`, `WORLD TREE`],
      moveCosts: [15, 25, 35, 45],
    },
    {
      id: `water`,
      name: `WATER`,
      awakenedName: `OCEAN`,
      cost: 15,
      color: `#4b9fe0`,
      baseMoves: [`WATER JET`, `RIPTIDE`, `MIST VEIL`, `TIDAL CRASH`],
      awakeMoves: [`ABYSSAL STREAM`, `MAELSTROM`, `OCEAN VEIL`, `TSUNAMI`],
      moveCosts: [15, 25, 35, 45],
    },
    {
      id: `light`,
      name: `LIGHT`,
      awakenedName: `STAR`,
      cost: 20,
      color: `#f4d777`,
      baseMoves: [`SUNRAY`, `FLASHBANG`, `DAWNSHIELD`, `BLINK`],
      awakeMoves: [`STARPIERCER`, `SUPERNOVA`, `SOLAR AEGIS`, `CONSTELLATION`],
      moveCosts: [20, 30, 40, 50],
    },
    {
      id: `dark`,
      name: `DARK`,
      awakenedName: `VOID`,
      cost: 20,
      color: `#a18bd3`,
      baseMoves: [`NIGHT ORB`, `GRAVITY WELL`, `SOUL SIPHON`, `SHADOW STEP`],
      awakeMoves: [`VOID BOLT`, `SINGULARITY`, `ECLIPSE DRAIN`, `ABYSS WALK`],
      moveCosts: [20, 30, 40, 50],
    },
    {
      id: `poison`,
      name: `POISON`,
      awakenedName: `TOXIN`,
      cost: 30,
      color: `#9ec84e`,
      baseMoves: [`VENOM DART`, `MIRE CLOUD`, `ANTIDOTE`, `PLAGUE BLOOM`],
      awakeMoves: [`TOXIN NEEDLE`, `BLACK FOG`, `PURGE`, `CONTAGION`],
      moveCosts: [30, 40, 50, 60],
    },
    {
      id: `electric`,
      name: `ELECTRIC`,
      awakenedName: `VOLTAGE`,
      cost: 40,
      color: `#f4cf54`,
      baseMoves: [`ARC BOLT`, `CHAIN LIGHTNING`, `STATIC DASH`, `THUNDERCLAP`],
      awakeMoves: [`RAILGUN`, `OVERLOAD`, `LIGHTNING RUSH`, `STORMFRONT`],
      moveCosts: [35, 45, 55, 65],
    },
    {
      id: `crystal`,
      name: `CRYSTAL`,
      awakenedName: `EMERALD`,
      cost: 50,
      color: `#61c9a2`,
      baseMoves: [`SHARD FLICK`, `PRISM BURST`, `GEODE GUARD`, `SHATTERLINE`],
      awakeMoves: [
        `DIAMOND SPEAR`,
        `PRISMATIC RUIN`,
        `FORTRESS CORE`,
        `WORLD SPLITTER`,
      ],
      moveCosts: [40, 50, 60, 70],
    },
    {
      id: `metal`,
      name: `METAL`,
      awakenedName: `STEEL`,
      cost: 55,
      color: `#aeb8c5`,
      baseMoves: [
        `IRON NEEDLE`,
        `ORBITAL BLADES`,
        `FORGE ARMOR`,
        `MAGNETIC CRUSH`,
      ],
      awakeMoves: [
        `CANNON SPIKE`,
        `SHRAPNEL STORM`,
        `TITAN PLATING`,
        `POLARITY COLLAPSE`,
      ],
      moveCosts: [45, 55, 65, 75],
    },
    {
      id: `blood`,
      name: `BLOOD`,
      cost: 75,
      color: `#d84d5d`,
      might: 1.35,
      baseMoves: [
        `CRIMSON NEEDLE`,
        `CRIMSON WAKE`,
        `OPEN VEIN`,
        `EXSANGUINATE`,
      ],
    },
    {
      id: `time`,
      name: `TIME`,
      cost: 100,
      color: `#bda5e8`,
      might: 2.4,
      baseMoves: [`ECHO STRIKE`, `TIME SNARE`, `REWIND`, `HOURGLASS`],
    },
    {
      id: `digital`,
      name: `DIGITAL`,
      cost: 85,
      color: `#55e6df`,
      might: 1.35,
      baseMoves: [`PACKET BURST`, `MEMORY LEAK`, `FIREWALL`, `SYSTEM CRASH`],
    },
    {
      id: `wind`,
      name: `WIND`,
      awakenedName: `TEMPEST`,
      cost: 25,
      color: `#8ed9c4`,
      baseMoves: [`GUST DART`, `WHIRLING FAN`, `UPDRAFT`, `VORTEX`],
      awakeMoves: [`STORM LANCE`, `SQUALL WALL`, `ZEPHYR STEP`, `MAELSTROM`],
      moveCosts: [20, 30, 40, 50],
    },
    {
      id: `soul`,
      name: `SOUL`,
      cost: 60,
      color: `#b3a2f0`,
      baseMoves: [`ECTO BOLT`, `WAIL`, `SPIRIT VEIL`, `SOUL HARVEST`],
      forms: {
        life: {
          name: `LIFE`,
          moves: [
            `MENDING RAY`,
            `BLESSING RING`,
            `SECOND WIND`,
            `RADIANT CHORUS`,
          ],
          costs: [45, 55, 65, 75],
        },
        death: {
          name: `DEATH`,
          moves: [
            `REAPER'S TOLL`,
            `GRAVE CHILL`,
            `PHANTOM SHIFT`,
            `SOUL REAVE`,
          ],
          costs: [45, 55, 65, 75],
        },
      },
    },
    {
      id: `space`,
      name: `SPACE`,
      cost: 90,
      color: `#5d7ce8`,
      baseMoves: [`TETHER LANCE`, `MIRROR FOLD`, `SLIP`, `COLLAPSE`],
    },
    {
      id: `creation`,
      name: `CREATION`,
      cost: 70,
      color: `#e8c98a`,
      baseMoves: [`RUNE TRAP`, `FORTRESS`, `FORGE SITE`, `GENESIS`],
    },
    {
      id: `archangel`,
      name: `ARCHANGEL`,
      awakenedName: `SERAPH`,
      cost: 95,
      color: `#f3e9c6`,
      baseMoves: [`HALO BLADE`, `CHOIR`, `SANCTUARY`, `JUDGEMENT`],
      awakeMoves: [
        `SERAPH'S EDICT`,
        `HALLELUJAH`,
        `ASCENSION`,
        `FINAL VERDICT`,
      ],
      moveCosts: [50, 60, 70, 80],
    },
    {
      id: `telekinesis`,
      name: `TELEKINESIS`,
      cost: 65,
      color: `#cf7fd8`,
      might: 1.35,
      baseMoves: [`MIND GRIP`, `REPULSE`, `SHRAPNEL SHELL`, `APEX CRUSH`],
    },
    {
      id: `rubber`,
      name: `RUBBER`,
      cost: 75,
      color: `#f273b0`,
      might: 1.8,
      baseMoves: [`RUBBER BALL`, `RICOCHET`, `SPRING BACK`, `BOUNCE HOUSE`],
    },
    {
      id: `gas`,
      name: `GAS`,
      cost: 90,
      color: `#b071f0`,
      might: 1.8,
      baseMoves: [`IGNITION`, `DETONATION`, `VENT`, `FUEL AIR BOMB`],
    },
    {
      id: `silk`,
      name: `SILK`,
      awakenedName: `WEAVE`,
      cost: 45,
      color: `#e6c7d4`,
      baseMoves: [`SILK THREAD`, `WEB`, `SILKEN VEIL`, `COCOON`],
      awakeMoves: [`WEAVER'S LANCE`, `WARP`, `TAPESTRY`, `LOOM OF FATE`],
      moveCosts: [45, 55, 65, 75],
    },
    {
      id: `mystic`,
      name: `MYSTIC`,
      awakenedName: `ARCANE`,
      cost: 60,
      color: `#7c5fc4`,
      baseMoves: [`HEX BOLT`, `SIGIL`, `WARD`, `CURSE`],
      awakeMoves: [`ARCANE SPEAR`, `RUNIC PRISON`, `AEGIS RUNE`, `GRIMOIRE`],
      moveCosts: [50, 60, 70, 80],
    },
    {
      id: `duality`,
      name: `DUALITY`,
      awakenedName: `EQUILIBRIUM`,
      cost: 85,
      color: `#d9c9a8`,
      baseMoves: [`TWIN BOLT`, `BALANCE`, `MIRROR`, `ECLIPSE`],
      awakeMoves: [`PERFECT BALANCE`, `CONVERGENCE`, `TWIN AEGIS`, `EQUINOX`],
      moveCosts: [60, 70, 80, 90],
    },
    {
      id: `math`,
      name: `MATH`,
      cost: 100,
      color: `#77e4d0`,
      baseMoves: [
        `SQUARE ROOT OF 2`,
        `PI DOMAIN`,
        `ANGLED NUKE`,
        `MATHEMATICAL CREATION`,
      ],
    },
  ],
  W2 = [
    {
      id: `coral`,
      name: `CORAL`,
      world: 2,
      cost: 10,
      color: `#f27c72`,
      combatId: `crystal`,
      baseMoves: [`CORAL NEEDLE`, `REEF BURST`, `REEFGUARD`, `REEF CROWN`],
    },
    {
      id: `abyss`,
      name: `ABYSS`,
      world: 2,
      cost: 15,
      color: `#4367a8`,
      combatId: `dark`,
      baseMoves: [`DEEP ORB`, `PRESSURE WELL`, `ABYSSAL VEIL`, `HADAL CRUSH`],
    },
    {
      id: `kelp`,
      name: `KELP`,
      world: 2,
      cost: 20,
      color: `#568c63`,
      combatId: `nature`,
      baseMoves: [`KELP LASH`, `FOREST OF THE SEA`, `KELP ARMOR`, `GREEN TIDE`],
    },
    {
      id: `pearl`,
      name: `PEARL`,
      world: 2,
      cost: 25,
      color: `#ead9d5`,
      combatId: `light`,
      baseMoves: [`PEARL FLASH`, `MOONLIT SHELL`, `LUSTER GUARD`, `PEARL NOVA`],
    },
    {
      id: `current`,
      name: `CURRENT`,
      world: 2,
      cost: 30,
      color: `#54c7c3`,
      combatId: `wind`,
      baseMoves: [`CURRENT BOLT`, `CROSSCURRENT`, `SLIPSTREAM`, `RIP CURRENT`],
    },
    {
      id: `magma`,
      name: `MAGMA`,
      world: 2,
      cost: 35,
      color: `#ef633f`,
      combatId: `fire`,
      baseMoves: [`MOLTEN SHARD`, `MAGMA RING`, `LAVA ARMOR`, `CALDERA`],
    },
    {
      id: `thunder`,
      name: `THUNDER`,
      world: 2,
      cost: 40,
      color: `#f2d34f`,
      combatId: `electric`,
      baseMoves: [`THUNDERBOLT`, `CHAIN STORM`, `STATIC FIELD`, `SKYFALL`],
    },
    {
      id: `sand`,
      name: `SAND`,
      world: 2,
      cost: 45,
      color: `#c9a45b`,
      combatId: `wind`,
      baseMoves: [`SAND SHOT`, `DUNE SWEEP`, `DUST DEVIL`, `DESERT STORM`],
    },
    {
      id: `sound`,
      name: `SOUND`,
      world: 2,
      cost: 50,
      color: `#d58bd0`,
      combatId: `wind`,
      baseMoves: [`RESONANT PULSE`, `ECHO WAVE`, `SOUND BARRIER`, `SONIC BOOM`],
    },
    {
      id: `gravity`,
      name: `GRAVITY`,
      world: 2,
      cost: 55,
      color: `#8b7db8`,
      combatId: `space`,
      baseMoves: [`GRAVITY WELL`, `ORBITAL SHIFT`, `HEAVY FIELD`, `SINGULARITY`],
    },
    {
      id: `dream`,
      name: `DREAM`,
      world: 2,
      cost: 60,
      color: `#bf8de0`,
      combatId: `mystic`,
      baseMoves: [`DREAM DART`, `NIGHTMARE`, `SLEEPING VEIL`, `LUCID STORM`],
    },
    {
      id: `mirror`,
      name: `MIRROR`,
      world: 2,
      cost: 65,
      color: `#b8d5dc`,
      combatId: `duality`,
      baseMoves: [`REFLECTED BOLT`, `SHATTER IMAGE`, `SILVER GUARD`, `MIRROR WORLD`],
    },
    {
      id: `rune`,
      name: `RUNE`,
      world: 2,
      cost: 70,
      color: `#c89754`,
      combatId: `mystic`,
      baseMoves: [`RUNE FLAIR`, `SIGIL STORM`, `RUNE WARD`, `ANCIENT SCRIPT`],
    },
    {
      id: `meteor`,
      name: `METEOR`,
      world: 2,
      cost: 75,
      color: `#dc7157`,
      combatId: `fire`,
      baseMoves: [`METEOR SHARD`, `IMPACT ZONE`, `STARFALL GUARD`, `EXTINCTION`],
    },
    {
      id: `beast`,
      name: `BEAST`,
      world: 2,
      cost: 80,
      color: `#aa7654`,
      combatId: `nature`,
      baseMoves: [`FANG STRIKE`, `PACK HUNT`, `HIDE ARMOR`, `PRIMAL ROAR`],
    },
    {
      id: `smoke`,
      name: `SMOKE`,
      world: 2,
      cost: 85,
      color: `#8b8791`,
      combatId: `gas`,
      baseMoves: [`SMOKE BOMB`, `BLINDING CLOUD`, `VANISH`, `DARKENING SKY`],
    },
    {
      id: `void`,
      name: `VOID`,
      world: 2,
      cost: 90,
      color: `#69529c`,
      combatId: `dark`,
      baseMoves: [`VOID NEEDLE`, `NULL ZONE`, `VOID SKIN`, `TOTAL ERASURE`],
    },
    {
      id: `mirage`,
      name: `MIRAGE`,
      world: 2,
      cost: 95,
      color: `#e1a56d`,
      combatId: `light`,
      baseMoves: [`AFTERIMAGE`, `FALSE HORIZON`, `SHIMMER`, `DESERT ILLUSION`],
    },
    {
      id: `ironwood`,
      name: `IRONWOOD`,
      world: 2,
      cost: 100,
      color: `#8e7754`,
      combatId: `metal`,
      baseMoves: [`IRONBARK DART`, `ROOTED SPIKES`, `HEARTWOOD GUARD`, `ANCIENT GROVE`],
    },
    {
      id: `solar`,
      name: `SOLAR`,
      world: 2,
      cost: 105,
      color: `#f4b844`,
      combatId: `light`,
      baseMoves: [`SOLAR FLARE`, `SUNBURST`, `CORONA`, `ZENITH`],
    },
    {
      id: `lunar`,
      name: `LUNAR`,
      world: 2,
      cost: 110,
      color: `#9faee8`,
      combatId: `ice`,
      baseMoves: [`MOON SHARD`, `LUNAR ECLIPSE`, `MOONLIGHT VEIL`, `MOONFALL`],
    },
    {
      id: `chaos`,
      name: `CHAOS`,
      world: 2,
      cost: 115,
      color: `#dd5d87`,
      combatId: `poison`,
      baseMoves: [`CHAOS BOLT`, `ENTROPY FIELD`, `UNSTABLE FORM`, `DISORDER`],
    },
    {
      id: `order`,
      name: `ORDER`,
      world: 2,
      cost: 120,
      color: `#d9c899`,
      combatId: `archangel`,
      baseMoves: [`EDICT`, `SACRED PATTERN`, `HARMONY AEGIS`, `PERFECT LAW`],
    },
    {
      id: `prism`,
      name: `PRISM`,
      world: 2,
      cost: 125,
      color: `#bd83e3`,
      combatId: `crystal`,
      baseMoves: [`PRISM BEAM`, `SPECTRUM`, `PRISMATIC GUARD`, `RAINBOW RUIN`],
    },
    {
      id: `frost`,
      name: `FROST`,
      world: 2,
      cost: 130,
      color: `#8bd6e5`,
      combatId: `ice`,
      baseMoves: [`FROST SHARD`, `WHITEOUT`, `PERMAFROST`, `ZERO POINT`],
    },
  ],
  o = [
    `THE SUNKEN VESTIBULE`,
    `MOSS LANTERN HALL`,
    `THE CLOCKWORK CRYPT`,
    `THE RED GALLERY`,
    `THE LAST THRESHOLD`,
  ],
  s = [
    { id: `ember`, name: `EMBER`, glow: `#e08a5a` },
    { id: `tide`, name: `TIDE`, glow: `#5fa8d8` },
    { id: `verdant`, name: `VERDANT`, glow: `#79b47c` },
    { id: `violet`, name: `VIOLET`, glow: `#a98be0` },
    { id: `gilt`, name: `GILT`, glow: `#c9a86a` },
  ],
  c = [
    { id: `vitality`, name: `VITALITY`, text: `+15 max vitality, restored.` },
    { id: `power`, name: `SHARP EDGE`, text: `+12% damage.` },
    { id: `haste`, name: `QUICKEN`, text: `5% faster attacks and casts.` },
    { id: `fleet`, name: `FLEET FOOT`, text: `+10% move speed.` },
    { id: `reach`, name: `LONG REACH`, text: `+15% melee reach.` },
    { id: `quickstep`, name: `QUICKSTEP`, text: `12% shorter dash cooldown.` },
    { id: `scavenger`, name: `SCAVENGER`, text: `+1 fragment per kill.` },
    {
      id: `bloodthirst`,
      name: `BLOODTHIRST`,
      text: `Heal 5% of damage dealt.`,
    },
    { id: `marksman`, name: `MARKSMAN`, text: `+15% ranged damage.` },
    { id: `resonance`, name: `RESONANCE`, text: `8% shorter move cooldowns.` },
    { id: `magnet`, name: `MAGNET`, text: `Fragments pull from farther.` },
    { id: `guardian`, name: `GUARDIAN`, text: `Shield at every room start.` },
    { id: `phase`, name: `PHASE`, text: `Gain i-frames when dashing.` },
    { id: `ironhide`, name: `IRONHIDE`, text: `6% less damage taken.` },
    { id: `renewal`, name: `RENEWAL`, text: `Regenerate 0.45 vitality per second.` },
    { id: `critical`, name: `CRITICAL EDGE`, text: `5% chance to deal 1.75x damage.` },
    { id: `executioner`, name: `EXECUTIONER`, text: `10% more damage to foes below 30% health.` },
    { id: `warhammer`, name: `WARHAMMER`, text: `+15% melee damage.` },
    { id: `spellweaver`, name: `SPELLWEAVER`, text: `+12% ability damage.` },
    { id: `blastcraft`, name: `BLASTCRAFT`, text: `+10 blast radius.` },
    { id: `trickshot`, name: `TRICKSHOT`, text: `10% chance to fire an extra shot.` },
    { id: `longstride`, name: `LONGSTRIDE`, text: `+10 dash distance.` },
    { id: `evasion`, name: `EVASION`, text: `5% chance to evade a hit.` },
    { id: `thorns`, name: `THORNS`, text: `Retaliate for 8 damage when hit.` },
    { id: `secondwind`, name: `SECOND WIND`, text: `Restore 5 vitality on room entry.` },
    { id: `adrenaline`, name: `ADRENALINE`, text: `+10% damage while below 35% vitality.` },
    { id: `fortune`, name: `FORTUNE`, text: `+15% score from enemy kills.` },
    { id: `sharpshooter`, name: `SHARPSHOOTER`, text: `+12% projectile speed and range.` },
    { id: `aftershock`, name: `AFTERSHOCK`, text: `8% shorter melee cooldown.` },
    { id: `guardianangel`, name: `GUARDIAN ANGEL`, text: `+1.5 seconds of shield at room start.` },
  ];
a.push(...W2);
var ELEMENT_TRAITS = {
    fire: [`damage`, `defense`],
    ice: [`defense`, `moveSpeed`],
    nature: [`defense`, `attackSpeed`],
    water: [`moveSpeed`, `damage`],
    light: [`attackSpeed`, `defense`],
    dark: [`damage`, `moveSpeed`],
    poison: [`damage`, `defense`],
    electric: [`attackSpeed`, `defense`],
    crystal: [`defense`, `moveSpeed`],
    metal: [`defense`, `attackSpeed`],
    blood: [`damage`, `defense`],
    time: [`attackSpeed`, `moveSpeed`],
    digital: [`attackSpeed`, `defense`],
    wind: [`moveSpeed`, `damage`],
    soul: [`defense`, `attackSpeed`],
    space: [`damage`, `moveSpeed`],
    creation: [`defense`, `attackSpeed`],
    archangel: [`defense`, `damage`],
    telekinesis: [`damage`, `moveSpeed`],
    rubber: [`moveSpeed`, `attackSpeed`],
    gas: [`damage`, `defense`],
    silk: [`attackSpeed`, `defense`],
    mystic: [`attackSpeed`, `moveSpeed`],
    duality: [`defense`, `attackSpeed`],
    math: [`attackSpeed`, `defense`],
    coral: [`defense`, `moveSpeed`],
    abyss: [`damage`, `moveSpeed`],
    kelp: [`defense`, `attackSpeed`],
    pearl: [`defense`, `damage`],
    current: [`moveSpeed`, `damage`],
    magma: [`damage`, `moveSpeed`],
    thunder: [`attackSpeed`, `defense`],
    sand: [`defense`, `attackSpeed`],
    sound: [`attackSpeed`, `defense`],
    gravity: [`damage`, `moveSpeed`],
    dream: [`attackSpeed`, `defense`],
    mirror: [`defense`, `damage`],
    rune: [`defense`, `moveSpeed`],
    meteor: [`damage`, `defense`],
    beast: [`damage`, `attackSpeed`],
    smoke: [`moveSpeed`, `damage`],
    void: [`damage`, `defense`],
    mirage: [`moveSpeed`, `attackSpeed`],
    ironwood: [`defense`, `moveSpeed`],
    solar: [`damage`, `defense`],
    lunar: [`defense`, `attackSpeed`],
    chaos: [`damage`, `defense`],
    order: [`defense`, `moveSpeed`],
    prism: [`attackSpeed`, `defense`],
    frost: [`attackSpeed`, `moveSpeed`],
  },
  ELEMENT_TRAIT_LABELS = {
    damage: `DAMAGE`,
    moveSpeed: `MOVE SPEED`,
    attackSpeed: `ATTACK SPEED`,
    defense: `DEFENSE`,
  };
function getElementTraitDetails(e, awakened) {
  if (!e) return null;
  let t = ELEMENT_TRAITS[e.id];
  if (!t) return null;
  let n = awakened || !(e.awakeMoves || e.forms) ? 20 : 10;
  return {
    buffStat: t[0],
    buffLabel: `+${n}% ${ELEMENT_TRAIT_LABELS[t[0]]}`,
    debuffStat: t[1],
    debuffLabel: `-10% ${ELEMENT_TRAIT_LABELS[t[1]]}`,
  };
}
function l(e, t) {
  let {
    engine: n,
    st: r,
    awakened: i,
    hero: a,
    color: o,
    aimAngle: s,
    dmg: c,
    mark: l,
    shoot: u,
    pool: d,
  } = t;
  if (e === 0) {
    let e = i ? 3 : 1;
    for (let t = 0; t < e; t++) {
      let e = i ? (t - 1) * 0.5 : 0;
      n.after(t * 0.09, () =>
        u(s + e, {
          speed: i ? 560 : 500,
          radius: i ? 10 : 12,
          damage: c(i ? 38 : 42),
          style: `ring`,
          pierce: i ? 99 : 3,
          returnToPlayer: !0,
        }),
      );
    }
    return !0;
  }
  if (e === 1) {
    let e = i ? 250 : 200,
      t = 0;
    for (let r of n.enemies())
      Math.hypot(r.x - a.x, r.y - a.y) > e + r.r ||
        (n.hitEnemy(r, c(i ? 62 : 46), `archangel`, 1, i),
        (r.stun = Math.max(r.stun || 0, i ? 1.7 : 1.1)),
        (r.mark = Math.max(r.mark, i ? 9 : 6)),
        (t += 1));
    return (
      i && t && n.heal(t * 7),
      (r.enemyShots = r.enemyShots.filter(
        (t) => Math.hypot(t.x - a.x, t.y - a.y) > e,
      )),
      l(a.x, a.y, e),
      !0
    );
  }
  if (e === 2) {
    let e = i ? 150 : 120;
    ((r.shield = Math.max(r.shield, i ? 14 : 9)),
      (r.invuln = Math.max(r.invuln, i ? 1.6 : 1)),
      n.cleanse());
    for (let e = 1; e <= (i ? 4 : 3); e++)
      n.after(e * 0.4, () => n.heal(i ? 16 : 11));
    for (let t of n.enemies()) {
      let n = Math.hypot(t.x - a.x, t.y - a.y) || 1;
      if (n > e + t.r) continue;
      let r = i ? 68 : 46;
      ((t.x += ((t.x - a.x) / n) * r),
        (t.y += ((t.y - a.y) / n) * r),
        (t.slow = Math.max(t.slow, 1.8)),
        (t.mark = Math.max(t.mark, 5)));
    }
    return (
      d(a.x, a.y, i ? 115 : 92, i ? 4 : 3, c(9), { slow: 1.8 }),
      l(a.x, a.y, i ? 115 : 92),
      !0
    );
  }
  return (
    e === 3 &&
    (n.enemies().forEach((e, t) => {
      let r = { x: e.x, y: e.y };
      n.after(t * 0.06, () => {
        (n.effect({
          kind: `line`,
          fromX: r.x,
          fromY: 0,
          x: r.x,
          y: r.y,
          color: o,
          duration: 0.4,
        }),
          n.hitEnemy(e, c(i ? 96 : 72), `archangel`, 3, i),
          (e.mark = Math.max(e.mark, i ? 10 : 7)),
          i &&
            !e.dead &&
            e.hp < e.maxHp * 0.3 &&
            n.hitEnemy(e, c(90), `archangel`, 3, !0));
      });
    }),
    n.heal(i ? 26 : 16),
    (r.invuln = Math.max(r.invuln, i ? 1.2 : 0.6)),
    l(a.x, a.y, 90),
    !0)
  );
}
function u(e, t) {
  let {
    engine: n,
    st: r,
    hero: i,
    color: a,
    aimAngle: o,
    target: s,
    dmg: c,
    mark: l,
    shoot: u,
    ring: d,
    orbit: f,
  } = t;
  if (e === 0) {
    if (!s)
      return (
        u(o, {
          speed: 520,
          radius: 10,
          damage: c(40),
          splash: 52,
          knockback: 30,
        }),
        !0
      );
    let e = s;
    ((e.root = Math.max(e.root, 2.2)),
      n.effect({
        kind: `line`,
        fromX: i.x,
        fromY: i.y,
        x: e.x,
        y: e.y,
        color: a,
        duration: 0.6,
      }));
    for (let t = 0; t < 3; t++)
      n.after(t * 0.22, () => {
        if (e.dead) return;
        let t = Math.hypot(i.x - e.x, i.y - e.y) || 1,
          r = Math.min(Math.max(0, t - 44), 74);
        ((e.x += ((i.x - e.x) / t) * r),
          (e.y += ((i.y - e.y) / t) * r),
          (e.stun = Math.max(e.stun || 0, 0.35)),
          n.hitEnemy(e, c(22), `telekinesis`, 0, !1),
          n.burst(e.x, e.y, a, 5));
      });
    return !0;
  }
  if (e === 1) {
    for (let e of n.enemies()) {
      let t = Math.hypot(e.x - i.x, e.y - i.y) || 1;
      if (t > 210 + e.r) continue;
      n.hitEnemy(e, c(38), `telekinesis`, 1, !1);
      let r = Math.min(260, 96 + (210 - t) * 1.1);
      ((e.x = Math.max(20, Math.min(n.w - 20, e.x + ((e.x - i.x) / t) * r))),
        (e.y = Math.max(20, Math.min(n.h - 20, e.y + ((e.y - i.y) / t) * r))),
        (e.stun = Math.max(e.stun || 0, 0.9)));
    }
    return (
      (r.enemyShots = r.enemyShots.filter(
        (e) => Math.hypot(e.x - i.x, e.y - i.y) > 210,
      )),
      l(i.x, i.y, 210),
      !0
    );
  }
  if (e === 2) {
    ((r.shield = Math.max(r.shield, 8)),
      (r.invuln = Math.max(r.invuln, 0.6)),
      f(4, { radius: 54, damage: c(26), life: 5 }));
    for (let e of n.enemies())
      Math.hypot(e.x - i.x, e.y - i.y) > 120 + e.r ||
        (e.slow = Math.max(e.slow, 1.2));
    return (l(i.x, i.y, 90), !0);
  }
  if (e === 3) {
    let e = s
      ? { x: s.x, y: s.y }
      : { x: i.x + Math.cos(o) * 160, y: i.y + Math.sin(o) * 160 };
    for (let t of n.enemies()) {
      let n = Math.hypot(t.x - e.x, t.y - e.y) || 1;
      if (n > 320) continue;
      let r = Math.min(Math.max(0, n - 34), n * 0.85);
      ((t.x += ((e.x - t.x) / n) * r),
        (t.y += ((e.y - t.y) / n) * r),
        (t.pause = Math.max(t.pause || 0, 0.45)),
        (t.stun = Math.max(t.stun || 0, 0.5)));
    }
    return (
      l(e.x, e.y, 320),
      n.after(0.42, () => {
        d(e, 132, c(96));
        for (let t of n.enemies())
          Math.hypot(t.x - e.x, t.y - e.y) > 150 ||
            ((t.stun = Math.max(t.stun || 0, 1.2)), n.burst(t.x, t.y, a, 8));
      }),
      !0
    );
  }
  return !1;
}
function d(e, t) {
  let {
    engine: n,
    st: r,
    hero: i,
    color: a,
    aimAngle: o,
    dmg: s,
    shoot: c,
    mark: l,
  } = t;
  if (e === 0)
    return (
      c(o, {
        speed: 620,
        radius: 12,
        damage: s(58),
        style: `ring`,
        bounce: 6,
        split: 3,
      }),
      !0
    );
  if (e === 1) {
    for (let e = 0; e < 12; e++)
      c((e / 12) * Math.PI * 2, {
        speed: 470,
        radius: 9,
        damage: s(36),
        style: `ring`,
        bounce: 4,
      });
    return !0;
  }
  if (e === 2) {
    ((r.shield = Math.max(r.shield, 16)),
      (r.reflect = Math.max(r.reflect, 9)),
      (r.invuln = Math.max(r.invuln, 0.9)));
    for (let e of n.enemies()) {
      let t = Math.hypot(e.x - i.x, e.y - i.y) || 1;
      t > 190 + e.r ||
        ((e.stun = Math.max(e.stun || 0, 1)),
        (e.x += ((e.x - i.x) / t) * 150),
        (e.y += ((e.y - i.y) / t) * 150),
        n.hitEnemy(e, s(52), `rubber`, 2, !1));
    }
    return ((r.shake = Math.max(r.shake, 0.14)), l(i.x, i.y, 190), !0);
  }
  for (let e = 0; e < 18; e++)
    n.after(e * 0.035, () =>
      c((e / 18) * Math.PI * 2, {
        speed: 500,
        radius: 10,
        damage: s(48),
        style: `ring`,
        bounce: 7,
      }),
    );
  return (
    (r.reflect = Math.max(r.reflect, 4)),
    (r.shield = Math.max(r.shield, 8)),
    (r.shake = Math.max(r.shake, 0.3)),
    l(i.x, i.y, 140),
    !0
  );
}
function f(e, t) {
  let {
    engine: n,
    st: r,
    hero: i,
    color: a,
    aimAngle: o,
    target: s,
    dmg: c,
    shoot: l,
    pool: u,
    ring: d,
    mark: f,
    mine: p,
  } = t;
  if (e === 0) {
    l(o, { speed: 660, radius: 10, damage: c(44), style: `star`, splash: 72 });
    let e = s || { x: i.x + Math.cos(o) * 150, y: i.y + Math.sin(o) * 150 };
    for (let t = 0; t < 3; t++) {
      let r = o + (t - 1) * 0.7;
      n.after(0.2 + t * 0.09, () =>
        p(e.x + Math.cos(r) * 54, e.y + Math.sin(r) * 54, {
          blast: 96,
          fuse: 0.18,
          damage: c(74),
          stun: 0.4,
        }),
      );
    }
    return !0;
  }
  if (e === 1) {
    let e = s || { x: i.x + Math.cos(o) * 170, y: i.y + Math.sin(o) * 170 };
    for (let t = 0; t < 5; t++) {
      let r = (t / 5) * Math.PI * 2;
      n.after(t * 0.05, () =>
        p(e.x + Math.cos(r) * 62, e.y + Math.sin(r) * 62, {
          blast: 104,
          fuse: 0.34,
          damage: c(86),
          stun: 0.5,
        }),
      );
    }
    return (
      u(e.x, e.y, 150, 3.2, c(16), { burn: !0 }),
      n.after(0.4, () => d(e, 165, c(64))),
      f(e.x, e.y, 150),
      !0
    );
  }
  if (e === 2) {
    ((r.shield = Math.max(r.shield, 10)), (r.invuln = Math.max(r.invuln, 0.6)));
    for (let e of n.enemies()) {
      let t = Math.hypot(e.x - i.x, e.y - i.y) || 1;
      t > 190 + e.r ||
        ((e.x += ((e.x - i.x) / t) * 130),
        (e.y += ((e.y - i.y) / t) * 130),
        (e.stun = Math.max(e.stun || 0, 0.7)),
        n.hitEnemy(e, c(60), `gas`, 2, !1));
    }
    return (
      d(i, 190, c(52)),
      u(i.x, i.y, 132, 3.4, c(14), { burn: !0 }),
      (r.shake = Math.max(r.shake, 0.16)),
      f(i.x, i.y, 190),
      !0
    );
  }
  let m = n.enemies();
  if (!m.length)
    return (
      d(i, 240, c(120)),
      u(i.x, i.y, 180, 4, c(20), { burn: !0 }),
      f(i.x, i.y, 240),
      !0
    );
  for (let e of m)
    (n.after(0.12, () =>
      p(e.x, e.y, { blast: 110, fuse: 0.3, damage: c(96), stun: 0.6 }),
    ),
      u(e.x, e.y, 96, 3.6, c(18), { burn: !0 }));
  return (
    n.after(0.16, () => d(i, 230, c(92))),
    u(i.x, i.y, 150, 3.8, c(18), { burn: !0 }),
    (r.shake = Math.max(r.shake, 0.3)),
    f(i.x, i.y, 230),
    !0
  );
}
function p(e, t) {
  let {
    engine: n,
    st: r,
    awakened: i,
    hero: a,
    color: o,
    aimAngle: s,
    target: c,
    dmg: l,
    shoot: u,
    pool: d,
    mark: f,
    orbit: p,
  } = t;
  if (e === 0) {
    if (!i)
      return (
        u(s, {
          speed: 520,
          radius: 5,
          damage: l(38),
          style: `bolt`,
          homing: !0,
          pierce: 2,
        }),
        !0
      );
    for (let e = 0; e < 5; e++)
      n.after(e * 0.05, () =>
        u(s + (e - 2) * 0.09, {
          speed: 640,
          radius: 5,
          damage: l(26),
          style: `bolt`,
          pierce: 3,
        }),
      );
    return !0;
  }
  if (e === 1) {
    let e = c || a,
      t = i ? 220 : 170;
    if (!i) {
      for (let r of n.enemies())
        Math.hypot(r.x - e.x, r.y - e.y) > t + r.r ||
          ((r.root = Math.max(r.root, 2.4)),
          (r.slow = Math.max(r.slow, 2.4)),
          n.hitEnemy(r, l(26), `silk`, 1, !1));
      return (d(e.x, e.y, t * 0.7, 3, l(7), { slow: 2.2 }), f(e.x, e.y, t), !0);
    }
    for (let r of n.enemies()) {
      let i = Math.hypot(r.x - e.x, r.y - e.y) || 1;
      if (i > t) continue;
      let a = Math.min(Math.max(0, i - 30), i * 0.75);
      ((r.x += ((e.x - r.x) / i) * a),
        (r.y += ((e.y - r.y) / i) * a),
        (r.root = Math.max(r.root, 2.6)),
        n.hitEnemy(r, l(34), `silk`, 1, !0));
    }
    return (f(e.x, e.y, t), !0);
  }
  if (e === 2)
    return i
      ? ((r.shield = Math.max(r.shield, 11)),
        (r.invuln = Math.max(r.invuln, 0.8)),
        p(5, { radius: 60, damage: l(24), life: 5.5 }),
        f(a.x, a.y, 86),
        !0)
      : ((r.shield = Math.max(r.shield, 8)),
        (r.invuln = Math.max(r.invuln, 1)),
        f(a.x, a.y, 70),
        !0);
  if (!i) {
    for (let e of n.enemies())
      Math.hypot(e.x - a.x, e.y - a.y) > 240 + e.r ||
        ((e.root = Math.max(e.root, 3.2)),
        (e.stun = Math.max(e.stun || 0, 1.2)),
        n.hitEnemy(e, l(60), `silk`, 3, !1),
        d(e.x, e.y, 60, 3, l(10), { slow: 2 }));
    return (f(a.x, a.y, 240), !0);
  }
  for (let e = 0; e < 6; e++) {
    let t = (e / 6) * Math.PI * 2 + s;
    n.after(e * 0.05, () => n.beam(a, t, 360, 26, l(44), `silk`, 3, !0));
  }
  for (let e of n.enemies())
    ((e.root = Math.max(e.root, 2)), n.hitEnemy(e, l(26), `silk`, 3, !0));
  return (f(a.x, a.y, 200), !0);
}
function m(e, t) {
  let {
    engine: n,
    st: r,
    awakened: i,
    hero: a,
    color: o,
    aimAngle: s,
    target: c,
    dmg: l,
    shoot: u,
    mine: d,
    mark: f,
  } = t;
  if (e === 0)
    return i
      ? (n.beam(a, s, 420, 30, l(76), `mystic`, 0, !0), !0)
      : (u(s, {
          speed: 400,
          radius: 8,
          damage: l(32),
          homing: !0,
          splash: 40,
          style: `star`,
        }),
        !0);
  if (e === 1) {
    if (!i) {
      for (let e = 1; e <= 3; e++) {
        let t = {
          x: a.x + Math.cos(s) * e * 64,
          y: a.y + Math.sin(s) * e * 64,
        };
        n.after(e * 0.05, () =>
          d(t.x, t.y, { blast: 56, fuse: 0.6, damage: l(40), stun: 0.4 }),
        );
      }
      return !0;
    }
    let e = c || a;
    for (let t of n.enemies())
      Math.hypot(t.x - e.x, t.y - e.y) > 190 + t.r ||
        ((t.root = Math.max(t.root, 2.6)),
        (t.stun = Math.max(t.stun || 0, 1.1)),
        (t.glitch = Math.max(t.glitch, 2.2)),
        n.hitEnemy(t, l(46), `mystic`, 1, !0));
    return (f(e.x, e.y, 190), !0);
  }
  if (e === 2) {
    if (!i)
      return (
        (r.shield = Math.max(r.shield, 9)),
        (r.invuln = Math.max(r.invuln, 0.8)),
        (r.reflect = Math.max(r.reflect, 1.6)),
        f(a.x, a.y, 76),
        !0
      );
    ((r.shield = Math.max(r.shield, 12)),
      (r.invuln = Math.max(r.invuln, 1)),
      (r.reflect = Math.max(r.reflect, 2.6)));
    for (let e = 1; e <= 3; e++) n.after(e * 0.45, () => n.heal(12));
    return (f(a.x, a.y, 84), !0);
  }
  if (!i) {
    for (let e of n.enemies())
      ((e.mark = Math.max(e.mark, 6)),
        (e.glitch = Math.max(e.glitch, 2)),
        n.hitEnemy(e, l(48), `mystic`, 3, !1));
    return (f(a.x, a.y, n.w), !0);
  }
  for (let e = 0; e < 6; e++) {
    let t = (e / 6) * Math.PI * 2 + s;
    n.after(e * 0.06, () => n.beam(a, t, 340, 22, l(42), `mystic`, 3, !0));
  }
  for (let e of n.enemies())
    ((e.mark = Math.max(e.mark, 8)), n.hitEnemy(e, l(30), `mystic`, 3, !0));
  return ((r.shake = Math.max(r.shake, 0.2)), f(a.x, a.y, 200), !0);
}
function h(e, t) {
  let {
    engine: n,
    st: r,
    awakened: i,
    hero: a,
    color: o,
    aimAngle: s,
    dmg: c,
    shoot: l,
    mine: u,
    ring: d,
    pool: f,
    mark: p,
  } = t;
  n.dualityFlip = !n.dualityFlip;
  let m = n.dualityFlip;
  if (e === 0)
    return i
      ? (n.beam(a, s, 400, 34, c(64), `duality`, 0, !0),
        n.after(0.16, () => {
          d(a, 150, c(46));
          for (let e of n.enemies())
            e.mark > 0 && n.hitEnemy(e, c(22), `duality`, 0, !0);
        }),
        p(a.x, a.y, 120),
        !0)
      : (l(s - 0.06, {
          speed: 560,
          radius: 6,
          damage: c(26),
          style: `bolt`,
          pierce: 2,
        }),
        l(s + 0.06, { speed: 460, radius: 9, damage: c(26), pull: 80 }),
        !0);
  if (e === 1) {
    if (!i) {
      for (let e of n.enemies()) {
        let t = Math.hypot(e.x - a.x, e.y - a.y) || 1;
        if (t > 230) continue;
        let n = Math.min(Math.max(0, t - 36), t * 0.7);
        ((e.x += ((a.x - e.x) / t) * n), (e.y += ((a.y - e.y) / t) * n));
      }
      return (
        p(a.x, a.y, 230),
        n.after(0.32, () => {
          d(a, 130, c(64));
          for (let e of n.enemies()) {
            let t = Math.hypot(e.x - a.x, e.y - a.y) || 1;
            t > 200 ||
              ((e.x = Math.max(
                20,
                Math.min(n.w - 20, e.x + ((e.x - a.x) / t) * 90),
              )),
              (e.y = Math.max(
                20,
                Math.min(n.h - 20, e.y + ((e.y - a.y) / t) * 90),
              )),
              (e.stun = Math.max(e.stun || 0, 0.7)));
          }
        }),
        !0
      );
    }
    for (let e of n.enemies()) {
      let t = Math.hypot(e.x - a.x, e.y - a.y) || 1;
      if (t > 300) continue;
      let n = Math.min(Math.max(0, t - 34), t * 0.85);
      ((e.x += ((a.x - e.x) / t) * n), (e.y += ((a.y - e.y) / t) * n));
    }
    return (
      p(a.x, a.y, 300),
      n.after(0.3, () => {
        d(a, 160, c(104));
        for (let e of n.enemies())
          Math.hypot(e.x - a.x, e.y - a.y) < 160 &&
            (e.stun = Math.max(e.stun || 0, 1.2));
      }),
      !0
    );
  }
  if (e === 2)
    return i
      ? ((r.shield = Math.max(r.shield, 13)),
        (r.invuln = Math.max(r.invuln, 1)),
        (r.reflect = Math.max(r.reflect, 4.4)),
        n.heal(24),
        p(a.x, a.y, 90),
        !0)
      : ((r.shield = Math.max(r.shield, 8)),
        (r.invuln = Math.max(r.invuln, 0.7)),
        (r.reflect = Math.max(r.reflect, 3.4)),
        p(a.x, a.y, 74),
        !0);
  if (!i) {
    if (m) {
      let e = 0;
      for (let t of n.enemies()) {
        if (Math.hypot(t.x - a.x, t.y - a.y) > 250 + t.r) continue;
        let r = t.hp;
        (n.hitEnemy(t, c(84), `duality`, 3, !1),
          (e += Math.max(0, r - t.hp)),
          (t.slow = Math.max(t.slow, 1.6)));
      }
      (n.heal(e * 0.25),
        f(a.x, a.y, 110, 3, c(9), { slow: 1.8 }),
        p(a.x, a.y, 250));
    } else {
      for (let e of n.enemies())
        ((e.mark = Math.max(e.mark, 6)),
          n.hitEnemy(e, c(66), `duality`, 3, !1),
          (e.stun = Math.max(e.stun || 0, 0.8)));
      (n.cleanse(),
        n.heal(28),
        (r.invuln = Math.max(r.invuln, 0.8)),
        p(a.x, a.y, n.w));
    }
    return ((r.shake = Math.max(r.shake, 0.24)), !0);
  }
  let h = 0;
  for (let e of n.enemies()) {
    let t = e.hp;
    ((e.mark = Math.max(e.mark, 8)),
      n.hitEnemy(e, c(96), `duality`, 3, !0),
      (h += Math.max(0, t - e.hp)),
      (e.stun = Math.max(e.stun || 0, 0.9)),
      n.burst(e.x, e.y, o, 10),
      u(e.x, e.y, { blast: 48, fuse: 0.55, damage: c(28) }));
  }
  return (
    n.heal(h * 0.2 + 20),
    n.cleanse(),
    (r.shield = Math.max(r.shield, 8)),
    (r.shake = Math.max(r.shake, 0.3)),
    p(a.x, a.y, 200),
    !0
  );
}
var g = {
    archangel: l,
    telekinesis: u,
    rubber: d,
    gas: f,
    silk: p,
    mystic: m,
    duality: h,
  },
  _ = Math.PI * 2;
function v(e, t) {
  let n = e.st,
    r = e.element();
  if (!r) return;
  let nId = r.id,
    world2Style = r.combatId,
    awakening = world2Style ? null : e.awakening(r);
  if (world2Style) r = { ...r, id: world2Style };
  let a = n.player,
    o = r.color,
    s = awakening,
    c = !world2Style && e.moveAwakened(nId, t),
    l = s?.form || null,
    u = e.nearestEnemy(),
    d = e.moveDir(),
    f = u ? Math.atan2(u.y - a.y, u.x - a.x) : Math.atan2(d.y, d.x),
    p = i[t].toUpperCase(),
    m = c ? s.moves[t] : r.baseMoves[t],
    h = (c ? 1.65 : 1) * (n.rage > 0 ? 1.6 : 1) * (r.might || 1),
    v = (e) => e * h * n.damageBoost * n.abilityBoost,
    y = (e, t, n) => Math.max(t, Math.min(n, e));
  n.abilityTimers[t] =
    (r.id === `math` && t === 0
      ? 0.5
      : [5, 8, 12, 16][t] *
        (c ? 1.25 : 1) *
        n.attackSpeed *
        n.abilitySpeed) /
    e.elementTraitMultiplier(`attackSpeed`);
  let b = (t, n, r, i = `area`) =>
      e.effect({
        kind: i,
        x: t,
        y: n,
        radius: r,
        color: o,
        key: p,
        label: m,
        duration: 0.6,
      }),
    x = (n, i, a) => {
      for (let o of e.enemies())
        Math.hypot(o.x - n.x, o.y - n.y) <= i + o.r &&
          e.hitEnemy(o, a, r.id, t, c);
      b(n.x, n.y, i);
    },
    S = (n, i, a, s = {}) =>
      e.addShot({
        x: n,
        y: i,
        vx: Math.cos(a) * (s.speed || 400),
        vy: Math.sin(a) * (s.speed || 400),
        r: s.radius || 6,
        damage: s.damage ?? v(30),
        color: o,
        elementId: r.id,
        index: t,
        awakened: c,
        style: s.style,
        pierce: s.pierce || 0,
        bounce: s.bounce || 0,
        homing: s.homing || !1,
        returnToPlayer: s.returnToPlayer || !1,
        pull: s.pull || 0,
        knockback: s.knockback || 0,
        splash: s.splash || 0,
        split: s.split || 0,
        curve: s.curve || 0,
        accel: s.accel || 0,
        freeze: s.freeze || 0,
        stun: s.stun || 0,
        life: s.life || 3,
      }),
    C = (e, t) => S(a.x, a.y, e, t),
    w = (t, n, r, i, a, s = {}) =>
      e.addPool({
        x: t,
        y: n,
        r,
        life: i,
        dps: a,
        color: o,
        key: p,
        label: m,
        ...s,
      }),
    T = (n, i, a = {}) =>
      e.addMine({
        x: n,
        y: i,
        color: o,
        elementId: r.id,
        index: t,
        awakened: c,
        ...a,
      }),
    E = (e, t = {}) => {
      let i = t.radius || 46;
      for (let s = 0; s < e; s++) {
        let l = (s / e) * _;
        n.blades.push({
          angle: l,
          color: o,
          damage: t.damage ?? v(24),
          elementId: r.id,
          awakened: c,
          life: t.life || 4.5,
          orbit: i,
          cool: 0,
          x: a.x + Math.cos(l) * i,
          y: a.y + Math.sin(l) * i,
        });
      }
      b(a.x, a.y, i + 20);
    },
    D = (t, n) => {
      (e.burst(a.x, a.y, o, 10),
        (a.x = y(a.x + Math.cos(t) * n, 25, e.w - 25)),
        (a.y = y(a.y + Math.sin(t) * n, 25, e.h - 25)),
        e.burst(a.x, a.y, o, 10));
    },
    O = (n, i, o) => {
      let s = 0;
      for (let o of e.enemies()) {
        if (Math.hypot(o.x - a.x, o.y - a.y) > n + o.r) continue;
        let l = o.hp;
        (e.hitEnemy(o, i, r.id, t, c), (s += Math.max(0, l - o.hp)));
      }
      return (e.heal(s * o), b(a.x, a.y, n), s);
    },
    k = g[r.id];
  if (r.id === `math`) {
    if (t === 0) {
      let target =
          e.mathPrisonTargetId == null
            ? u
            : e.enemies().find((enemy) => enemy.id === e.mathPrisonTargetId) ||
              u,
        center = target || a,
        targetAngle = target ? Math.atan2(center.y - a.y, center.x - a.x) : f,
        scale = e.mathPrisonScale ?? 1,
        width = Math.max(100, Math.min(e.w, e.h) * 0.42) * scale,
        height = width * Math.sqrt(2),
        turn = e.mathPrisonTurn || 0,
        angle = targetAngle + Math.PI / 2 + turn,
        cosine = Math.cos(targetAngle + turn),
        sine = Math.sin(targetAngle + turn);
      ((e.mathPrisonTargetId = target?.id ?? null),
        (e.mathPrisonScale = scale * 0.5),
        (e.mathPrisonTurn = (turn + Math.PI / 4) % (Math.PI * 2)));
      e.effect({
        kind: `mathPrison`,
        x: center.x,
        y: center.y,
        width,
        height,
        angle,
        color: o,
        duration: 1.6,
      });
      for (let enemy of e.enemies()) {
        let dx = enemy.x - center.x,
          dy = enemy.y - center.y,
          forward = dx * cosine + dy * sine,
          side = -dx * sine + dy * cosine;
        if (
          Math.abs(forward) > height / 2 + enemy.r ||
          Math.abs(side) > width / 2 + enemy.r
        )
          continue;
        enemy.stun = Math.max(enemy.stun || 0, 0.48);
      }
      return;
    }
    if (t === 1) {
      let enemies = [...e.enemies()];
      for (let enemy of enemies) {
        enemy.pause = Math.max(enemy.pause || 0, 0.55);
        for (let index = 0; index < 3; index++)
          e.effect({
            kind: `mathSpin`,
            x: enemy.x,
            y: enemy.y,
            radius: enemy.r + 18,
            angle: (index * Math.PI * 2) / 3,
            color: o,
            key: p,
            label: m,
            duration: 0.55,
          });
      }
      e.after(0.55, () => {
        for (let enemy of enemies)
          !enemy.dead && e.hitEnemy(enemy, enemy.hp + 1, r.id, t, c);
      });
      return;
    }
    if (t === 2) {
      for (let enemy of e.enemies()) {
        let dx = enemy.x - a.x,
          dy = enemy.y - a.y,
          distance = Math.hypot(dx, dy),
          direction = Math.atan2(dy, dx),
          difference = Math.atan2(
            Math.sin(direction - f),
            Math.cos(direction - f),
          );
        if (distance > 360 + enemy.r || Math.abs(difference) > Math.PI / 2)
          continue;
        enemy.x = Math.max(
          20,
          Math.min(e.w - 20, a.x + Math.cos(f) * distance),
        );
        enemy.y = Math.max(
          20,
          Math.min(e.h - 20, a.y + Math.sin(f) * distance),
        );
        enemy.stun = Math.max(enemy.stun || 0, 0.55);
        e.hitEnemy(enemy, v(140), r.id, t, c);
      }
      e.effect({
        kind: `mathNuke`,
        x: a.x,
        y: a.y,
        radius: 360,
        angle: f,
        color: o,
        key: p,
        label: m,
        duration: 0.7,
      });
      return;
    }
    if (t === 3) {
      e.mathCreationReady = !0;
      e.addLog(`MATHEMATICAL CREATION`, `Press 1, 2, or 3 to choose a result.`);
      e.emit();
      return;
    }
  }
  if (
    !(
      k &&
      k(t, {
        engine: e,
        st: n,
        awakened: c,
        hero: a,
        color: o,
        aimAngle: f,
        target: u,
        dmg: v,
        mark: b,
        shoot: C,
        spawn: S,
        pool: w,
        mine: T,
        ring: x,
        orbit: E,
      })
    )
  ) {
    if (t === 0) {
      if (r.id === `fire`) {
        let t = c ? 5 : 3;
        for (let n = 0; n < t; n++)
          e.after(n * (c ? 0.07 : 0.11), () =>
            C(f + (n - (t - 1) / 2) * 0.05, {
              speed: 470,
              radius: 5,
              damage: v(24),
              splash: 34,
              knockback: 8,
            }),
          );
        return;
      }
      if (r.id === `ice`) {
        C(f, {
          speed: 640,
          radius: 5,
          damage: v(c ? 76 : 56),
          style: `bolt`,
          freeze: c ? 3.4 : 2.2,
          split: c ? 6 : 0,
          pierce: +!!c,
        });
        return;
      }
      if (r.id === `nature`) {
        let t = c ? 3 : 2;
        for (let n = 0; n < t; n++)
          e.after(n * 0.1, () =>
            C(f + (n - (t - 1) / 2) * 0.14, {
              speed: 330,
              radius: 7,
              damage: v(36),
              homing: !0,
              style: `star`,
              pierce: 1,
            }),
          );
        return;
      }
      if (r.id === `water`) {
        let t = c ? 4 : 3;
        for (let n = 0; n < t; n++)
          e.after(n * 0.08, () =>
            C(f + (n - (t - 1) / 2) * 0.035, {
              speed: 620,
              radius: 4,
              damage: v(20),
              style: `bolt`,
              knockback: 16,
              pierce: 1,
            }),
          );
        return;
      }
      if (r.id === `light`) {
        let n = c ? 24 : 13,
          i = c ? 520 : 380;
        (e.beam(a, f, i, n, v(c ? 68 : 46), r.id, t, c),
          c &&
            e.after(0.16, () => {
              for (let n of e.enemies())
                n.mark > 0 && e.hitEnemy(n, v(32), r.id, t, !0);
            }));
        return;
      }
      if (r.id === `dark`) {
        (C(f, {
          speed: c ? 340 : 195,
          radius: c ? 10 : 15,
          damage: v(c ? 44 : 34),
          pierce: 99,
          pull: c ? 150 : 200,
          accel: c ? 260 : 0,
        }),
          c &&
            (e.after(0.12, () =>
              C(f + 0.42, {
                speed: 280,
                radius: 9,
                damage: v(26),
                pierce: 99,
                pull: 110,
              }),
            ),
            e.after(0.12, () =>
              C(f - 0.42, {
                speed: 280,
                radius: 9,
                damage: v(26),
                pierce: 99,
                pull: 110,
              }),
            )));
        return;
      }
      if (r.id === `poison`) {
        let t = c ? 4 : 3;
        for (let n = 0; n < t; n++)
          e.after(n * 0.06, () =>
            C(f + (n - (t - 1) / 2) * 0.12, {
              speed: 430,
              radius: 4,
              damage: v(16),
              style: `shard`,
              curve: (n % 2 ? -1 : 1) * (c ? 5.2 : 3.6),
              pierce: 1,
            }),
          );
        return;
      }
      if (r.id === `electric`) {
        c
          ? e.beam(a, f, 520, 16, v(94), r.id, t, !0)
          : u && (e.zap(u, v(44), 0.35, o, p, m), e.chain(u, v(24), 2));
        return;
      }
      if (r.id === `crystal`) {
        C(f, {
          speed: c ? 580 : 500,
          radius: 6,
          damage: v(c ? 52 : 34),
          style: `shard`,
          bounce: c ? 0 : 3,
          split: c ? 6 : 0,
          pierce: +!!c,
        });
        return;
      }
      if (r.id === `metal`) {
        c
          ? C(f, {
              speed: 400,
              radius: 13,
              damage: v(92),
              splash: 62,
              knockback: 64,
              accel: 220,
            })
          : C(f, {
              speed: 720,
              radius: 4,
              damage: v(46),
              style: `bolt`,
              pierce: 3,
              knockback: 18,
            });
        return;
      }
      if (r.id === `blood`) {
        e.hurtPlayer(c ? 4 : 3, !0);
        let t = c ? 4 : 3;
        for (let n = 0; n < t; n++)
          e.after(n * 0.06, () =>
            C(f + (n - (t - 1) / 2) * 0.06, {
              speed: 640,
              radius: 4,
              damage: v(c ? 32 : 24),
              style: `bolt`,
              pierce: 1,
            }),
          );
        return;
      }
      if (r.id === `time`) {
        let n = u
          ? { x: u.x, y: u.y }
          : { x: a.x + Math.cos(f) * 150, y: a.y + Math.sin(f) * 150 };
        (C(f, {
          speed: 780,
          radius: 7,
          damage: v(c ? 130 : 100),
          style: `ring`,
          pierce: 3,
        }),
          e.after(0.4, () => {
            for (let i of e.enemies())
              Math.hypot(i.x - n.x, i.y - n.y) > 120 + i.r ||
                (e.hitEnemy(i, v(c ? 90 : 70), r.id, t, c),
                (i.slow = Math.max(i.slow, 4)),
                (i.pause = Math.max(i.pause || 0, 0.6)));
            b(n.x, n.y, 120);
          }));
        return;
      }
      if (r.id === `wind`) {
        if (!c) {
          C(f, {
            speed: 700,
            radius: 5,
            damage: v(40),
            style: `bolt`,
            pierce: 2,
            knockback: 26,
          });
          return;
        }
        for (let t = 0; t < 3; t++)
          e.after(t * 0.08, () =>
            C(f, {
              speed: 760,
              radius: 6,
              damage: v(46),
              style: `bolt`,
              pierce: 99,
              knockback: 40,
            }),
          );
        n.shake = Math.max(n.shake, 0.06);
        return;
      }
      if (r.id === `soul`) {
        if (!c) {
          C(f, { speed: 300, radius: 9, damage: v(34), homing: !0, pierce: 1 });
          return;
        }
        if (l === `life`) {
          (e.beam(a, f, 380, 16, v(50), r.id, t, !0), e.heal(22));
          return;
        }
        e.beam(a, f, 260, 70, v(44), r.id, t, !0);
        for (let n of e.enemies()) {
          let i = Math.hypot(n.x - a.x, n.y - a.y),
            o = Math.atan2(n.y - a.y, n.x - a.x),
            s = Math.atan2(Math.sin(o - f), Math.cos(o - f));
          i > 300 ||
            Math.abs(s) > 0.6 ||
            (n.hp < n.maxHp * 0.4 && e.hitEnemy(n, v(90), r.id, t, !0));
        }
        return;
      }
      if (r.id === `space`) {
        C(f, {
          speed: c ? 580 : 480,
          radius: 7,
          damage: v(c ? 58 : 42),
          style: `ring`,
          homing: !0,
          pierce: c ? 3 : 2,
          pull: c ? 170 : 120,
        });
        return;
      }
      if (r.id === `creation`) {
        for (let t = 1; t <= 3; t++) {
          let n = {
            x: a.x + Math.cos(f) * t * 62,
            y: a.y + Math.sin(f) * t * 62,
          };
          e.after(t * 0.05, () =>
            T(n.x, n.y, { blast: 54, fuse: 0.7, damage: v(46), stun: 0.4 }),
          );
        }
        return;
      }
      let i = c ? 5 : 3;
      for (let t = 0; t < i; t++)
        e.after(t * 0.07, () =>
          C(f + (t - (i - 1) / 2) * 0.1, {
            speed: 530,
            radius: 5,
            damage: v(c ? 26 : 19),
            style: `shard`,
            bounce: c ? 2 : 1,
          }),
        );
      return;
    }
    if (t === 1) {
      if (r.id === `fire`) {
        let e = c ? 16 : 12;
        for (let t = 0; t < e; t++)
          C((t / e) * _, { speed: 330, radius: 6, damage: v(22), splash: 30 });
        w(a.x, a.y, c ? 98 : 76, 2.4, v(9), { burn: !0 });
        return;
      }
      if (r.id === `ice`) {
        let e = c ? 9 : 5;
        for (let t = 0; t < e; t++)
          C(f + (t - (e - 1) / 2) * 0.16, {
            speed: 400,
            radius: 4,
            damage: v(20),
            style: `shard`,
            split: 3,
            freeze: 1.1,
          });
        return;
      }
      if (r.id === `nature`) {
        let n = c ? 255 : 205;
        for (let i of e.enemies()) {
          let o = Math.hypot(i.x - a.x, i.y - a.y);
          if (o > n + i.r) continue;
          let s = Math.atan2(i.y - a.y, i.x - a.x),
            l = Math.atan2(Math.sin(s - f), Math.cos(s - f));
          Math.abs(l) > 0.66 ||
            ((i.root = Math.max(i.root, c ? 3.4 : 2.2)),
            c &&
              o > 1 &&
              ((i.x += ((a.x - i.x) / o) * 46),
              (i.y += ((a.y - i.y) / o) * 46)),
            e.hitEnemy(i, v(42), r.id, t, c));
        }
        b(a.x + Math.cos(f) * n * 0.4, a.y + Math.sin(f) * n * 0.4, n * 0.7);
        return;
      }
      if (r.id === `water`) {
        let t = (e) =>
          C(f + e, {
            speed: 250,
            radius: 16,
            damage: v(44),
            pierce: 99,
            knockback: c ? 115 : 78,
            style: `ring`,
          });
        (t(0),
          c && (e.after(0.12, () => t(-0.24)), e.after(0.24, () => t(0.24))));
        return;
      }
      if (r.id === `light`) {
        let n = c ? 245 : 185;
        for (let i of e.enemies())
          Math.hypot(i.x - a.x, i.y - a.y) > n + i.r ||
            ((i.stun = Math.max(i.stun || 0, c ? 1.7 : 1.1)),
            (i.mark = Math.max(i.mark, c ? 8 : 5)),
            c && e.hitEnemy(i, v(40), r.id, t, !0));
        b(a.x, a.y, n);
        return;
      }
      if (r.id === `dark`) {
        let t = u || a,
          n = c ? 265 : 210;
        for (let r of e.enemies()) {
          let e = Math.hypot(r.x - t.x, r.y - t.y) || 1;
          if (e > n) continue;
          let i = (e - 26) * (c ? 0.85 : 0.6);
          ((r.x += ((t.x - r.x) / e) * i), (r.y += ((t.y - r.y) / e) * i));
        }
        (b(t.x, t.y, n),
          e.after(0.32, () => x(t, c ? 136 : 104, v(c ? 80 : 56))));
        return;
      }
      if (r.id === `poison`) {
        let e = u || a;
        w(e.x, e.y, c ? 134 : 100, c ? 6 : 4.5, v(10), {
          poison: c ? 9 : 7,
          slow: 1.7,
          glitch: c ? 2.4 : 0,
        });
        return;
      }
      if (r.id === `electric`) {
        if (!u) return;
        (e.hitEnemy(u, v(c ? 42 : 28), r.id, t, c),
          e.chain(u, v(c ? 54 : 38), c ? 7 : 4),
          e.after(0.28, () => {
            for (let t of e.enemies())
              Math.hypot(t.x - a.x, t.y - a.y) < (c ? 190 : 140) &&
                (t.stun = Math.max(t.stun, c ? 1.2 : 0.7));
          }));
        return;
      }
      if (r.id === `crystal`) {
        let t = c ? 12 : 4;
        for (let n = 0; n < t; n++) {
          let r = c ? (n / t) * _ : f + (n - (t - 1) / 2) * 0.22;
          e.after(n * 0.03, () =>
            C(r, {
              speed: 470,
              radius: 5,
              damage: v(20),
              style: `shard`,
              split: 3,
            }),
          );
        }
        return;
      }
      if (r.id === `metal`) {
        if (
          (E(c ? 6 : 3, {
            radius: c ? 56 : 44,
            damage: v(c ? 30 : 24),
            life: c ? 6 : 4.6,
          }),
          c)
        )
          for (let t = 0; t < 10; t++)
            e.after(t * 0.02, () =>
              C((t / 10) * _, {
                speed: 390,
                radius: 4,
                damage: v(18),
                style: `shard`,
                pierce: 1,
              }),
            );
        return;
      }
      if (r.id === `blood`) {
        let t = c ? 3 : 2;
        for (let n = 0; n < t; n++)
          e.after(n * 0.14, () =>
            C(f, {
              speed: 280,
              radius: 15,
              damage: v(c ? 38 : 30),
              pierce: 99,
              knockback: 46,
              style: `ring`,
            }),
          );
        let n = { x: a.x + Math.cos(f) * 118, y: a.y + Math.sin(f) * 118 };
        (w(n.x, n.y, c ? 108 : 88, 3.4, v(9), { slow: 1.4 }),
          O(70, v(14), 0.3));
        return;
      }
      if (r.id === `time`) {
        let i = u || a,
          o = c ? 300 : 250;
        for (let n of e.enemies())
          Math.hypot(n.x - i.x, n.y - i.y) > o + n.r ||
            ((n.pause = Math.max(n.pause || 0, c ? 9 : 7)),
            (n.slow = Math.max(n.slow, 6)),
            e.hitEnemy(n, v(c ? 120 : 90), r.id, t, c));
        ((n.enemyShots = n.enemyShots.filter(
          (e) => Math.hypot(e.x - i.x, e.y - i.y) > o,
        )),
          b(i.x, i.y, o));
        return;
      }
      if (r.id === `wind`) {
        if (!c) {
          for (let e = 0; e < 9; e++)
            C((e / 9) * _, {
              speed: 380,
              radius: 5,
              damage: v(20),
              style: `shard`,
              curve: 3.2,
              knockback: 14,
            });
          return;
        }
        let t = (e) =>
          C(f + e, {
            speed: 250,
            radius: 17,
            damage: v(42),
            pierce: 99,
            style: `ring`,
            knockback: 110,
          });
        (t(0), e.after(0.14, () => t(-0.22)), e.after(0.28, () => t(0.22)));
        return;
      }
      if (r.id === `soul`) {
        if (!c) {
          for (let n of e.enemies()) {
            if (Math.hypot(n.x - a.x, n.y - a.y) > 210 + n.r) continue;
            let i = Math.atan2(n.y - a.y, n.x - a.x),
              o = Math.atan2(Math.sin(i - f), Math.cos(i - f));
            Math.abs(o) > 0.8 ||
              ((n.slow = Math.max(n.slow, 2.2)),
              (n.stun = Math.max(n.stun || 0, 0.4)),
              e.hitEnemy(n, v(34), r.id, t, !1));
          }
          b(a.x + Math.cos(f) * 90, a.y + Math.sin(f) * 90, 120);
          return;
        }
        if (l === `life`) {
          for (let t = 0; t < 3; t++)
            e.after(t * 0.3, () => {
              (e.heal(12), x(a, 150 + t * 20, v(26)));
            });
          return;
        }
        let n = u || a;
        w(n.x, n.y, 130, 5, v(11), { slow: 2.6, poison: 5 });
        for (let t = 0; t < 6; t++)
          e.after(t * 0.04, () =>
            S(n.x, n.y, (t / 6) * _, {
              speed: 170,
              radius: 6,
              damage: v(16),
              style: `shard`,
            }),
          );
        return;
      }
      if (r.id === `space`) {
        let n = c ? 235 : 195;
        for (let i of e.enemies()) {
          if (Math.hypot(i.x - a.x, i.y - a.y) > n + i.r) continue;
          let o = i.x,
            s = i.y;
          (e.hitEnemy(i, v(c ? 56 : 42), r.id, t, c),
            !i.dead &&
              (T(o, s, {
                blast: 48,
                fuse: 0.45,
                damage: v(c ? 34 : 24),
                stun: 0.4,
              }),
              (i.x = y(a.x - (o - a.x), 25, e.w - 25)),
              (i.y = y(a.y - (s - a.y), 25, e.h - 25)),
              (i.stun = Math.max(i.stun || 0, c ? 0.8 : 0.5))));
        }
        b(a.x, a.y, n);
        return;
      }
      if (r.id === `creation`) {
        let t = c ? 6 : 4;
        for (let n = 0; n < t; n++) e.placeWall((n / t) * _ + f);
        ((n.shield = Math.max(n.shield, c ? 10 : 7)),
          (n.invuln = Math.max(n.invuln, 0.4)));
        for (let t of e.enemies()) {
          let e = Math.hypot(t.x - a.x, t.y - a.y) || 1;
          if (e > 110) continue;
          let n = c ? 52 : 36;
          ((t.x += ((t.x - a.x) / e) * n), (t.y += ((t.y - a.y) / e) * n));
        }
        b(a.x, a.y, 115);
        return;
      }
      let i = u || { x: a.x + Math.cos(f) * 170, y: a.y + Math.sin(f) * 170 };
      w(i.x, i.y, c ? 148 : 116, c ? 6 : 4.5, v(11), {
        glitch: c ? 2.6 : 2,
        slow: 1.8,
      });
      let o = c ? 6 : 4;
      for (let t = 0; t < o; t++)
        e.after(t * 0.08, () =>
          S(i.x, i.y, (t / o) * _, {
            speed: 210,
            radius: 5,
            damage: v(16),
            style: `shard`,
          }),
        );
      return;
    }
    if (t === 2) {
      if (r.id === `fire`) {
        let t = [];
        for (let e = 0; e < (c ? 4 : 3); e++)
          t.push({
            x: a.x - d.x * (26 - e * 16),
            y: a.y - d.y * (26 - e * 16),
          });
        e.shiftPlayer(d, c ? 155 : 110);
        for (let e of t) w(e.x, e.y, c ? 58 : 42, 1.8, v(9), { burn: !0 });
        x(a, c ? 66 : 50, v(30));
        return;
      }
      if (r.id === `ice`) {
        (e.placeWall(f),
          c &&
            (e.placeWall(f + 0.42),
            e.placeWall(f - 0.42),
            w(a.x + Math.cos(f) * 66, a.y + Math.sin(f) * 66, 90, 3, v(8), {
              slow: 3,
            })));
        return;
      }
      if (r.id === `nature`) {
        let t = c ? 4 : 3;
        for (let n = 1; n <= t; n++)
          e.after(n * 0.35, () => e.heal(c ? 22 : 15));
        ((n.abilityTimers = n.abilityTimers.map((e, t) =>
          t === 2 ? e : Math.max(0, e - (c ? 3 : 2)),
        )),
          b(a.x, a.y, 70));
        return;
      }
      if (r.id === `water`) {
        ((n.shield = Math.max(n.shield, c ? 9 : 6)),
          (n.invuln = Math.max(n.invuln, c ? 1.1 : 0.7)),
          w(a.x, a.y, c ? 165 : 125, 2.6, v(5), { slow: 2.4 }));
        return;
      }
      if (r.id === `light`) {
        ((n.shield = Math.max(n.shield, c ? 12 : 8)),
          (n.invuln = Math.max(n.invuln, c ? 1.6 : 1)),
          e.heal(c ? 18 : 10),
          c && (n.reflect = Math.max(n.reflect, 2.5)),
          b(a.x, a.y, 74));
        return;
      }
      if (r.id === `dark`) {
        O(c ? 185 : 145, v(40), c ? 0.8 : 0.55);
        for (let t of e.enemies())
          Math.hypot(t.x - a.x, t.y - a.y) < (c ? 185 : 145) &&
            (t.slow = Math.max(t.slow, 1.6));
        return;
      }
      if (r.id === `poison`) {
        (e.cleanse(), e.heal(c ? 34 : 22));
        let t = c ? 6 : 4;
        for (let e = 0; e < t; e++) {
          let n = (e / t) * _;
          T(a.x + Math.cos(n) * 48, a.y + Math.sin(n) * 48, {
            blast: 48,
            fuse: 0.5,
            damage: v(24),
            poison: c ? 6 : 4,
          });
        }
        b(a.x, a.y, 62);
        return;
      }
      if (r.id === `electric`) {
        (D(f, c ? 190 : 152), (n.invuln = Math.max(n.invuln, 0.45)));
        for (let n of e.enemies())
          Math.hypot(n.x - a.x, n.y - a.y) > 120 ||
            (e.hitEnemy(n, v(c ? 46 : 28), r.id, t, c),
            (n.stun = Math.max(n.stun || 0, c ? 1.4 : 0.8)));
        b(a.x, a.y, 110);
        return;
      }
      if (r.id === `crystal`) {
        if (
          ((n.shield = Math.max(n.shield, c ? 12 : 8)),
          (n.reflect = Math.max(n.reflect, c ? 6 : 4)),
          c)
        )
          for (let e = 0; e < 8; e++) {
            let t = (e / 8) * _;
            T(a.x + Math.cos(t) * 56, a.y + Math.sin(t) * 56, {
              blast: 44,
              fuse: 0.42,
              damage: v(30),
            });
          }
        b(a.x, a.y, 84);
        return;
      }
      if (r.id === `metal`) {
        if (
          ((n.shield = Math.max(n.shield, c ? 20 : 12)),
          (n.invuln = Math.max(n.invuln, c ? 0.8 : 0.4)),
          c)
        ) {
          n.reflect = Math.max(n.reflect, 4);
          for (let e = 0; e < 6; e++) {
            let t = (e / 6) * _;
            T(a.x + Math.cos(t) * 52, a.y + Math.sin(t) * 52, {
              blast: 50,
              fuse: 0.45,
              damage: v(34),
              stun: 0.6,
            });
          }
        }
        b(a.x, a.y, c ? 96 : 70);
        return;
      }
      if (r.id === `blood`) {
        let t = c ? 12 : 9,
          r = c ? 0.22 : 0.15;
        (e.hurtPlayer(t, !0),
          (n.rage = Math.max(n.rage, c ? 8 : 6)),
          (n.lifesteal += r),
          e.after(c ? 8 : 6, () => {
            n.lifesteal = Math.max(0, n.lifesteal - r);
          }),
          e.addLog(
            `OPEN VEIN`,
            `Blood spent: fury and stolen life for a few seconds.`,
          ),
          b(a.x, a.y, 70));
        return;
      }
      if (r.id === `time`) {
        let t = { x: a.x, y: a.y };
        (e.rewind(c ? 5 : 4),
          e.cleanse(),
          e.heal(c ? 100 : 80),
          (n.invuln = Math.max(n.invuln, c ? 3 : 2.4)),
          (n.shield = Math.max(n.shield, c ? 12 : 9)),
          w(t.x, t.y, c ? 170 : 140, c ? 4 : 3.2, v(16), { slow: 4 }),
          x(t, c ? 170 : 140, v(70)),
          b(t.x, t.y, c ? 170 : 140));
        return;
      }
      if (r.id === `wind`) {
        if (!c) {
          for (let n of e.enemies()) {
            let i = Math.hypot(n.x - a.x, n.y - a.y) || 1;
            i > 150 ||
              ((n.x += ((n.x - a.x) / i) * 66),
              (n.y += ((n.y - a.y) / i) * 66),
              e.hitEnemy(n, v(24), r.id, t, !1));
          }
          (D(f + Math.PI, 125),
            (n.invuln = Math.max(n.invuln, 0.4)),
            b(a.x, a.y, 150));
          return;
        }
        (D(f, 120),
          (n.invuln = Math.max(n.invuln, 0.5)),
          e.after(0.14, () => {
            (D(f, 120), (n.invuln = Math.max(n.invuln, 0.5)), x(a, 110, v(44)));
          }));
        return;
      }
      if (r.id === `soul`) {
        if (!c) {
          ((n.invuln = Math.max(n.invuln, 1.4)),
            e.heal(14),
            e.shiftPlayer(d, 60),
            b(a.x, a.y, 70));
          return;
        }
        if (l === `life`) {
          (e.cleanse(),
            e.heal(48),
            (n.shield = Math.max(n.shield, 7)),
            (n.invuln = Math.max(n.invuln, 0.8)),
            b(a.x, a.y, 84));
          return;
        }
        if (u) {
          let e = Math.hypot(u.x - a.x, u.y - a.y) || 1;
          D(Math.atan2(u.y - a.y, u.x - a.x), Math.max(0, e - 40));
        } else D(f, 170);
        ((n.invuln = Math.max(n.invuln, 0.9)), O(140, v(46), 0.7));
        return;
      }
      if (r.id === `space`) {
        let t = { x: a.x, y: a.y };
        (D(f, c ? 265 : 220),
          (n.invuln = Math.max(n.invuln, c ? 1.3 : 1)),
          w(t.x, t.y, c ? 112 : 94, c ? 3.4 : 2.6, v(9), { slow: 2.2 }),
          e.after(0.18, () => {
            for (let n of e.enemies()) {
              let e = Math.hypot(n.x - t.x, n.y - t.y) || 1;
              if (e > (c ? 150 : 120)) continue;
              let r = Math.min(e - 14, e * 0.55);
              ((n.x += ((t.x - n.x) / e) * r), (n.y += ((t.y - n.y) / e) * r));
            }
          }),
          e.after(0.52, () => x(t, c ? 128 : 104, v(c ? 52 : 36))),
          b(t.x, t.y, c ? 112 : 94));
        return;
      }
      if (r.id === `creation`) {
        let t = { x: a.x + Math.cos(f) * 72, y: a.y + Math.sin(f) * 72 };
        (w(t.x, t.y, c ? 110 : 88, c ? 5 : 3.8, v(10), { burn: !0 }),
          (n.shield = Math.max(n.shield, c ? 6 : 4)));
        let r = c ? 4 : 3;
        for (let n = 1; n <= r; n++)
          e.after(n * 0.5, () => {
            Math.hypot(a.x - t.x, a.y - t.y) > 150 ||
              (e.heal(c ? 14 : 10), e.burst(a.x, a.y, o, 6));
          });
        b(t.x, t.y, c ? 110 : 88);
        return;
      }
      ((n.shield = Math.max(n.shield, c ? 10 : 7)),
        (n.invuln = Math.max(n.invuln, c ? 1 : 0.7)),
        (n.reflect = Math.max(n.reflect, c ? 3.2 : 2.2)));
      for (let n of e.enemies())
        Math.hypot(n.x - a.x, n.y - a.y) > 130 ||
          (e.hitEnemy(n, v(22), r.id, t, c),
          (n.glitch = Math.max(n.glitch, 2.4)),
          (n.stun = Math.max(n.stun || 0, 0.35)));
      b(a.x, a.y, 120);
      return;
    }
    if (r.id === `fire`) {
      let n = c ? 400 : 300;
      e.beam(a, f, n, c ? 56 : 40, v(c ? 88 : 62), r.id, t, c);
      for (let t = 1; t <= 4; t++) {
        let r = {
          x: a.x + Math.cos(f) * ((n * t) / 5),
          y: a.y + Math.sin(f) * ((n * t) / 5),
        };
        e.after(t * 0.09, () => x(r, c ? 78 : 58, v(28)));
      }
      return;
    }
    if (r.id === `ice`) {
      let n = c ? 280 : 200;
      for (let i of e.enemies())
        if (
          !(Math.hypot(i.x - a.x, i.y - a.y) > n + i.r) &&
          (e.hitEnemy(i, v(c ? 60 : 42), r.id, t, c),
          (i.root = Math.max(i.root, c ? 4.5 : 3)),
          (i.slow = Math.max(i.slow, 5)),
          c)
        )
          for (let e = 0; e < 4; e++)
            S(i.x, i.y, (e / 4) * _, {
              speed: 300,
              radius: 4,
              damage: v(22),
              style: `shard`,
              life: 0.5,
            });
      b(a.x, a.y, n);
      return;
    }
    if (r.id === `nature`) {
      let t = c ? 7 : 5;
      for (let n = 1; n <= t; n++) {
        let t = {
          x: a.x + Math.cos(f) * n * 52,
          y: a.y + Math.sin(f) * n * 52,
        };
        e.after(n * 0.06, () =>
          T(t.x, t.y, {
            blast: 46,
            fuse: 0.26,
            damage: v(48),
            root: c ? 2.6 : 1.5,
          }),
        );
      }
      return;
    }
    if (r.id === `water`) {
      let t = c ? 26 : 18;
      for (let n = 0; n < t; n++)
        e.after(n * 0.012, () =>
          C((n / t) * _, {
            speed: 380,
            radius: 7,
            damage: v(26),
            knockback: 42,
            pierce: 2,
            style: `ring`,
          }),
        );
      b(a.x, a.y, 90);
      return;
    }
    if (r.id === `light`) {
      let i = { x: a.x, y: a.y };
      (D(f, c ? 250 : 190), (n.invuln = Math.max(n.invuln, 0.5)));
      for (let n of e.enemies())
        Math.hypot(n.x - a.x, n.y - a.y) < (c ? 150 : 110) + n.r &&
          e.hitEnemy(n, v(c ? 70 : 48), r.id, t, c);
      if (c)
        for (let e = 0; e < 6; e++)
          C((e / 6) * _, {
            speed: 320,
            radius: 5,
            damage: v(26),
            homing: !0,
            style: `star`,
          });
      (e.burst(i.x, i.y, o, 14), b(a.x, a.y, c ? 150 : 110));
      return;
    }
    if (r.id === `dark`) {
      if (c && u) {
        let t = Math.hypot(a.x - u.x, a.y - u.y) || 1;
        (D(Math.atan2(u.y - a.y, u.x - a.x), Math.max(0, t - 46)),
          x(a, 165, v(96)),
          e.heal(30),
          (n.invuln = Math.max(n.invuln, 1)));
      } else {
        let i = { x: a.x, y: a.y };
        D(f, 175);
        for (let n of e.enemies())
          Math.hypot(n.x - a.x, n.y - a.y) < 90 + n.r &&
            e.hitEnemy(n, v(74), r.id, t, c);
        (e.effect({
          kind: `line`,
          fromX: i.x,
          fromY: i.y,
          x: a.x,
          y: a.y,
          color: o,
          key: p,
          label: m,
          duration: 0.4,
        }),
          (n.invuln = Math.max(n.invuln, 0.6)));
      }
      return;
    }
    if (r.id === `poison`) {
      let t = c ? 240 : 180;
      w(a.x, a.y, t, 4.5, v(8), { poison: 7, slow: 1.3 });
      for (let n of e.enemies())
        Math.hypot(n.x - a.x, n.y - a.y) > t + n.r ||
          (n.poison = Math.max(n.poison, c ? 8 : 5.5));
      e.after(0.4, () => {
        for (let t of e.enemies())
          if (!(t.poison <= 0)) {
            e.damageEnemy(t, v(c ? 40 : 26));
            for (let n of e.enemies())
              n !== t &&
                Math.hypot(n.x - t.x, n.y - t.y) < 84 &&
                (n.poison = Math.max(n.poison, c ? 6 : 4));
          }
      });
      return;
    }
    if (r.id === `electric`) {
      let t = (t, n, r, i) =>
        e.after(t, () => {
          for (let e = 0; e < n; e++)
            S(a.x, a.y, (e / n) * _ + t, {
              speed: 540,
              radius: 5,
              damage: v(r),
              style: `bolt`,
              pierce: 1,
              stun: i,
            });
        });
      (c
        ? (t(0, 14, 40, 0.5), t(0.16, 14, 40, 0.5), t(0.32, 14, 40, 0.5))
        : t(0, 18, 46, 0.4),
        b(a.x, a.y, 120));
      return;
    }
    if (r.id === `crystal`) {
      let n = (n, i, o) => e.beam(a, f + n, c ? 400 : 300, o, v(i), r.id, t, c);
      (n(0, c ? 100 : 70, c ? 60 : 42), c && (n(-0.3, 58, 30), n(0.3, 58, 30)));
      for (let t = 0; t < 6; t++) {
        let n = 70 + t * 44;
        e.after(t * 0.05, () =>
          S(
            a.x + Math.cos(f) * n,
            a.y + Math.sin(f) * n,
            f + (t % 2 ? 0.7 : -0.7),
            {
              speed: 330,
              radius: 5,
              damage: v(24),
              style: `shard`,
              split: 2,
              life: 0.8,
            },
          ),
        );
      }
      return;
    }
    if (r.id === `metal`) {
      let t = c ? 320 : 235;
      for (let n of e.enemies()) {
        let e = Math.hypot(a.x - n.x, a.y - n.y) || 1;
        if (e > t) continue;
        let r = Math.min(e - 30, e * (c ? 0.8 : 0.6));
        ((n.x += ((a.x - n.x) / e) * r), (n.y += ((a.y - n.y) / e) * r));
      }
      (b(a.x, a.y, t),
        e.after(0.3, () => {
          if ((x(a, c ? 150 : 112, v(c ? 122 : 84)), c))
            for (let t of e.enemies())
              Math.hypot(t.x - a.x, t.y - a.y) < 150 &&
                (t.stun = Math.max(t.stun || 0, 1.1));
        }));
      return;
    }
    if (r.id === `blood`) {
      let n = c ? 300 : 240,
        i = 0;
      for (let o of e.enemies()) {
        if (Math.hypot(o.x - a.x, o.y - a.y) > n + o.r) continue;
        let s = o.hp,
          l = o.hp < o.maxHp * 0.35;
        (e.hitEnemy(o, v(l ? (c ? 150 : 110) : c ? 88 : 66), r.id, t, c),
          (i += Math.max(0, s - o.hp)),
          (o.slow = Math.max(o.slow, 1.6)));
      }
      (e.heal(i * (c ? 0.12 : 0.08)), b(a.x, a.y, n));
      return;
    }
    if (r.id === `time`) {
      let i = c ? 12 : 10;
      for (let n of e.enemies())
        ((n.pause = Math.max(n.pause || 0, i)),
          (n.slow = Math.max(n.slow, 8)),
          e.hitEnemy(n, v(c ? 260 : 200), r.id, t, c));
      ((n.enemyShots = []),
        (n.abilityTimers = n.abilityTimers.map((e, n) => (n === t ? e : 0))),
        (n.health = n.maxHealth),
        (n.shield = Math.max(n.shield, 14)),
        (n.moveSpeed *= 1.8),
        (n.invuln = Math.max(n.invuln, i)),
        e.after(i, () => {
          ((n.moveSpeed /= 1.8), x(a, 220, v(120)));
          for (let t of e.enemies()) t.stun = Math.max(t.stun || 0, c ? 4 : 3);
        }),
        b(a.x, a.y, e.w));
      return;
    }
    if (r.id === `wind`) {
      let t = u || { x: a.x + Math.cos(f) * 200, y: a.y + Math.sin(f) * 200 },
        n = c ? 220 : 175;
      for (let r of e.enemies()) {
        let e = Math.hypot(r.x - t.x, r.y - t.y) || 1;
        if (e > n) continue;
        let i = (e - 24) * (c ? 0.9 : 0.7);
        ((r.x += ((t.x - r.x) / e) * i),
          (r.y += ((t.y - r.y) / e) * i),
          (r.slow = Math.max(r.slow, 1.2)));
      }
      (b(t.x, t.y, n),
        e.after(0.32, () => {
          if ((x(t, c ? 120 : 96, v(c ? 82 : 58)), c))
            for (let n of e.enemies())
              Math.hypot(n.x - t.x, n.y - t.y) < 150 &&
                (n.stun = Math.max(n.stun || 0, 1));
        }));
      return;
    }
    if (r.id === `soul`) {
      if (!c) {
        O(190, v(52), 0.65);
        for (let t of e.enemies())
          Math.hypot(t.x - a.x, t.y - a.y) < 190 &&
            (t.mark = Math.max(t.mark, 4));
        return;
      }
      if (l === `life`) {
        (E(4, { radius: 64, damage: v(30), life: 6 }),
          e.heal(24),
          x(a, 120, v(20)),
          b(a.x, a.y, 120));
        return;
      }
      for (let t of e.enemies()) {
        let e = Math.hypot(t.x - a.x, t.y - a.y) || 1;
        if (e > 280) continue;
        let n = Math.min(e - 40, e * 0.75);
        ((t.x += ((a.x - t.x) / e) * n), (t.y += ((a.y - t.y) / e) * n));
      }
      (b(a.x, a.y, 280),
        e.after(0.25, () => {
          O(170, v(110), 0.5);
          for (let t of e.enemies())
            Math.hypot(t.x - a.x, t.y - a.y) < 170 &&
              (t.stun = Math.max(t.stun || 0, 0.7));
        }));
      return;
    }
    if (r.id === `space`) {
      let t = c ? 330 : 265;
      for (let n of e.enemies()) {
        let e = Math.hypot(n.x - a.x, n.y - a.y) || 1;
        if (e > t) continue;
        let r = Math.min(e - 34, e * 0.8);
        ((n.x += ((a.x - n.x) / e) * r), (n.y += ((a.y - n.y) / e) * r));
      }
      (b(a.x, a.y, t),
        e.after(0.3, () => {
          x(a, c ? 150 : 118, v(c ? 116 : 86));
          for (let t of e.enemies()) {
            let n = Math.hypot(t.x - a.x, t.y - a.y) || 1;
            if (n > 175) continue;
            let r = c ? 120 : 88;
            ((t.x = y(t.x + ((t.x - a.x) / n) * r, 20, e.w - 20)),
              (t.y = y(t.y + ((t.y - a.y) / n) * r, 20, e.h - 20)),
              (t.stun = Math.max(t.stun || 0, c ? 1.2 : 0.7)));
          }
        }));
      return;
    }
    if (r.id === `creation`) {
      for (let e = 0; e < 8; e++) {
        let t = (e / 8) * _;
        T(a.x + Math.cos(t) * 66, a.y + Math.sin(t) * 66, {
          blast: 60,
          fuse: 0.55,
          damage: v(40),
        });
      }
      (w(a.x, a.y, 130, 3.4, v(9)), e.heal(18), b(a.x, a.y, 130));
      return;
    }
    for (let n of e.enemies())
      (e.hitEnemy(n, v(c ? 104 : 74), r.id, t, c),
        (n.glitch = Math.max(n.glitch, 3.4)),
        (n.stun = Math.max(n.stun || 0, 0.9)),
        T(n.x, n.y, {
          blast: 46,
          fuse: 0.55,
          damage: v(c ? 38 : 26),
          stun: 0.3,
        }),
        e.burst(n.x, n.y, o, 8));
    b(a.x, a.y, 180);
  }
}
function y(e, t) {
  let n = e.replace(`#`, ``),
    r =
      n.length === 3
        ? n
            .split(``)
            .map((e) => e + e)
            .join(``)
        : n,
    i = parseInt(r, 16);
  return `rgba(${(i >> 16) & 255}, ${(i >> 8) & 255}, ${i & 255}, ${t})`;
}
function b(e, t, n) {
  let r = Math.max(0, 1 - n);
  if (
    (e.save(),
    (e.globalAlpha = r),
    (e.strokeStyle = t.color),
    (e.fillStyle = t.color),
    (e.lineWidth = 2.5),
    (e.lineCap = `round`),
    (e.lineJoin = `round`),
    (e.shadowColor = t.color),
    (e.shadowBlur = 18),
    t.kind === `line`)
  ) {
    e.globalAlpha = r * 0.22;
    e.lineWidth = 9;
    e.beginPath();
    e.moveTo(t.fromX, t.fromY);
    e.lineTo(t.x, t.y);
    e.stroke();
    e.globalAlpha = r;
    e.lineWidth = 2.5;
    e.beginPath();
    e.moveTo(t.fromX, t.fromY);
    e.lineTo(t.x, t.y);
    e.stroke();
    e.beginPath();
    e.arc(t.x, t.y, 4 + n * 10, 0, Math.PI * 2);
    e.fill();
  } else if (t.kind === `mathPrison`) {
    let scale = 1.1 - n * 0.1,
      rotation = t.angle + n * Math.PI * 2;
    e.save();
    e.translate(t.x, t.y);
    e.rotate(rotation);
    e.globalAlpha = r * 0.2;
    e.lineWidth = 7;
    e.strokeRect(
      (-t.width * scale) / 2,
      (-t.height * scale) / 2,
      t.width * scale,
      t.height * scale,
    );
    e.globalAlpha = r;
    e.lineWidth = 1.5;
    e.strokeRect(
      (-t.width * scale) / 2,
      (-t.height * scale) / 2,
      t.width * scale,
      t.height * scale,
    );
    e.globalAlpha = r * 0.65;
    e.strokeRect(
      (-t.width * scale * 0.94) / 2,
      (-t.height * scale * 0.94) / 2,
      t.width * scale * 0.94,
      t.height * scale * 0.94,
    );
    e.beginPath();
    e.moveTo(-t.width * scale * 0.11, -t.height * scale * 0.11);
    e.lineTo(t.width * scale * 0.11, t.height * scale * 0.11);
    e.moveTo(t.width * scale * 0.11, -t.height * scale * 0.11);
    e.lineTo(-t.width * scale * 0.11, t.height * scale * 0.11);
    e.stroke();
    e.restore();
  } else if (t.kind === `mathSpin`) {
    let rotation = performance.now() / 65 + t.angle,
      radius = t.radius * (1.1 - n * 0.45);
    for (let i = 0; i < 3; i++) {
      e.globalAlpha = r * (1 - i * 0.18);
      e.lineWidth = 2.5 - i * 0.45;
      e.beginPath();
      e.arc(
        t.x,
        t.y,
        radius + i * 4,
        rotation + (i * Math.PI * 2) / 3,
        rotation + (i * Math.PI * 2) / 3 + 1.5,
      );
      e.stroke();
    }
    e.globalAlpha = r;
  } else if (t.kind === `mathNuke`) {
    let radius = t.radius * (1.15 - n * 0.7),
      halfAngle = (Math.PI / 2) * (1 - n);
    e.beginPath();
    e.moveTo(t.x, t.y);
    e.arc(t.x, t.y, radius, t.angle - halfAngle, t.angle + halfAngle);
    e.closePath();
    e.globalAlpha = r * 0.14;
    e.fill();
    e.globalAlpha = r;
    e.lineWidth = 2.5;
    e.stroke();
  } else if (t.kind === `arc`) {
    let radius = t.radius * (0.6 + n * 0.5);
    e.beginPath();
    e.moveTo(t.x, t.y);
    e.arc(t.x, t.y, radius, t.angle - 0.9, t.angle + 0.9);
    e.closePath();
    e.globalAlpha = r * 0.14;
    e.fill();
    e.globalAlpha = r;
    e.lineWidth = 2.5;
    e.stroke();
    e.globalAlpha = r * 0.45;
    e.lineWidth = 1;
    e.beginPath();
    e.arc(t.x, t.y, radius * 0.9, t.angle - 0.78, t.angle + 0.78);
    e.stroke();
  } else {
    let i = (t.radius || 60) * (0.45 + n * 0.75);
    if (t.kind === `area`) {
      let gradient = e.createRadialGradient(t.x, t.y, i * 0.08, t.x, t.y, i);
      gradient.addColorStop(0, y(t.color, r * 0.16));
      gradient.addColorStop(0.72, y(t.color, r * 0.07));
      gradient.addColorStop(1, y(t.color, 0));
      e.fillStyle = gradient;
      e.beginPath();
      e.arc(t.x, t.y, i, 0, Math.PI * 2);
      e.fill();
    }
    e.globalAlpha = r;
    e.beginPath();
    e.arc(t.x, t.y, i, 0, Math.PI * 2);
    e.stroke();
    e.globalAlpha = r * 0.55;
    e.beginPath();
    e.arc(t.x, t.y, i * 0.78, 0, Math.PI * 2);
    e.stroke();
  }
  ((e.shadowBlur = 0),
    t.key &&
      ((e.globalAlpha = r * 0.85),
      (e.fillStyle = `#e5dcc9`),
      (e.font = `600 9px 'DM Mono', monospace`),
      (e.textAlign = `center`),
      e.fillText(`${t.key} · ${t.label}`, t.x, t.y - 22 - n * 10)),
    e.restore());
}
function x(e) {
  let { ctx: t, w: n, h: r, st: i } = e,
    o = performance.now(),
    s = e.element(),
    c = s ? s.color : `#7fd3c3`,
    l = e.colorway()?.glow || c;
  (t.save(),
    t.clearRect(0, 0, n, r),
    (t.fillStyle = `#0b0c12`),
    t.fillRect(0, 0, n, r),
    i.shake > 0 &&
      t.translate((Math.random() - 0.5) * 5, (Math.random() - 0.5) * 5));
  let u = t.createRadialGradient(
    n / 2,
    r / 2,
    24,
    n / 2,
    r / 2,
    Math.max(n, r) * 0.7,
  );
  (u.addColorStop(0, y(l, 0.13)),
    u.addColorStop(0.6, y(l, 0.03)),
    u.addColorStop(1, `rgba(0,0,0,0)`),
    (t.fillStyle = u),
    t.fillRect(0, 0, n, r),
    (t.fillStyle = `rgba(236,228,211,0.05)`));
  for (let e = 44; e < n - 36; e += 36)
    for (let n = 44; n < r - 36; n += 36) t.fillRect(e, n, 1.3, 1.3);
  (t.save(),
    t.translate(n / 2, r / 2),
    (t.lineWidth = 1),
    [Math.min(n, r) * 0.22, Math.min(n, r) * 0.36].forEach((e, n) => {
      ((t.strokeStyle = y(l, n ? 0.09 : 0.13)),
        t.setLineDash(n ? [3, 10] : []),
        t.beginPath(),
        t.arc(0, 0, e, 0, Math.PI * 2),
        t.stroke());
    }),
    t.setLineDash([]),
    t.restore(),
    (t.strokeStyle = `rgba(236,228,211,0.12)`),
    (t.lineWidth = 1),
    t.strokeRect(16.5, 16.5, n - 33, r - 33));
  for (let n of e.decor)
    ((t.fillStyle = y(l, 0.05 + Math.sin(o / 900 + n.phase) * 0.02)),
      t.beginPath(),
      t.arc(n.x, n.y, n.r, 0, Math.PI * 2),
      t.fill());
  if (i.gateOpen) {
    let e = 14 + Math.sin(o / 180) * 3;
    (t.save(),
      (t.strokeStyle = `#c9a86a`),
      (t.shadowColor = `#c9a86a`),
      (t.shadowBlur = 16),
      (t.lineWidth = 2),
      t.beginPath(),
      t.arc(n / 2, 32, e, 0, Math.PI * 2),
      t.stroke(),
      (t.fillStyle = `#e8dcc2`),
      (t.font = `600 8px 'DM Mono', monospace`),
      (t.textAlign = `center`),
      t.fillText(`EXIT`, n / 2, 62),
      t.restore());
  }
  for (let e of i.walls) {
    (t.save(),
      t.translate(e.x, e.y),
      (t.globalAlpha =
        Math.min(1, e.life) * (0.82 + Math.sin(o / 110 + e.x) * 0.18)),
      (t.fillStyle = y(`#80c9e8`, 0.16)),
      (t.strokeStyle = `#b8edff`),
      (t.shadowColor = `#80c9e8`),
      (t.shadowBlur = 18),
      (t.lineWidth = 2),
      t.beginPath());
    for (let n = 0; n < 6; n++) {
      let r = (n * Math.PI) / 3,
        i = Math.cos(r) * e.r,
        a = Math.sin(r) * e.r;
      n === 0 ? t.moveTo(i, a) : t.lineTo(i, a);
    }
    (t.closePath(),
      t.fill(),
      t.stroke(),
      (t.shadowBlur = 0),
      (t.globalAlpha *= 0.55),
      t.beginPath());
    for (let n = 0; n < 6; n++) {
      let r = (n * Math.PI) / 3,
        i = Math.cos(r) * e.r * 0.55,
        a = Math.sin(r) * e.r * 0.55;
      n === 0 ? t.moveTo(i, a) : t.lineTo(i, a);
    }
    (t.closePath(), t.stroke(), t.restore());
  }
  for (let e of i.effects) b(t, e, 1 - e.life / e.duration);
  for (let e of i.pools || []) {
    let n = Math.min(1, e.life / 0.6),
      r = t.createRadialGradient(e.x, e.y, 0, e.x, e.y, e.r);
    (r.addColorStop(0, y(e.color, 0.34 * n)),
      r.addColorStop(0.7, y(e.color, 0.16 * n)),
      r.addColorStop(1, y(e.color, 0)),
      (t.fillStyle = r),
      t.beginPath(),
      t.arc(e.x, e.y, e.r, 0, Math.PI * 2),
      t.fill(),
      (t.strokeStyle = y(e.color, 0.35 * n)),
      (t.lineWidth = 1.5),
      t.beginPath(),
      t.arc(e.x, e.y, e.r * 0.92, 0, Math.PI * 2),
      t.stroke());
  }
  for (let e of i.shots) {
    let n = Math.atan2(e.vy, e.vx);
    if (
      (t.save(),
      t.translate(e.x, e.y),
      (t.globalAlpha = Math.min(1, e.life * 1.6)),
      (t.shadowColor = e.color),
      (t.shadowBlur = 16),
      e.style === `bolt`)
    )
      (t.rotate(n),
        (t.fillStyle = y(e.color, 0.3)),
        t.fillRect(-e.r * 4, -e.r * 0.6, e.r * 4, e.r * 1.2),
        (t.fillStyle = e.color),
        t.fillRect(-e.r * 1.4, -e.r * 0.5, e.r * 2.1, e.r));
    else if (e.style === `shard`)
      (t.rotate(n + Math.PI / 2),
        (t.fillStyle = e.color),
        t.beginPath(),
        t.moveTo(0, -e.r * 2.2),
        t.lineTo(e.r, 0),
        t.lineTo(0, e.r * 1.5),
        t.lineTo(-e.r, 0),
        t.closePath(),
        t.fill());
    else if (e.style === `ring`)
      ((t.strokeStyle = e.color),
        (t.lineWidth = 2.5),
        t.beginPath(),
        t.arc(0, 0, e.r * (1.45 + Math.sin(o / 45) * 0.12), 0, Math.PI * 2),
        t.stroke(),
        (t.fillStyle = y(e.color, 0.25)),
        t.fill(),
        (t.globalAlpha *= 0.55),
        t.beginPath(),
        t.arc(0, 0, e.r * 0.55, 0, Math.PI * 2),
        t.fill());
    else if (e.style === `star`) {
      (t.rotate(o / 260), (t.strokeStyle = e.color), (t.lineWidth = 1.6));
      for (let n = 0; n < 4; n++) {
        let r = (n * Math.PI) / 4;
        (t.beginPath(),
          t.moveTo(-Math.cos(r) * e.r * 1.9, -Math.sin(r) * e.r * 1.9),
          t.lineTo(Math.cos(r) * e.r * 1.9, Math.sin(r) * e.r * 1.9),
          t.stroke());
      }
    } else
      ((t.strokeStyle = y(e.color, 0.5)),
        (t.lineWidth = 3),
        t.beginPath(),
        t.moveTo(-e.vx * 0.03, -e.vy * 0.03),
        t.lineTo(0, 0),
        t.stroke(),
        (t.fillStyle = e.color),
        t.beginPath(),
        t.arc(0, 0, e.r, 0, Math.PI * 2),
        t.fill());
    t.restore();
  }
  for (let e of i.mines || []) {
    let n = 1 - Math.max(0, Math.min(1, e.fuse / (e.fuseTotal || 1)));
    ((t.strokeStyle = y(e.color, 0.75)),
      (t.shadowColor = e.color),
      (t.shadowBlur = 12 + n * 12),
      (t.lineWidth = 1.6),
      t.setLineDash([4, 4]),
      t.beginPath(),
      t.arc(e.x, e.y, e.blast * (0.35 + n * 0.65), 0, Math.PI * 2),
      t.stroke(),
      t.setLineDash([]),
      (t.fillStyle = e.color),
      t.beginPath(),
      t.arc(e.x, e.y, 3 + n * 5, 0, Math.PI * 2),
      t.fill(),
      (t.shadowBlur = 0));
  }
  for (let e of i.blades)
    (t.save(),
      t.translate(e.x, e.y),
      t.rotate(e.angle),
      (t.shadowColor = e.color),
      (t.shadowBlur = 16),
      (t.fillStyle = e.color),
      (t.strokeStyle = `rgba(232,238,244,0.85)`),
      (t.lineWidth = 1),
      t.beginPath(),
      t.moveTo(0, -11),
      t.lineTo(4, -2),
      t.lineTo(0, 11),
      t.lineTo(-4, -2),
      t.closePath(),
      t.fill(),
      t.stroke(),
      t.restore());
  for (let e of i.enemyShots)
    (t.save(),
      (t.globalAlpha = Math.min(1, e.life * 1.4)),
      (t.strokeStyle = y(e.color || `#c25a6b`, 0.32)),
      (t.shadowColor = e.color || `#c25a6b`),
      (t.shadowBlur = 16),
      (t.lineWidth = 7),
      (t.lineCap = `round`),
      t.beginPath(),
      t.moveTo(e.x - e.vx * 0.05, e.y - e.vy * 0.05),
      t.lineTo(e.x, e.y),
      t.stroke(),
      (t.shadowBlur = 8),
      (t.fillStyle = e.color || `#c25a6b`),
      t.beginPath(),
      t.arc(e.x, e.y, e.r, 0, Math.PI * 2),
      t.fill(),
      (t.strokeStyle = `rgba(255,235,235,0.7)`),
      (t.lineWidth = 1.5),
      t.stroke(),
      t.restore());
  for (let n of i.entities) {
    if (n.type === `fragment`) {
      (t.save(),
        t.translate(n.x, n.y),
        t.rotate(n.spin),
        (t.globalAlpha = 0.3 + Math.sin(performance.now() / 90 + n.x) * 0.12),
        (t.strokeStyle = `#e8d8ff`),
        (t.lineWidth = 1),
        t.beginPath(),
        t.arc(0, 0, n.r * 1.65, 0, Math.PI * 2),
        t.stroke(),
        (t.globalAlpha = 1),
        (t.fillStyle = `#b78aff`),
        (t.shadowColor = `#b78aff`),
        (t.shadowBlur = 12),
        t.beginPath(),
        t.moveTo(0, -n.r),
        t.lineTo(n.r, 0),
        t.lineTo(0, n.r),
        t.lineTo(-n.r, 0),
        t.closePath(),
        t.fill(),
        t.restore(),
        n.value > 1 &&
          ((t.fillStyle = `#e5dcc9`),
          (t.font = `600 9px 'DM Mono', monospace`),
          (t.textAlign = `center`),
          t.fillText(`+${n.value}`, n.x, n.y - 14)));
      continue;
    }
    let r = n.type !== `enemy`,
      i =
        n.type === `awakenedBoss` ? a.find((e) => e.id === n.elementId) : null,
      o = i ? i.color : r ? `#c25a6b` : `#d9774d`;
    if (
      (t.save(),
      (t.globalAlpha = n.hit > 0 ? 0.55 : 1),
      (t.fillStyle = o),
      (t.shadowColor = o),
      (t.shadowBlur = r ? 18 : 8),
      t.beginPath(),
      t.arc(n.x, n.y, n.r, 0, Math.PI * 2),
      t.fill(),
      (t.shadowBlur = 0),
      n.hit > 0 &&
        ((t.globalAlpha = 0.9),
        (t.strokeStyle = `#ffffff`),
        (t.lineWidth = 2.5),
        t.beginPath(),
        t.arc(n.x, n.y, n.r + 3 + n.hit * 10, 0, Math.PI * 2),
        t.stroke(),
        (t.globalAlpha = 1)),
      r)
    ) {
      ((t.strokeStyle = y(`#f4e6d0`, 0.55)),
        (t.lineWidth = 2),
        t.stroke(),
        (t.fillStyle = `#e8dcc2`),
        (t.font = `600 8px 'DM Mono', monospace`),
        (t.textAlign = `center`));
      let r = i ? e.elementName(i) : `MINIBOSS`;
      (t.fillText(r, n.x, n.y + 3),
        (t.fillStyle = `rgba(255,255,255,0.16)`),
        t.fillRect(n.x - 34, n.y - n.r - 12, 68, 4),
        (t.fillStyle = i ? i.color : `#c25a6b`),
        t.fillRect(
          n.x - 34,
          n.y - n.r - 12,
          68 * Math.max(0, n.hp / n.maxHp),
          4,
        ));
    }
    t.restore();
  }
  for (let e of i.particles) {
    let alpha = Math.min(1, Math.max(0, e.life * 2.2));
    t.save();
    t.globalAlpha = alpha;
    t.strokeStyle = y(e.color, alpha * 0.45);
    t.lineWidth = e.size * 0.8;
    t.lineCap = `round`;
    t.shadowColor = e.color;
    t.shadowBlur = 8;
    t.beginPath();
    t.moveTo(e.x - e.vx * 0.035, e.y - e.vy * 0.035);
    t.lineTo(e.x, e.y);
    t.stroke();
    t.fillStyle = e.color;
    t.beginPath();
    t.arc(e.x, e.y, e.size, 0, Math.PI * 2);
    t.fill();
    t.restore();
  }
  let d = i.player;
  (i.invuln > 0 && Math.floor(o / 90) % 2 == 0 && (t.globalAlpha = 0.45),
    t.save(),
    (t.shadowColor = l),
    (t.shadowBlur = 20),
    (t.fillStyle = c),
    t.beginPath(),
    t.arc(d.x, d.y, d.r, 0, Math.PI * 2),
    t.fill(),
    t.restore(),
    (t.strokeStyle = `rgba(240,246,240,0.92)`),
    (t.lineWidth = 2),
    t.beginPath(),
    t.arc(d.x, d.y, d.r - 1.5, 0, Math.PI * 2),
    t.stroke());
  let f = Math.atan2(e.aim.y - d.y, e.aim.x - d.x);
  ((t.strokeStyle = y(c, 0.75)),
    (t.lineWidth = 2),
    t.beginPath(),
    t.moveTo(d.x + Math.cos(f) * (d.r + 5), d.y + Math.sin(f) * (d.r + 5)),
    t.lineTo(d.x + Math.cos(f) * (d.r + 13), d.y + Math.sin(f) * (d.r + 13)),
    t.stroke(),
    i.shield > 0 &&
      ((t.strokeStyle = y(`#9ad8f2`, 0.8)),
      (t.lineWidth = 1.5),
      t.beginPath(),
      t.arc(d.x, d.y, d.r + 7 + Math.sin(o / 110) * 1.5, 0, Math.PI * 2),
      t.stroke()),
    i.reflect > 0 &&
      ((t.strokeStyle = y(`#61c9a2`, 0.7)),
      t.setLineDash([4, 4]),
      t.beginPath(),
      t.arc(d.x, d.y, d.r + 12, 0, Math.PI * 2),
      t.stroke(),
      t.setLineDash([])),
    i.combo > 1 &&
      i.comboTimer > 0 &&
      ((t.fillStyle = `#e8c987`),
      (t.font = `600 14px 'Space Grotesk', sans-serif`),
      (t.textAlign = `center`),
      t.fillText(`x${i.combo}`, d.x, d.y - 26)),
    (t.globalAlpha = 1));
  let p = t.createRadialGradient(
    n / 2,
    r / 2,
    Math.min(n, r) * 0.28,
    n / 2,
    r / 2,
    Math.max(n, r) * 0.76,
  );
  (p.addColorStop(0, `rgba(0,0,0,0)`),
    p.addColorStop(1, `rgba(2,3,8,0.5)`),
    (t.fillStyle = p),
    t.fillRect(0, 0, n, r),
    t.restore());
}
var S = `elemental-descent-profile-v1`,
  C = a.filter((e) => e.world !== 2 && (e.awakeMoves || e.forms)),
  w = (e, t, n) => Math.max(t, Math.min(n, e)),
  T = (e, t) => Math.hypot(e.x - t.x, e.y - t.y),
  E = 1,
  D = () => ({
    fragments: 12,
    aquaticFragments: 0,
    unlocked: [],
    awakened: [],
    moves: {},
    forms: {},
    equipped: null,
    world2Equipped: null,
    world: 1,
    bestDepth: 1,
    world1Depth: 1,
    world2Depth: 1,
    world1Upgrades: {},
    world2Upgrades: {},
    colorwayUnlocked: !1,
    colorway: null,
  });
function O(e) {
  let t = c.map((t) => {
    let n = e[t.id] || 0;
    return {
      id: t.id,
      name: t.name,
      text: t.text,
      level: n,
      maxed: n >= 10,
    };
  });
  return {
    maxLevel: 10,
    used: t.filter((e) => e.level > 0).length,
    options: t,
  };
}
function loadUpgrades(e) {
  let t = {};
  for (let n of c) {
    let r = e?.[n.id];
    Number.isInteger(r) && r > 0 && (t[n.id] = Math.min(10, r));
  }
  return t;
}
function pickUpgradeChoices(e) {
  let t = c.filter((t) => (e[t.id] || 0) < 10);
  for (let e = t.length - 1; e > 0; e--) {
    let n = Math.floor(Math.random() * (e + 1));
    [t[e], t[n]] = [t[n], t[e]];
  }
  return t.slice(0, 3).map((e) => e.id);
}
function k() {
  try {
    let e = localStorage.getItem(S);
    if (!e) return D();
    let t = JSON.parse(e),
      n = new Set(a.map((e) => e.id)),
      r = D();
    ((r.fragments = Number.isFinite(t?.fragments)
      ? Math.max(0, Math.floor(t.fragments))
      : 0),
      (r.aquaticFragments = Number.isFinite(t?.aquaticFragments)
        ? Math.max(0, Math.floor(t.aquaticFragments))
        : 0),
      (r.unlocked = Array.isArray(t?.unlocked)
        ? t.unlocked.filter((e) => n.has(e))
        : []),
      (r.awakened = Array.isArray(t?.awakened)
        ? t.awakened.filter((e) => C.some((t) => t.id === e))
        : []));
    for (let e of a) {
      let n = e.forms
        ? Object.keys(e.forms).map((t) => `${e.id}:${t}`)
        : [e.id];
      for (let i of n) {
        let n = t?.moves?.[i];
        (e.awakeMoves || e.forms) &&
          Array.isArray(n) &&
          (r.moves[i] = [0, 1, 2, 3].map((e) => !!n[e]));
      }
      if (e.forms) {
        let n = t?.forms?.[e.id];
        n && e.forms[n] && (r.forms[e.id] = n);
      }
    }
    return (
      (r.bestDepth = Number.isInteger(t?.bestDepth)
        ? Math.max(1, t.bestDepth)
        : 1),
      (r.world1Depth = Number.isInteger(t?.world1Depth)
        ? Math.max(1, t.world1Depth)
        : r.bestDepth),
      (r.world2Depth = Number.isInteger(t?.world2Depth)
        ? Math.max(1, t.world2Depth)
        : 1),
      (r.world1Upgrades = loadUpgrades(t?.world1Upgrades)),
      (r.world2Upgrades = loadUpgrades(t?.world2Upgrades)),
      (r.world = t?.world === 2 && r.bestDepth >= 50 ? 2 : 1),
      (r.equipped =
        r.unlocked.includes(t?.equipped) &&
        a.some((e) => e.id === t.equipped && e.world !== 2)
          ? t.equipped
          : (r.unlocked.find((e) => a.some((n) => n.id === e && n.world !== 2)) ??
            null)),
      (r.world2Equipped =
        r.unlocked.includes(t?.world2Equipped) &&
        a.some((e) => e.id === t.world2Equipped && e.world === 2)
          ? t.world2Equipped
          : (r.unlocked.find((e) => a.some((n) => n.id === e && n.world === 2)) ??
            null)),
      (r.colorwayUnlocked = !!t?.colorwayUnlocked),
      (r.colorway =
        r.colorwayUnlocked && s.some((e) => e.id === t?.colorway)
          ? t.colorway
          : null),
      r
    );
  } catch {
    return D();
  }
}
function A() {
  return {
    room: 1,
    roomName: o[0],
    roomStatus: `CLEAR THE ROOM`,
    health: 100,
    maxHealth: 100,
    fragments: 0,
    score: 0,
    combo: 0,
    element: null,
    elements: a.filter((e) => (e.world || 1) === 1).map((e) => ({
      id: e.id,
      name: e.name,
      color: e.color,
      cost: e.cost,
      traits: getElementTraitDetails(e, !1),
      unlocked: !1,
      equipped: !1,
      awakened: !1,
    })),
    moves: i.map((e, t) => ({
      key: e.toUpperCase(),
      name: `ELEMENT MOVE ${t + 1}`,
      locked: !0,
      awakened: !1,
      ready: !0,
      buyable: !1,
      canBuy: !1,
      buyCost: 0,
    })),
    log: [],
    mode: null,
    over: !1,
    upgradeOpen: !1,
    upgradeChoices: [],
    gateOpen: !1,
    upgrades: O({}),
    colorways: { unlocked: !1, active: null, list: s },
    dashReady: !0,
    rangedReady: !0,
  };
}
var j = class {
    constructor(e, t = {}) {
      ((this.canvas = e),
        (this.ctx = e.getContext(`2d`)),
        (this.onSnapshot = t.onSnapshot),
        (this.profile = k()),
        (this.keys = new Set()),
        (this.aim = { x: 160, y: 150 }),
        (this.joystick = { x: 0, y: 0 }),
        (this.mode = null),
        (this.over = !1),
        (this.upgradeOpen = !1),
        (this.log = []),
        (this.w = 320),
        (this.h = 300),
        (this.emitTimer = 0),
        (this.raf = 0),
        (this.last = 0),
        (this.decor = []),
        (this.history = []),
        this.resetState(),
        this.addLog(`DESCENT`, `WASD to move · Q ranged · click melee.`));
    }
    resetState() {
      ((this.mathCreationReady = !1),
        (this.mathPrisonScale = 1),
        (this.mathPrisonTargetId = null),
        (this.mathPrisonTurn = 0),
        (this.mathShotUntil = 0),
        (this.st = {
          room:
            this.profile.world === 2
              ? this.profile.world2Depth
              : this.profile.world1Depth,
          time: 0,
          health: 100,
          maxHealth: 100,
          score: 0,
          combo: 0,
          comboTimer: 0,
          player: { x: this.w / 2, y: this.h / 2, r: 14 },
          entities: [],
          shots: [],
          enemyShots: [],
          particles: [],
          effects: [],
          walls: [],
          blades: [],
          pools: [],
          mines: [],
          delayed: [],
          rage: 0,
          rangedTimer: 0,
          meleeTimer: 0,
          dashTimer: 0,
          abilityTimers: [0, 0, 0, 0],
          damageBoost: 1,
          fireBoost: 1,
          attackSpeed: 1,
          moveSpeed: 180,
          dashCooldown: 0.8,
          meleeRange: 80,
          fragmentBonus: 0,
          upgrades: {},
          upgradeChoices: [],
          lifesteal: 0,
          rangedBoost: 1,
          abilitySpeed: 1,
          magnet: 14,
          guardian: 0,
          phase: 0,
          armor: 0,
          regeneration: 0,
          critical: 0,
          executioner: 0,
          meleeBoost: 1,
          abilityBoost: 1,
          splashBonus: 0,
          trickshot: 0,
          dashDistance: 0,
          evasion: 0,
          thorns: 0,
          roomHeal: 0,
          adrenaline: 0,
          meleeSpeed: 1,
          scoreBoost: 1,
          projectileSpeed: 1,
          guardianAngel: 0,
          shield: 0,
          reflect: 0,
          invuln: 0,
          status: { slow: 0, root: 0, stun: 0, poison: 0, glitch: 0 },
          roomCleared: !1,
          gateOpen: !1,
          bossElement: null,
          shake: 0,
        }),
        this.restoreUpgrades(),
        (this.history = []),
        (this.over = !1),
        (this.upgradeOpen = !1),
        this.keys.clear(),
        (this.joystick = { x: 0, y: 0 }));
    }
    restoreUpgrades() {
      let e =
        this.profile.world === 2
          ? this.profile.world2Upgrades
          : this.profile.world1Upgrades;
      for (let t of c) {
        let n = e[t.id] || 0;
        for (let e = 1; e <= n; e++) {
          this.st.upgrades[t.id] = e;
          this.applyUpgrade(t.id);
        }
      }
    }
    start() {
      (this.measure(),
        this.generateRoom(),
        this.emit(),
        (this.last = performance.now()));
      let e = (t) => {
        let n = Math.min(0.04, Math.max(0, (t - this.last) / 1e3));
        ((this.last = t),
          this.update(n),
          x(this),
          (this.raf = requestAnimationFrame(e)));
      };
      ((this.raf = requestAnimationFrame(e)),
        typeof ResizeObserver < `u` &&
          ((this.observer = new ResizeObserver(() => this.measure())),
          this.observer.observe(this.canvas)));
    }
    destroy() {
      (cancelAnimationFrame(this.raf), this.observer?.disconnect());
    }
    measure() {
      let e = this.canvas.getBoundingClientRect(),
        t = Math.min(2, window.devicePixelRatio || 1);
      ((this.w = Math.max(240, Math.round(e.width))),
        (this.h = Math.max(220, Math.round(e.height))),
        (this.canvas.width = Math.round(this.w * t)),
        (this.canvas.height = Math.round(this.h * t)),
        this.ctx.setTransform(t, 0, 0, t, 0, 0),
        this.st &&
          ((this.st.player.x = w(this.st.player.x, 25, this.w - 25)),
          (this.st.player.y = w(this.st.player.y, 25, this.h - 25))));
    }
    saveProfile() {
      try {
        localStorage.setItem(S, JSON.stringify(this.profile));
      } catch {}
    }
    fragments() {
      return this.profile.world === 2
        ? this.profile.aquaticFragments
        : this.profile.fragments;
    }
    setWorld(e) {
      if (e !== 1 && e !== 2) return;
      if (e === 2 && this.profile.bestDepth < 50) {
        (this.addLog(`WORLD LOCKED`, `Reach World 1 depth 50 to unlock World 2.`),
          this.emit());
        return;
      }
      if (this.profile.world === e) return;
      ((this.profile.world = e), this.saveProfile(), this.resumeSavedDepth());
    }
    element() {
      let e = this.profile.world === 2
        ? this.profile.world2Equipped
        : this.profile.equipped;
      return (
        a.find((t) => t.id === e && (t.world || 1) === this.profile.world) ||
        null
      );
    }
    elementTraitMultiplier(e) {
      let t = this.element(),
        n = t && ELEMENT_TRAITS[t.id];
      if (!n) return 1;
      let r =
        this.profile.awakened.includes(t.id) || !(t.awakeMoves || t.forms)
          ? 1.2
          : 1.1;
      return n[0] === e ? r : n[1] === e ? 0.9 : 1;
    }
    elementTraitDetails(e) {
      return getElementTraitDetails(
        e,
        e && this.profile.awakened.includes(e.id),
      );
    }
    colorway() {
      return !this.profile.colorwayUnlocked || !this.profile.colorway
        ? null
        : s.find((e) => e.id === this.profile.colorway) || null;
    }
    setColorway(e) {
      if (!this.profile.colorwayUnlocked) {
        (this.addLog(`COLORWAY LOCKED`, `Reach depth 10 to unlock colorways.`),
          this.emit());
        return;
      }
      ((this.profile.colorway = this.profile.colorway === e ? null : e),
        this.saveProfile(),
        this.emit());
    }
    elementName(e) {
      return e
        ? (this.profile.awakened.includes(e.id) && this.awakening(e)?.name) ||
            e.name
        : `NONE`;
    }
    awakening(e) {
      if (!e || !this.profile.awakened.includes(e.id)) return null;
      if (e.forms) {
        let t = this.profile.forms[e.id],
          n = t ? e.forms[t] : null;
        return n
          ? {
              key: `${e.id}:${t}`,
              form: t,
              name: n.name,
              moves: n.moves,
              costs: n.costs,
            }
          : null;
      }
      return e.awakeMoves
        ? {
            key: e.id,
            form: null,
            name: e.awakenedName,
            moves: e.awakeMoves,
            costs: e.moveCosts,
          }
        : null;
    }
    moveAwakened(e, t) {
      let n = a.find((t) => t.id === e),
        r = this.awakening(n);
      return !!(r && this.profile.moves[r.key]?.[t]);
    }
    selectElement(e) {
      let t = a.find((t) => t.id === e && (t.world || 1) === this.profile.world);
      if (t) {
        if (this.profile.unlocked.includes(t.id))
          this.addLog(
            `ELEMENT EQUIPPED`,
            `${this.elementName(t)} answers your call.`,
          );
        else {
          if (this.fragments() < t.cost) {
            (this.addLog(`NOT ENOUGH FRAGMENTS`, `${t.name} costs ${t.cost}.`),
              this.emit());
            return;
          }
          (this.profile.world === 2
            ? (this.profile.aquaticFragments -= t.cost)
            : (this.profile.fragments -= t.cost),
            this.profile.unlocked.push(t.id),
            (this.profile.moves[t.id] = [!1, !1, !1, !1]),
            this.addLog(`ELEMENT UNLOCKED`, `${t.name} joins your circle.`));
        }
        (this.profile.world === 2
          ? (this.profile.world2Equipped = t.id)
          : (this.profile.equipped = t.id),
          (this.mathCreationReady = !1),
          (this.mathPrisonScale = 1),
          (this.mathPrisonTargetId = null),
          (this.mathPrisonTurn = 0),
          this.saveProfile(),
          this.emit());
      }
    }
    buyMove(e) {
      let t = this.element(),
        n = this.awakening(t);
      if (!n) {
        t?.forms &&
          this.profile.awakened.includes(t.id) &&
          (this.addLog(`CHOOSE A FORM`, `Pick the life or death form first.`),
          this.emit());
        return;
      }
      if (this.profile.moves[n.key]?.[e]) return;
      let r = n.costs[e];
      if (this.fragments() < r) {
        (this.addLog(`NOT ENOUGH FRAGMENTS`, `${n.moves[e]} costs ${r}.`),
          this.emit());
        return;
      }
      (this.profile.world === 2
        ? (this.profile.aquaticFragments -= r)
        : (this.profile.fragments -= r),
        (this.profile.moves[n.key] = this.profile.moves[n.key] || [
          !1,
          !1,
          !1,
          !1,
        ]),
        (this.profile.moves[n.key][e] = !0),
        this.saveProfile(),
        this.addLog(`MOVE LEARNED`, `${i[e].toUpperCase()} · ${n.moves[e]}.`),
        this.emit());
    }
    chooseForm(e) {
      let t = this.element();
      !t?.forms ||
        !t.forms[e] ||
        ((this.profile.forms[t.id] = e),
        this.saveProfile(),
        this.addLog(`SOUL FORM`, `${t.forms[e].name} answers.`),
        this.emit());
    }
    setControlMode(e) {
      ((this.mode = e), (this.last = performance.now()), this.emit());
    }
    setKey(e, t) {
      t ? this.keys.add(e) : this.keys.delete(e);
    }
    press(e) {
      if (this.mode === null) return;
      if (this.element()?.id === `math` && [`1`, `2`, `3`].includes(e)) {
        if (this.mathCreationReady) this.mathCreation(Number(e));
        else {
          this.addLog(`MATHEMATICAL CREATION`, `Cast V to choose 1, 2, or 3.`);
          this.emit();
        }
        return;
      }
      e === `q`
        ? this.rangedAttack()
        : e === `z`
          ? this.cast(0)
          : e === `x`
            ? this.cast(1)
            : e === `c`
              ? this.cast(2)
              : e === `v`
                ? this.cast(3)
                : e === ` `
                  ? this.dash()
                  : void 0;
    }
    mathCreation(e) {
      if (
        this.mode === null ||
        this.over ||
        this.upgradeOpen ||
        !this.mathCreationReady
      )
        return;
      this.mathCreationReady = !1;
      let enemies = this.enemies();
      if (e === 1) {
        enemies
          .sort((a, b) => T(this.st.player, a) - T(this.st.player, b))
          .slice(0, 3)
          .forEach((enemy) =>
            this.hitEnemy(enemy, enemy.hp + 1, `math`, 3, !1),
          );
        this.addLog(`SOLVE FOR X`, `Up to three enemies erased.`);
      } else if (e === 2) {
        for (let enemy of enemies) {
          enemy.hp = 1;
          this.effect({
            kind: `area`,
            x: enemy.x,
            y: enemy.y,
            radius: enemy.r + 20,
            color: `#77e4d0`,
            key: `2`,
            label: `MATHEMATICAL DOMAIN`,
            duration: 0.6,
          });
        }
        this.addLog(
          `MATHEMATICAL DOMAIN`,
          `Every foe is reduced to 1 vitality.`,
        );
      } else if (e === 3) {
        this.mathShotUntil = performance.now() + 8000;
        this.addLog(
          `!`,
          `Six shots per volley for 8 seconds — or 24 when Trickshot procs.`,
        );
      } else {
        this.mathCreationReady = !0;
        return;
      }
      this.emit();
    }
    setAim(e, t) {
      ((this.aim.x = e), (this.aim.y = t));
    }
    setJoystick(e, t) {
      ((this.joystick.x = e), (this.joystick.y = t));
    }
    moveDir() {
      let e = 0,
        t = 0;
      if (
        ((this.keys.has(`w`) || this.keys.has(`arrowup`)) && --t,
        (this.keys.has(`s`) || this.keys.has(`arrowdown`)) && (t += 1),
        (this.keys.has(`a`) || this.keys.has(`arrowleft`)) && --e,
        (this.keys.has(`d`) || this.keys.has(`arrowright`)) && (e += 1),
        (e += this.joystick.x),
        (t += this.joystick.y),
        !e && !t)
      ) {
        let n = this.st.player;
        ((e = this.aim.x - n.x), (t = this.aim.y - n.y));
      }
      let n = Math.hypot(e, t);
      return n ? { x: e / n, y: t / n } : { x: 1, y: 0 };
    }
    enemies() {
      return this.st.entities.filter((e) => e.type !== `fragment` && !e.dead);
    }
    nearestEnemy() {
      let e = null,
        t = 1 / 0;
      for (let n of this.enemies()) {
        let r = T(this.st.player, n);
        r < t && ((e = n), (t = r));
      }
      return e;
    }
    addShot(e) {
      this.st.shots.push({ life: 3, hits: [], ...e, id: E++ });
    }
    addPool(e) {
      this.st.pools.push({ life: 2, r: 70, dps: 14, ...e, id: E++ });
    }
    addMine(e) {
      let t = e.fuse ?? 0.9;
      this.st.mines.push({
        r: 11,
        blast: 80,
        fuse: t,
        fuseTotal: t,
        ...e,
        id: E++,
      });
    }
    after(e, t) {
      this.st.delayed.push({ t: Math.max(0.01, e), fn: t });
    }
    explodeShot(e) {
      let radius = e.splash + this.st.splashBonus;
      for (let t of this.enemies())
        e.hits.includes(t.id) ||
          Math.hypot(t.x - e.x, t.y - e.y) > radius + t.r ||
          this.hitEnemy(t, e.damage * 0.6, e.elementId, e.index, e.awakened);
      (this.effect({
        kind: `area`,
        x: e.x,
        y: e.y,
        radius,
        color: e.color,
        duration: 0.4,
      }),
        this.burst(e.x, e.y, e.color, 8));
    }
    shatterShot(e) {
      let t = e.split,
        n = Math.atan2(e.vy, e.vx);
      for (let r = 0; r < t; r++) {
        let i = n + (r - (t - 1) / 2) * 0.42;
        this.addShot({
          x: e.x,
          y: e.y,
          vx: Math.cos(i) * 330,
          vy: Math.sin(i) * 330,
          r: 4,
          damage: e.damage * 0.42,
          color: e.color,
          elementId: e.elementId,
          index: e.index,
          awakened: e.awakened,
          style: `shard`,
          life: 0.5,
        });
      }
      this.burst(e.x, e.y, e.color, 6);
    }
    zap(e, t, n, r, i, a) {
      (this.hitEnemy(e, t),
        (e.stun = Math.max(e.stun || 0, n)),
        this.effect({
          kind: `line`,
          fromX: this.st.player.x,
          fromY: this.st.player.y,
          x: e.x,
          y: e.y,
          color: r,
          key: i,
          label: a,
        }));
    }
    effect(e) {
      let t = e.duration || 0.6;
      this.st.effects.push({ ...e, duration: t, life: t });
    }
    burst(e, t, n, r) {
      for (let i = 0; i < r; i++) {
        let r = Math.random() * Math.PI * 2,
          i = 30 + Math.random() * 80,
          size = 1.2 + Math.random() * 1.8;
        this.st.particles.push({
          x: e,
          y: t,
          vx: Math.cos(r) * i,
          vy: Math.sin(r) * i,
          life: 0.35 + Math.random() * 0.35,
          size,
          color: n,
        });
      }
    }
    heal(e) {
      this.st.health = Math.min(this.st.maxHealth, this.st.health + e);
    }
    hurtPlayer(e, t = !1) {
      let n = this.st;
      if (!(e <= 0 || this.over) && !(n.invuln > 0 && !t)) {
        if (Math.random() < n.evasion) {
          ((n.invuln = 0.25),
            this.burst(n.player.x, n.player.y, `#c9a86a`, 8));
          return;
        }
        (e *= 1 - n.armor),
          (e /= this.elementTraitMultiplier(`defense`));
        let target = this.nearestEnemy();
        target &&
          n.thorns > 0 &&
          T(n.player, target) < 110 &&
          this.hitEnemy(target, n.thorns, null, -1, !1);
        if (((n.invuln = 0.6), n.shield > 0)) {
          ((n.shield = 0),
            this.burst(
              n.player.x,
              n.player.y,
              this.element()?.color || `#7fd3c3`,
              12,
            ),
            (n.shake = Math.max(n.shake, 0.12)));
          return;
        }
        ((n.health -= e), n.health <= 0 && ((n.health = 0), this.endRun()));
      }
    }
    cleanse() {
      this.st.status = { slow: 0, root: 0, stun: 0, poison: 0, glitch: 0 };
    }
    shiftPlayer(e, t) {
      let n = this.st;
      ((n.player.x = w(n.player.x + e.x * t, 25, this.w - 25)),
        (n.player.y = w(n.player.y + e.y * t, 25, this.h - 25)),
        this.burst(
          n.player.x,
          n.player.y,
          this.element()?.color || `#7fd3c3`,
          8,
        ));
    }
    rewind(e) {
      let t = this.st,
        n = t.time - e,
        r = this.history.find((e) => e.t >= n) || this.history[0];
      r &&
        (this.burst(t.player.x, t.player.y, `#bda5e8`, 14),
        (t.player.x = w(r.x, 25, this.w - 25)),
        (t.player.y = w(r.y, 25, this.h - 25)),
        this.burst(t.player.x, t.player.y, `#bda5e8`, 20));
    }
    placeWall(e) {
      let t = this.st,
        n = t.player,
        r = -Math.sin(e),
        i = Math.cos(e);
      for (let a = -1; a <= 1; a++)
        t.walls.push({
          x: w(n.x + Math.cos(e) * 72 + r * a * 34, 30, this.w - 30),
          y: w(n.y + Math.sin(e) * 72 + i * a * 34, 30, this.h - 30),
          r: 17,
          life: 6,
        });
      this.burst(n.x, n.y, `#80c9e8`, 14);
    }
    beam(e, t, n, r, o, s, c, l) {
      let u = w(e.x + Math.cos(t) * n, 0, this.w),
        d = w(e.y + Math.sin(t) * n, 0, this.h);
      for (let i of this.enemies()) {
        let a = (i.x - e.x) * Math.cos(t) + (i.y - e.y) * Math.sin(t),
          u = Math.abs((i.x - e.x) * Math.sin(t) - (i.y - e.y) * Math.cos(t));
        a > 0 && a < n && u < r / 2 + i.r && this.hitEnemy(i, o, s, c, l);
      }
      this.effect({
        kind: `line`,
        fromX: e.x,
        fromY: e.y,
        x: u,
        y: d,
        color: a.find((e) => e.id === s)?.color || `#f2dfb2`,
        key: c >= 0 ? i[c].toUpperCase() : ``,
        label: ``,
      });
    }
    chain(e, t, n) {
      let r = new Set([e]),
        i = e;
      for (let e = 0; e < n; e++) {
        let e = this.enemies()
          .filter((e) => !r.has(e) && T(i, e) < 150)
          .sort((e, t) => T(i, e) - T(i, t))[0];
        if (!e) break;
        (r.add(e),
          this.burst(e.x, e.y, `#f4cf54`, 8),
          this.damageEnemy(e, t),
          (i = e));
      }
    }
    damageEnemy(e, t) {
      e.dead ||
        ((e.hp -= t * this.elementTraitMultiplier(`damage`)),
        e.hp <= 0 && this.defeatEnemy(e));
    }
    hitEnemy(e, t, n, r, i) {
      if (!e || e.dead || e.type === `fragment`) return 0;
      let o =
          (e.mark > 0 ? 1.35 : 1) *
          (Math.random() < this.st.critical ? 1.75 : 1) *
          (e.maxHp > 0 && e.hp / e.maxHp <= 0.3
            ? 1 + this.st.executioner
            : 1) *
          (this.st.health / this.st.maxHealth <= 0.35
            ? 1 + this.st.adrenaline
            : 1),
        s = Math.min(
          e.hp,
          t * this.elementTraitMultiplier(`damage`) * o,
        );
      ((e.hp -= s),
        s > 0 && (e.hit = Math.max(e.hit, 0.08)),
        s > 0 && this.st.lifesteal > 0 && this.heal(s * this.st.lifesteal));
      let c = a.find((e) => e.id === n),
        l = i ? 1.5 : 1;
      if (c) {
        if (
          (c.id === `fire` &&
            (e.burn = Math.max(e.burn, (r === 3 ? 5 : 2.5) * l)),
          c.id === `ice` &&
            (e.slow = Math.max(e.slow, (r === 3 ? 4 : 1.8) * l)),
          c.id === `nature` &&
            (e.root = Math.max(e.root, (r === 1 || r === 3 ? 2.5 : 1.2) * l)),
          c.id === `water` && r === 0)
        ) {
          let t = Math.atan2(e.y - this.st.player.y, e.x - this.st.player.x);
          ((e.x += Math.cos(t) * 30 * l), (e.y += Math.sin(t) * 30 * l));
        }
        if (
          (c.id === `light` &&
            (e.mark = Math.max(e.mark, (r === 3 ? 6 : 3) * l)),
          c.id === `archangel` &&
            (e.mark = Math.max(e.mark, (r === 3 ? 8 : 5) * l)),
          c.id === `telekinesis`)
        ) {
          let t = Math.atan2(e.y - this.st.player.y, e.x - this.st.player.x);
          ((e.x -= Math.cos(t) * 9), (e.y -= Math.sin(t) * 9));
        }
        if (
          (c.id === `dark` && this.heal(s * 0.06 * l),
          c.id === `poison` &&
            (e.poison = Math.max(e.poison, (r === 1 || r === 3 ? 6 : 3) * l)),
          c.id === `digital` &&
            (e.glitch = Math.max(e.glitch || 0, i ? 4.5 : 3.2)),
          c.id === `time` && (e.slow = Math.max(e.slow, (i ? 5.5 : 4) * l)),
          c.id === `blood` && this.heal(s * (r === 3 ? 0.32 : 0.2)),
          c.id === `wind`)
        ) {
          let t = Math.atan2(e.y - this.st.player.y, e.x - this.st.player.x);
          ((e.x += Math.cos(t) * 14), (e.y += Math.sin(t) * 14));
        }
        (c.id === `soul` && this.heal(s * 0.08 * l),
          c.id === `space` && (e.slow = Math.max(e.slow, 1.4 * l)));
      }
      return (e.hp <= 0 && this.defeatEnemy(e), s);
    }
    defeatEnemy(e) {
      if (e.dead) return;
      e.dead = !0;
      let t = this.st;
      ((t.combo += 1), (t.comboTimer = 2.2));
      let n = e.type === `awakenedBoss`,
        r = e.type === `miniboss`,
        i = n ? 20 : r ? 5 : 1;
      if (
        (t.entities.push({
          type: `fragment`,
          x: e.x,
          y: e.y,
          r: 9,
          value: i + t.fragmentBonus,
          spin: 0,
          vx: 0,
          vy: 0,
        }),
        (t.score += Math.round((n ? 2e3 : r ? 600 : 150) * t.scoreBoost)),
        (t.shake = n || r ? 0.35 : 0.06),
        this.burst(e.x, e.y, n ? `#c25a6b` : `#d9774d`, n || r ? 24 : 8),
        this.addLog(
          n ? `AWAKENED BOSS DOWN` : r ? `MINIBOSS DOWN` : `FOE DOWN`,
          `Drops ${i} ${i === 1 ? `fragment` : `fragments`}.`,
        ),
        n && t.bossElement && !this.profile.awakened.includes(t.bossElement))
      ) {
        let e = a.find((e) => e.id === t.bossElement);
        (this.profile.awakened.push(e.id),
          this.saveProfile(),
          this.addLog(
            `ELEMENT AWAKENED`,
            e.forms
              ? `${e.name} awakening unlocked — choose life or death.`
              : `${e.awakenedName} moves are now for sale.`,
          ));
      }
    }
    rangedAttack() {
      let e = this.st;
      if (
        this.mode === null ||
        this.over ||
        this.upgradeOpen ||
        e.rangedTimer > 0 ||
        e.status.stun > 0
      )
        return;
      let t = this.element(),
        n = this.nearestEnemy(),
        r = e.player,
        i = n
          ? Math.atan2(n.y - r.y, n.x - r.x)
          : Math.atan2(this.aim.y - r.y, this.aim.x - r.x),
        a = t ? t.color : `#f2dfb2`,
        o = (
          n,
          speed,
          radius,
          damage,
          pierce = 0,
          options = {},
          allowTrickshot = !0,
        ) => {
          let shot = {
            x: r.x,
            y: r.y,
            vx: Math.cos(i + n) * speed * e.projectileSpeed,
            vy: Math.sin(i + n) * speed * e.projectileSpeed,
            r: radius,
            damage: damage * e.damageBoost * e.rangedBoost,
            color: a,
            elementId: t?.id || null,
            index: -1,
            awakened: !1,
            pierce,
            ...options,
          };
          this.addShot(shot);
          if (allowTrickshot && Math.random() < e.trickshot) {
            let angle = i + n + (Math.random() < 0.5 ? -0.08 : 0.08);
            this.addShot({
              ...shot,
              vx: Math.cos(angle) * speed * e.projectileSpeed,
              vy: Math.sin(angle) * speed * e.projectileSpeed,
            });
          }
        };
      if (!t) o(0, 440, 4, 20);
      else if (t.id === `fire`) o(0, 370, 8, 27);
      else if (t.id === `ice`) o(0, 310, 10, 24);
      else if (t.id === `nature`) o(0, 340, 7, 22, 1);
      else if (t.id === `water`)
        [-0.16, 0, 0.16].forEach((e) => o(e, 500, 4, 12, 1));
      else if (t.id === `light`)
        [-0.045, 0.045].forEach((e) => o(e, 760, 3, 14, 2));
      else if (t.id === `dark`) o(0, 260, 12, 31);
      else if (t.id === `poison`)
        [-0.2, 0, 0.2].forEach((e) => o(e, 430, 5, 13));
      else if (t.id === `electric`) o(0, 620, 6, 20);
      else if (t.id === `crystal`)
        [-0.32, -0.16, 0, 0.16, 0.32].forEach((e) => o(e, 560, 5, 11, 2));
      else if (t.id === `metal`) o(0, 530, 10, 33, 4);
      else if (t.id === `blood`) (o(0, 400, 7, 32), this.hurtPlayer(1));
      else if (t.id === `time`) o(0, 430, 7, 27, 1);
      else if (t.id === `math`) {
        let mathBurst = this.mathShotUntil > performance.now(),
          count = mathBurst ? (Math.random() < e.trickshot ? 24 : 6) : 3,
          angleStep = count > 6 ? 0.65 / (count - 1) : 0.13;
        for (let shot = 0; shot < count; shot++)
          o(
            (shot - (count - 1) / 2) * angleStep,
            500,
            5,
            16,
            0,
            {},
            !mathBurst,
          );
      } else if (t.id === `digital` && n) {
        for (let n of this.enemies()) {
          let a = (n.x - r.x) * Math.cos(i) + (n.y - r.y) * Math.sin(i),
            o = Math.abs((n.x - r.x) * Math.sin(i) - (n.y - r.y) * Math.cos(i));
          a > 0 &&
            o < n.r + 11 &&
            this.hitEnemy(n, 30 * e.damageBoost, t.id, -1, !1);
        }
        this.burst(n.x, n.y, a, 8);
      } else
        t.id === `wind`
          ? [-0.05, 0.05].forEach((e) =>
              o(e, 720, 4, 13, 1, { style: `bolt`, knockback: 10 }),
            )
          : t.id === `soul`
            ? o(0, 320, 9, 26, 1, { homing: !0 })
            : t.id === `space`
              ? o(0, 520, 7, 24, 2, { style: `ring` })
              : t.id === `creation`
                ? o(0, 430, 8, 23, 0, { style: `shard`, splash: 40 })
                : t.id === `archangel`
                  ? o(0, 560, 8, 26, 1, { style: `ring` })
                  : t.id === `telekinesis`
                    ? o(0, 470, 10, 30, 0, { splash: 46 })
                    : t.id === `rubber`
                      ? o(0, 520, 9, 26, 1, { style: `ring`, bounce: 2 })
                      : t.id === `gas`
                        ? o(0, 420, 8, 22, 1, { style: `shard`, splash: 26 })
                        : t.id === `silk`
                          ? o(0, 560, 5, 22, 2, { style: `bolt` })
                          : t.id === `mystic`
                            ? o(0, 430, 8, 26, 1, { homing: !0 })
                            : t.id === `duality` &&
                              o(0, 500, 7, 25, 1, { style: `bolt` });
      e.rangedTimer =
        (t?.id === `light`
          ? 0.16
          : t?.id === `dark` ||
              t?.id === `metal` ||
              t?.id === `soul` ||
              t?.id === `creation`
            ? 0.3
            : 0.24) *
        e.fireBoost /
        this.elementTraitMultiplier(`attackSpeed`);
    }
    meleeAt(e, t) {
      let n = this.st;
      if (
        this.mode === null ||
        this.over ||
        this.upgradeOpen ||
        n.meleeTimer > 0 ||
        n.status.stun > 0
      )
        return;
      let r = n.player,
        i = Math.atan2(t - r.y, e - r.x),
        a = this.element(),
        o = 0;
      for (let e of this.enemies()) {
        if (T(r, e) > n.meleeRange + e.r) continue;
        let t = Math.atan2(e.y - r.y, e.x - r.x),
          s = Math.atan2(Math.sin(t - i), Math.cos(t - i));
        Math.abs(s) > 1.15 ||
          (this.hitEnemy(
            e,
            34 * n.damageBoost * n.meleeBoost,
            a?.id || null,
            -1,
            !1,
          ),
          (e.hit = Math.max(e.hit, 0.18)),
          this.burst(e.x, e.y, a?.color || `#f2dfb2`, 6),
          (o += 1));
      }
      ((n.meleeTimer =
        (0.5 * n.attackSpeed * n.meleeSpeed) /
        this.elementTraitMultiplier(`attackSpeed`)),
        this.effect({
          kind: `arc`,
          x: r.x,
          y: r.y,
          angle: i,
          radius: n.meleeRange,
          color: a?.color || `#f2dfb2`,
          duration: 0.22,
        }),
        o && (n.shake = Math.max(n.shake, 0.06)));
    }
    dash() {
      let e = this.st;
      if (
        this.mode === null ||
        this.over ||
        this.upgradeOpen ||
        e.dashTimer > 0 ||
        e.status.stun > 0
      )
        return;
      e.dashTimer =
        e.dashCooldown / this.elementTraitMultiplier(`attackSpeed`);
      let t = this.moveDir(),
        n = { x: e.player.x, y: e.player.y };
      ((e.player.x = w(
        e.player.x + t.x * (70 + e.dashDistance),
        25,
        this.w - 25,
      )),
        (e.player.y = w(
          e.player.y + t.y * (70 + e.dashDistance),
          25,
          this.h - 25,
        )),
        this.effect({
          kind: `line`,
          fromX: n.x,
          fromY: n.y,
          x: e.player.x,
          y: e.player.y,
          color: `#cbc3b1`,
          duration: 0.28,
        }),
        e.phase > 0 && (e.invuln = Math.max(e.invuln, 0.2 * e.phase)),
        this.burst(
          e.player.x,
          e.player.y,
          this.element()?.color || `#7fd3c3`,
          10,
        ));
    }
    cast(e) {
      let t = this.st;
      if (!this.element()) {
        (this.addLog(`NO ELEMENT`, `Unlock an element with fragments first.`),
          this.emit());
        return;
      }
      this.mode === null ||
        this.over ||
        this.upgradeOpen ||
        t.abilityTimers[e] > 0 ||
        t.status.stun > 0 ||
        v(this, e);
    }
    chooseUpgrade(e) {
      let t = this.st,
        n = c.find((t) => t.id === e);
      if (!n || !t.upgradeChoices.includes(e)) return;
      let r = t.upgrades[e] || 0;
      if (r < 10) {
        ((t.upgrades[e] = r + 1),
          this.applyUpgrade(e),
          (this.profile[this.profile.world === 2 ? `world2Upgrades` : `world1Upgrades`] =
            { ...t.upgrades }),
          this.saveProfile(),
          (t.upgradeChoices = []),
          (this.upgradeOpen = !1),
          (t.gateOpen = !0),
          this.addLog(`UPGRADE`, `${n.name} LV ${r + 1}. Step into the gate.`),
          this.emit());
      }
    }
    applyUpgrade(e) {
      let t = this.st;
      switch (e) {
        case `vitality`:
          t.maxHealth += 15;
          t.health = Math.min(t.maxHealth, t.health + 15);
          break;
        case `power`:
          t.damageBoost *= 1.12;
          break;
        case `haste`:
          t.attackSpeed *= 0.95;
          t.fireBoost *= 0.95;
          t.abilitySpeed *= 0.95;
          break;
        case `fleet`:
          t.moveSpeed *= 1.1;
          break;
        case `reach`:
          t.meleeRange *= 1.15;
          break;
        case `quickstep`:
          t.dashCooldown *= 0.88;
          break;
        case `scavenger`:
          t.fragmentBonus += 1;
          break;
        case `fortune`:
          t.scoreBoost *= 1.15;
          break;
        case `bloodthirst`:
          t.lifesteal = 0.05 * t.upgrades[e];
          break;
        case `marksman`:
          t.rangedBoost *= 1.15;
          break;
        case `resonance`:
          t.abilitySpeed *= 0.92;
          break;
        case `magnet`:
          t.magnet += 26;
          break;
        case `guardian`:
          t.guardian = t.upgrades[e];
          break;
        case `phase`:
          t.phase = t.upgrades[e];
          break;
        case `ironhide`:
          t.armor = Math.min(0.5, t.armor + 0.06);
          break;
        case `renewal`:
          t.regeneration += 0.45;
          break;
        case `critical`:
          t.critical = Math.min(0.5, t.critical + 0.05);
          break;
        case `executioner`:
          t.executioner += 0.1;
          break;
        case `warhammer`:
          t.meleeBoost *= 1.15;
          break;
        case `spellweaver`:
          t.abilityBoost *= 1.12;
          break;
        case `blastcraft`:
          t.splashBonus += 10;
          break;
        case `trickshot`:
          t.trickshot = Math.min(0.6, t.trickshot + 0.1);
          break;
        case `longstride`:
          t.dashDistance += 10;
          break;
        case `evasion`:
          t.evasion = Math.min(0.3, t.evasion + 0.05);
          break;
        case `thorns`:
          t.thorns += 8;
          break;
        case `secondwind`:
          t.roomHeal += 5;
          break;
        case `adrenaline`:
          t.adrenaline += 0.1;
          break;
        case `sharpshooter`:
          t.rangedBoost *= 1.12;
          break;
        case `aftershock`:
          t.meleeSpeed *= 0.92;
          break;
        case `guardianangel`:
          t.guardian += 1.5;
          break;
      }
    }
    skipUpgrade() {
      ((this.upgradeOpen = !1),
        (this.st.upgradeChoices = []),
        (this.st.gateOpen = !0),
        this.addLog(`SYSTEM`, `Left it empty. The gate opens.`),
        this.emit());
    }
    resumeSavedDepth() {
      let e = this.mode;
      (this.resetState(),
        this.measure(),
        this.generateRoom(),
        (this.mode = e),
        this.addLog(`DESCENT RESUMED`, `Continuing from the saved depth.`),
        this.emit());
    }
    endRun() {
      this.over ||
        ((this.over = !0),
        this.addLog(
          `RUN ENDED`,
          `The dungeon takes you in room ${this.st.room}.`,
        ),
        this.emit());
    }
    generateRoom() {
      let e = this.st,
        { w: t, h: n } = this;
      let depthField =
        this.profile.world === 2 ? `world2Depth` : `world1Depth`;
      if (
        this.profile[depthField] !== e.room ||
        (this.profile.world === 1 && e.room > this.profile.bestDepth)
      ) {
        this.profile[depthField] = e.room;
        if (this.profile.world === 1)
          this.profile.bestDepth = Math.max(this.profile.bestDepth, e.room);
        this.saveProfile();
      }
      ((this.mathPrisonScale = 1),
        (this.mathPrisonTargetId = null),
        (this.mathPrisonTurn = 0),
        (e.player = { x: t / 2, y: n / 2, r: 14 }),
        (e.entities = []),
        (e.shots = []),
        (e.enemyShots = []),
        (e.particles = []),
        (e.effects = []),
        (e.walls = []),
        (e.blades = []),
        (e.pools = []),
        (e.mines = []),
        (e.delayed = []),
        (e.roomCleared = !1),
        (e.gateOpen = !1),
        (e.upgradeChoices = []),
        e.guardian > 0 && (e.shield = Math.max(e.shield, 2.5 + e.guardian)),
        e.roomHeal > 0 && this.heal(e.roomHeal),
        (e.combo = 0),
        (e.comboTimer = 0),
        (this.history = [{ x: t / 2, y: n / 2, t: e.time }]));
      let r = e.room % 10 == 0,
        i = !r && e.room % 5 == 0,
        s = C.filter((e) => !this.profile.awakened.includes(e.id)),
        c = s.length ? s : C;
      e.bossElement = r
        ? this.profile.world === 2
          ? `water`
          : c[Math.floor(Math.random() * c.length)].id
        : null;
      let l = 3 + Math.min(5, e.room + 1);
      for (let t = 0; t < l; t++) e.entities.push(this.makeEnemy(`enemy`));
      (r
        ? e.entities.push(this.makeEnemy(`awakenedBoss`))
        : i && e.entities.push(this.makeEnemy(`miniboss`)),
        (this.decor = Array.from({ length: 9 }, () => ({
          x: 45 + Math.random() * Math.max(1, t - 90),
          y: 45 + Math.random() * Math.max(1, n - 90),
          r: 8 + Math.random() * 18,
          phase: Math.random() * Math.PI * 2,
        }))));
      let u = a.find((t) => t.id === e.bossElement);
      (this.addLog(
        `ROOM ${String(e.room).padStart(2, `0`)}`,
        r
          ? `An awakened ${u ? this.elementName(u) : `element`} boss guards this depth.`
          : i
            ? `A miniboss blocks the way.`
            : `${o[(e.room - 1) % o.length]}.`,
      ),
        r && (e.shake = 0.35),
        e.room >= 10 &&
          !this.profile.colorwayUnlocked &&
          ((this.profile.colorwayUnlocked = !0),
          this.saveProfile(),
          this.addLog(
            `COLORWAYS UNLOCKED`,
            `Depth 10 reached — pick a colorway in the panel.`,
          )));
    }
    makeEnemy(e) {
      let { w: t, h: n } = this,
        r = Math.floor(Math.random() * 4),
        i =
          r === 0
            ? 30
            : r === 1
              ? t - 30
              : 50 + Math.random() * Math.max(1, t - 100),
        a =
          r === 2
            ? 30
            : r === 3
              ? n - 30
              : 50 + Math.random() * Math.max(1, n - 100),
        o = 1 + Math.floor((this.st.room - 1) / 15) * 0.25,
        s =
          e === `awakenedBoss`
            ? 1500 + this.st.room * 15
            : e === `miniboss`
              ? 360 + this.st.room * 10
              : Math.ceil((35 + this.st.room * 5) * 1.15),
        c = Math.ceil(s * o);
      return {
        id: E++,
        type: e,
        x: i,
        y: a,
        r:
          e === `awakenedBoss`
            ? 37
            : e === `miniboss`
              ? 27
              : 11 + Math.random() * 4,
        hp: c,
        maxHp: c,
        speed:
          e === `awakenedBoss`
            ? 34
            : e === `miniboss`
              ? 27
              : (38 + Math.random() * 20) * 1.15,
        elementId:
          this.profile.world === 2
            ? `water`
            : e === `awakenedBoss`
              ? this.st.bossElement
              : null,
        hit: 0,
        fireTimer: e === `enemy` ? 0 : 1.2 + Math.random(),
        burn: 0,
        poison: 0,
        slow: 0,
        root: 0,
        mark: 0,
        stun: 0,
        glitch: 0,
        pause: 0,
        dead: !1,
      };
    }
    bossShoot(e, t) {
      let n = a.find((t) => t.id === e.elementId),
        r = n?.color || `#c25a6b`,
        i = (i, a, o, s, c = {}) => {
          this.st.enemyShots.push({
            x: e.x,
            y: e.y,
            vx: Math.cos(t + i) * a,
            vy: Math.sin(t + i) * a,
            r: o,
            damage: s,
            color: r,
            elementId: n?.id || null,
            life: 4,
            ...c,
          });
        };
      if (!n) i(0, 155, 7, 12);
      else if (n.id === `fire`)
        [-0.22, 0, 0.22].forEach((e) => i(e, 185, 9, 14, { splash: 7 }));
      else if (n.id === `ice`)
        [-0.48, -0.24, 0, 0.24, 0.48].forEach((e) =>
          i(e, 175, 6, 9, { slow: 1.4 }),
        );
      else if (n.id === `nature`)
        [-0.3, 0, 0.3].forEach((e) => i(e, 240, 5, 11, { root: 0.7 }));
      else if (n.id === `water`)
        [-0.62, -0.31, 0, 0.31, 0.62].forEach((e) =>
          i(e, 155, 8, 8, { knockback: 44 }),
        );
      else if (n.id === `light`) i(0, 420, 5, 18, { pierce: !0 });
      else if (n.id === `dark`) i(0, 115, 12, 22, { homing: !0 });
      else if (n.id === `poison`)
        [-0.24, 0, 0.24].forEach((e) => i(e, 165, 7, 8, { poison: 2 }));
      else if (n.id === `electric`)
        (i(-0.06, 350, 5, 12, { stun: 0.35 }),
          i(0.06, 350, 5, 12, { stun: 0.35 }));
      else if (n.id === `crystal`)
        for (let e = 0; e < 8; e++)
          i((Math.PI / 4) * e - t, 195, 6, 9, { pierce: !0 });
      else if (n.id === `metal`)
        (i(-0.08, 290, 8, 16, { pierce: !0 }),
          i(0.08, 290, 8, 16, { pierce: !0 }));
      else if (n.id === `wind`)
        [-0.42, -0.21, 0, 0.21, 0.42].forEach((e) =>
          i(e, 240, 6, 8, { knockback: 34 }),
        );
      else if (n.id === `soul`)
        (i(-0.2, 145, 11, 12, { homing: !0 }),
          i(0.2, 145, 11, 12, { homing: !0 }));
      else if (n.id === `space`)
        for (let e = 0; e < 8; e++)
          i((Math.PI / 4) * e, 205, 6, 10, { pierce: !0 });
      else
        n.id === `creation`
          ? i(0, 165, 15, 16, { splash: 10 })
          : n.id === `archangel`
            ? ([-0.3, 0, 0.3].forEach((e) => i(e, 195, 8, 12)),
              i(0, 265, 12, 16, { pierce: !0 }))
            : n.id === `silk`
              ? [-0.25, 0, 0.25].forEach((e) => i(e, 185, 6, 9, { root: 0.6 }))
              : n.id === `mystic`
                ? (i(-0.15, 165, 10, 13), i(0.15, 165, 10, 13, { homing: !0 }))
                : n.id === `duality` &&
                  [-0.2, 0.2].forEach((e) => i(e, 190, 8, 12, { pierce: !0 }));
      e.fireTimer = e.type === `awakenedBoss` ? 1.2 : 1.4;
    }
    update(e) {
      let t = this.st;
      for (let n of t.effects) n.life -= e;
      t.effects = t.effects.filter((e) => e.life > 0);
      for (let n of t.particles)
        ((n.x += n.vx * e), (n.y += n.vy * e), (n.life -= e));
      if (
        ((t.particles = t.particles.filter((e) => e.life > 0)),
        (t.shake = Math.max(0, t.shake - e)),
        this.mode === null || this.over || this.upgradeOpen)
      )
        return;
      let { w: n, h: r } = this,
        i = t.player;
      t.time += e;
      for (let n of Object.keys(t.status))
        t.status[n] = Math.max(0, t.status[n] - e);
      t.regeneration > 0 && this.heal(t.regeneration * e);
      (t.status.poison > 0 && this.hurtPlayer(7 * e, !0),
        (t.invuln = Math.max(0, t.invuln - e)),
        (t.rage = Math.max(0, t.rage - e)));
      let a = [];
      for (let n of t.delayed) ((n.t -= e), n.t <= 0 && a.push(n));
      t.delayed = t.delayed.filter((e) => e.t > 0);
      for (let e of a) e.fn();
      ((t.rangedTimer = Math.max(0, t.rangedTimer - e)),
        (t.meleeTimer = Math.max(0, t.meleeTimer - e)),
        (t.dashTimer = Math.max(0, t.dashTimer - e)),
        (t.abilityTimers = t.abilityTimers.map((t) => Math.max(0, t - e))),
        (t.shield = Math.max(0, t.shield - e)),
        (t.reflect = Math.max(0, t.reflect - e)),
        (t.comboTimer = Math.max(0, t.comboTimer - e)),
        t.comboTimer === 0 && (t.combo = 0));
      let o = 0,
        s = 0;
      if (
        ((this.keys.has(`w`) || this.keys.has(`arrowup`)) && --s,
        (this.keys.has(`s`) || this.keys.has(`arrowdown`)) && (s += 1),
        (this.keys.has(`a`) || this.keys.has(`arrowleft`)) && --o,
        (this.keys.has(`d`) || this.keys.has(`arrowright`)) && (o += 1),
        (o += this.joystick.x),
        (s += this.joystick.y),
        t.status.stun > 0 || t.status.root > 0
          ? ((o = 0), (s = 0))
          : t.status.glitch > 0 && ((o *= -1), (s *= -1)),
        o || s)
      ) {
        let n = Math.hypot(o, s),
          r =
            t.moveSpeed *
            this.elementTraitMultiplier(`moveSpeed`) *
            (t.status.slow > 0 ? 0.5 : 1);
        ((i.x += (o / n) * r * e), (i.y += (s / n) * r * e));
      }
      for (
        i.x = w(i.x, 25, n - 25),
          i.y = w(i.y, 25, r - 25),
          (!this.history.length ||
            t.time - this.history[this.history.length - 1].t > 0.08) &&
            this.history.push({ x: i.x, y: i.y, t: t.time });
        this.history.length > 1 && this.history[0].t < t.time - 4;

      )
        this.history.shift();
      for (let n of t.walls) n.life -= e;
      t.walls = t.walls.filter((e) => e.life > 0);
      for (let n of t.blades)
        if (
          ((n.life -= e),
          (n.angle += e * 3.4),
          (n.x = i.x + Math.cos(n.angle) * n.orbit),
          (n.y = i.y + Math.sin(n.angle) * n.orbit),
          (n.cool = Math.max(0, n.cool - e)),
          n.cool === 0)
        ) {
          let e = this.enemies().find(
            (e) => Math.hypot(e.x - n.x, e.y - n.y) < 22 + e.r,
          );
          e &&
            (this.hitEnemy(e, n.damage, n.elementId, 1, n.awakened),
            (n.cool = 0.35));
        }
      t.blades = t.blades.filter((e) => e.life > 0);
      for (let a of t.entities) {
        if (a.type === `fragment`) {
          ((a.spin += e * 3),
            T(i, a) < i.r + a.r + t.magnet &&
              (this.profile.world === 2
                ? (this.profile.aquaticFragments += a.value)
                : (this.profile.fragments += a.value),
              this.saveProfile(),
              this.burst(a.x, a.y, `#b78aff`, 10),
              this.addLog(
                `FRAGMENT`,
                `+${a.value} · ${this.fragments()} held.`,
              ),
              (a.dead = !0)));
          continue;
        }
        if (
          ((a.burn = Math.max(0, a.burn - e)),
          (a.poison = Math.max(0, a.poison - e)),
          (a.slow = Math.max(0, a.slow - e)),
          (a.root = Math.max(0, a.root - e)),
          (a.mark = Math.max(0, a.mark - e)),
          (a.stun = Math.max(0, a.stun - e)),
          (a.glitch = Math.max(0, a.glitch - e)),
          (a.pause = Math.max(0, a.pause - e)),
          a.burn > 0 && this.damageEnemy(a, (a.type === `enemy` ? 9 : 14) * e),
          a.poison > 0 &&
            this.damageEnemy(a, (a.type === `enemy` ? 12 : 17) * e),
          a.dead || a.pause > 0)
        )
          continue;
        let o = Math.atan2(i.y - a.y, i.x - a.x),
          s = o + Math.sin(performance.now() / 45 + a.x) * 1.1,
          c =
            a.speed *
            (a.slow > 0 ? 0.45 : 1) *
            (a.root > 0 ? 0.12 : 1) *
            (a.stun > 0 ? 0.05 : 1) *
            (a.glitch > 0 ? 0.65 : 1);
        ((a.x += Math.cos(a.glitch > 0 ? s : o) * c * e),
          (a.y += Math.sin(a.glitch > 0 ? s : o) * c * e),
          (a.x = w(a.x, 20, n - 20)),
          (a.y = w(a.y, 20, r - 20)),
          (a.hit = Math.max(0, a.hit - e)),
          a.type !== `enemy` &&
            ((a.fireTimer -= e * (a.slow > 0 ? 0.5 : 1) * (a.stun > 0 ? 0 : 1)),
            a.fireTimer <= 0 &&
              this.bossShoot(a, Math.atan2(i.y - a.y, i.x - a.x))),
          T(i, a) < i.r + a.r &&
            a.hit === 0 &&
            (this.hurtPlayer(
              a.type === `awakenedBoss` ? 18 : a.type === `miniboss` ? 14 : 8,
            ),
            (t.combo = 0),
            (t.comboTimer = 0),
            (a.hit = 0.7),
            (t.shake = Math.max(t.shake, 0.18)),
            this.burst(i.x, i.y, `#c25a6b`, 6)));
      }
      for (let n of t.pools) {
        n.life -= e;
        for (let r of t.entities)
          r.type === `fragment` ||
            r.dead ||
            Math.hypot(r.x - n.x, r.y - n.y) > n.r + r.r ||
            (this.damageEnemy(r, n.dps * e),
            n.slow && (r.slow = Math.max(r.slow, n.slow)),
            n.poison && (r.poison = Math.max(r.poison, n.poison)),
            n.burn && (r.burn = Math.max(r.burn, 0.6)),
            n.glitch && (r.glitch = Math.max(r.glitch, n.glitch)),
            r.hp <= 0 && this.defeatEnemy(r));
      }
      t.pools = t.pools.filter((e) => e.life > 0);
      for (let n of t.mines)
        if (((n.fuse -= e), !(n.fuse > 0))) {
          n.dead = !0;
          for (let e of this.enemies())
            Math.hypot(e.x - n.x, e.y - n.y) > n.blast + e.r ||
              (this.hitEnemy(e, n.damage, n.elementId, n.index, n.awakened),
              n.root && (e.root = Math.max(e.root, n.root)),
              n.poison && (e.poison = Math.max(e.poison, n.poison)),
              n.stun && (e.stun = Math.max(e.stun, n.stun)));
          (this.effect({
            kind: `area`,
            x: n.x,
            y: n.y,
            radius: n.blast,
            color: n.color,
            duration: 0.45,
          }),
            this.burst(n.x, n.y, n.color, 14));
        }
      t.mines = t.mines.filter((e) => !e.dead);
      for (let n of t.shots) {
        if (n.dead) continue;
        let r = Math.hypot(n.vx, n.vy),
          a = n.returnToPlayer && n.life < 2.2;
        if (n.homing || a) {
          let o = a
            ? i
            : t.entities
                .filter(
                  (e) =>
                    e.type !== `fragment` && !e.dead && !n.hits.includes(e.id),
                )
                .sort(
                  (e, t) =>
                    Math.hypot(e.x - n.x, e.y - n.y) -
                    Math.hypot(t.x - n.x, t.y - n.y),
                )[0];
          if (o) {
            let t = Math.atan2(o.y - n.y, o.x - n.x),
              i = Math.min(1, e * (a ? 5 : 6));
            ((n.vx += (Math.cos(t) * r - n.vx) * i),
              (n.vy += (Math.sin(t) * r - n.vy) * i));
          }
        }
        if (n.curve) {
          let t = n.curve * e,
            r = Math.cos(t),
            i = Math.sin(t),
            a = n.vx * r - n.vy * i;
          ((n.vy = n.vx * i + n.vy * r), (n.vx = a));
        }
        if (n.accel) {
          let t = Math.hypot(n.vx, n.vy) || 1,
            r = Math.max(60, t + n.accel * e);
          ((n.vx = (n.vx / t) * r), (n.vy = (n.vy / t) * r));
        }
        if (((n.x += n.vx * e), (n.y += n.vy * e), (n.life -= e), n.pull))
          for (let r of t.entities) {
            if (r.type === `fragment` || r.dead) continue;
            let t = Math.hypot(r.x - n.x, r.y - n.y);
            if (t > n.pull || t < 2) continue;
            let i = 220 * e * (1 - t / n.pull);
            ((r.x += ((n.x - r.x) / t) * i), (r.y += ((n.y - r.y) / t) * i));
          }
        for (let e of t.entities)
          if (
            !(e.type === `fragment` || e.dead) &&
            !n.hits.includes(e.id) &&
            !(Math.hypot(e.x - n.x, e.y - n.y) > e.r + n.r)
          ) {
            if (
              (this.hitEnemy(e, n.damage, n.elementId, n.index, n.awakened),
              n.knockback)
            ) {
              let t = Math.atan2(n.vy, n.vx);
              ((e.x += Math.cos(t) * n.knockback),
                (e.y += Math.sin(t) * n.knockback));
            }
            if (
              (this.burst(n.x, n.y, n.color, 3),
              n.hits.push(e.id),
              n.freeze &&
                ((e.root = Math.max(e.root, n.freeze)),
                (e.slow = Math.max(e.slow, n.freeze * 1.6))),
              n.stun && (e.stun = Math.max(e.stun, n.stun)),
              n.splash && this.explodeShot(n),
              n.split && this.shatterShot(n),
              n.bounce > 0)
            ) {
              let e = t.entities
                .filter(
                  (e) =>
                    e.type !== `fragment` && !e.dead && !n.hits.includes(e.id),
                )
                .sort(
                  (e, t) =>
                    Math.hypot(e.x - n.x, e.y - n.y) -
                    Math.hypot(t.x - n.x, t.y - n.y),
                )[0];
              if (e) {
                --n.bounce;
                let t = Math.atan2(e.y - n.y, e.x - n.x);
                ((n.vx = Math.cos(t) * Math.max(r, 300)),
                  (n.vy = Math.sin(t) * Math.max(r, 300)),
                  (n.life = Math.max(n.life, 1.2)));
                continue;
              }
            }
            if (n.pierce > 0) --n.pierce;
            else {
              n.dead = !0;
              break;
            }
          }
      }
      for (let a of t.enemyShots)
        if (!a.dead) {
          if (a.homing) {
            let t = Math.hypot(a.vx, a.vy),
              n = Math.atan2(i.y - a.y, i.x - a.x);
            ((a.vx += (Math.cos(n) * t - a.vx) * e * 1.4),
              (a.vy += (Math.sin(n) * t - a.vy) * e * 1.4));
          }
          if (
            ((a.x += a.vx * e),
            (a.y += a.vy * e),
            (a.life -= e),
            t.walls.some((e) => Math.hypot(a.x - e.x, a.y - e.y) < e.r + a.r))
          ) {
            ((a.dead = !0), this.burst(a.x, a.y, `#80c9e8`, 5));
            continue;
          }
          if (!a.hitPlayer && T(i, a) < i.r + a.r) {
            if (
              ((a.hitPlayer = !0), a.pierce || (a.dead = !0), t.reflect > 0)
            ) {
              let e = this.nearestEnemy();
              if (e) {
                let n = Math.atan2(e.y - a.y, e.x - a.x);
                this.addShot({
                  x: a.x,
                  y: a.y,
                  vx: Math.cos(n) * 500,
                  vy: Math.sin(n) * 500,
                  r: 7,
                  damage: 36 * t.damageBoost,
                  color: `#61c9a2`,
                  elementId: `crystal`,
                  index: 2,
                  awakened: !1,
                  pierce: 1,
                });
              }
              this.burst(i.x, i.y, `#61c9a2`, 8);
            } else {
              if (
                (this.hurtPlayer(a.damage || 12),
                a.splash && this.hurtPlayer(a.splash),
                a.slow && (t.status.slow = Math.max(t.status.slow, a.slow)),
                a.root && (t.status.root = Math.max(t.status.root, a.root)),
                a.stun && (t.status.stun = Math.max(t.status.stun, a.stun)),
                a.poison &&
                  (t.status.poison = Math.max(t.status.poison, a.poison)),
                a.knockback)
              ) {
                let e = Math.atan2(a.vy, a.vx);
                ((i.x = w(i.x + Math.cos(e) * a.knockback, 25, n - 25)),
                  (i.y = w(i.y + Math.sin(e) * a.knockback, 25, r - 25)));
              }
              ((a.elementId === `digital` || a.elementId === `time`) &&
                (t.status.slow = Math.max(t.status.slow, 1.2)),
                (t.combo = 0),
                (t.comboTimer = 0),
                (t.shake = Math.max(t.shake, 0.18)),
                this.burst(i.x, i.y, `#c25a6b`, 6));
            }
          }
        }
      if (
        ((t.shots = t.shots.filter(
          (e) =>
            !e.dead &&
            e.life > 0 &&
            e.x > -30 &&
            e.x < n + 30 &&
            e.y > -30 &&
            e.y < r + 30,
        )),
        (t.enemyShots = t.enemyShots.filter(
          (e) =>
            !e.dead &&
            e.life > 0 &&
            e.x > -30 &&
            e.x < n + 30 &&
            e.y > -30 &&
            e.y < r + 30,
        )),
        (t.entities = t.entities.filter((e) => !e.dead)),
        !t.roomCleared && !t.entities.some((e) => e.type !== `fragment`))
      ) {
        ((t.roomCleared = !0), (t.score += 500));
        for (let e of t.entities)
          e.type !== `fragment` ||
            e.dead ||
            (this.profile.world === 2
              ? (this.profile.aquaticFragments += e.value)
              : (this.profile.fragments += e.value),
              (e.dead = !0));
        ((t.upgradeChoices = pickUpgradeChoices(t.upgrades)),
          this.saveProfile(),
          (this.upgradeOpen = !0),
          this.addLog(`ROOM CLEAR`, `Claim an upgrade before the gate opens.`),
          this.emit());
      }
      (t.gateOpen &&
        T(i, { x: n / 2, y: 25 }) < 34 &&
        ((t.room += 1), this.generateRoom(), this.emit()),
        (this.emitTimer += e),
        this.emitTimer > 0.12 && ((this.emitTimer = 0), this.emit()));
    }
    addLog(e, t) {
      this.log = [{ label: e, message: t }, ...this.log].slice(0, 4);
    }
    emit() {
      this.onSnapshot?.(this.snapshot());
    }
    snapshot() {
      let e = this.st,
        t = this.element(),
        n = e.room;
      return {
        room: n,
        roomName: o[(n - 1) % o.length],
        roomStatus:
          n % 10 == 0
            ? `AWAKENED BOSS`
            : n % 5 == 0
              ? `MINIBOSS`
              : e.roomCleared
                ? `ROOM CLEARED`
                : `CLEAR THE ROOM`,
        health: Math.max(0, Math.ceil(e.health)),
        maxHealth: e.maxHealth,
        world: this.profile.world,
        worldUnlocked: this.profile.bestDepth >= 50,
        bestDepth: this.profile.bestDepth,
        fragments: this.fragments(),
        score: e.score,
        combo: e.combo,
        element: t
          ? {
              id: t.id,
              name: this.elementName(t),
              color: t.color,
              awakened: this.profile.awakened.includes(t.id),
              hasAwakening: !!(t.awakeMoves || t.forms),
              traits: this.elementTraitDetails(t),
              form: this.profile.forms[t.id] || null,
              forms:
                t.forms && this.profile.awakened.includes(t.id)
                  ? Object.entries(t.forms).map(([e, t]) => ({
                      id: e,
                      name: t.name,
                    }))
                  : null,
            }
          : null,
        elements: a.filter((e) => (e.world || 1) === this.profile.world).map((e) => ({
          id: e.id,
          name: this.elementName(e),
          color: e.color,
          cost: e.cost,
          traits: this.elementTraitDetails(e),
          unlocked: this.profile.unlocked.includes(e.id),
          equipped:
            (this.profile.world === 2
              ? this.profile.world2Equipped
              : this.profile.equipped) === e.id,
          awakened: this.profile.awakened.includes(e.id),
        })),
        moves: i.map((n, r) => {
          let i = this.awakening(t),
            a = !!(i && this.profile.moves[i.key]?.[r]),
            o = !!(t && this.profile.awakened.includes(t.id)),
            s = !!(t?.forms && o && !i);
          return {
            key: n.toUpperCase(),
            name: t
              ? a
                ? i.moves[r]
                : t.baseMoves[r]
              : `ELEMENT MOVE ${r + 1}`,
            locked: !t,
            awakened: a,
            ready: e.abilityTimers[r] <= 0,
            buyable: o && !s && !a,
            canBuy:
              o && !s && !a && this.fragments() >= (i?.costs?.[r] ?? 0),
            buyCost: i?.costs?.[r] ?? 0,
          };
        }),
        upgrades: {
          ...O(e.upgrades),
          choices: e.upgradeChoices
            .map((e) => c.find((t) => t.id === e))
            .filter(Boolean)
            .map((e) => ({
              ...e,
              level: this.st.upgrades[e.id] || 0,
            })),
        },
        colorways: {
          unlocked: this.profile.colorwayUnlocked,
          active: this.profile.colorwayUnlocked ? this.profile.colorway : null,
          list: s,
        },
        log: this.log,
        mode: this.mode,
        mathCreationReady:
          this.mathCreationReady && this.element()?.id === `math`,
        over: this.over,
        upgradeOpen: this.upgradeOpen,
        gateOpen: e.gateOpen,
        dashReady: e.dashTimer <= 0,
        rangedReady: e.rangedTimer <= 0,
      };
    }
  },
  M = n();
function N({ engineRef: e, snap: t }) {
  let n = (0, r.useRef)(null),
    i = (0, r.useRef)(!1),
    [a, o] = (0, r.useState)({ x: 0, y: 0 }),
    s = (t) => {
      let r = n.current;
      if (!r) return;
      let i = r.getBoundingClientRect(),
        a = i.width / 2 - 16,
        s = t.clientX - (i.left + i.width / 2),
        c = t.clientY - (i.top + i.height / 2),
        l = Math.hypot(s, c);
      (l > a && ((s = (s / l) * a), (c = (c / l) * a)),
        o({ x: s, y: c }),
        e.current?.setJoystick(s / a, c / a));
    },
    c = () => {
      ((i.current = !1), o({ x: 0, y: 0 }), e.current?.setJoystick(0, 0));
    };
  return (0, M.jsxs)(`div`, {
    className: `flex items-center justify-between gap-3 border-t border-white/[0.08] px-4 py-4 lg:hidden`,
    children: [
      (0, M.jsxs)(`div`, {
        ref: n,
        onPointerDown: (e) => {
          ((i.current = !0),
            e.currentTarget.setPointerCapture(e.pointerId),
            s(e));
        },
        onPointerMove: (e) => i.current && s(e),
        onPointerUp: c,
        onPointerCancel: c,
        onPointerLeave: c,
        className: `relative h-28 w-28 shrink-0 touch-none rounded-full border border-white/15 bg-white/[0.03]`,
        "aria-label": `Movement joystick`,
        children: [
          (0, M.jsx)(`span`, {
            className: `absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c9a86a]/50 bg-[#c9a86a]/20`,
          }),
          (0, M.jsx)(`span`, {
            className: `pointer-events-none absolute left-1/2 top-1/2 h-9 w-9 rounded-full bg-[#e6d7b4] shadow-[0_0_20px_rgba(201,168,106,0.5)]`,
            style: {
              transform: `translate(calc(-50% + ${a.x}px), calc(-50% + ${a.y}px))`,
            },
          }),
        ],
      }),
      (0, M.jsxs)(`div`, {
        className: `grid flex-1 grid-cols-3 gap-1.5`,
        children: [
          t.moves.map((t, n) =>
            (0, M.jsxs)(
              `button`,
              {
                type: `button`,
                disabled: t.locked,
                onClick: () => e.current?.cast(n),
                className: `flex flex-col items-center gap-0.5 rounded-lg border border-white/10 bg-white/[0.04] px-1 py-2 disabled:opacity-40`,
                children: [
                  (0, M.jsx)(`span`, {
                    className: `font-mono text-[10px] text-[#c9a86a]`,
                    children: t.key,
                  }),
                  (0, M.jsx)(`span`, {
                    className: `w-full truncate text-center font-mono text-[8px] tracking-[0.06em] text-[#c9c2b1]`,
                    children: t.locked ? `LOCKED` : t.name.split(` `)[0],
                  }),
                ],
              },
              t.key,
            ),
          ),
          ...(t.mathCreationReady
            ? [
                [1, `SOLVE FOR X`],
                [2, `MATH DOMAIN`],
                [3, `! · SIX SHOTS`],
              ].map(([n, label]) =>
                (0, M.jsx)(
                  `button`,
                  {
                    type: `button`,
                    onClick: () => e.current?.mathCreation(n),
                    className: `rounded-lg border border-[#77e4d0]/35 bg-[#77e4d0]/10 px-1 py-2 font-mono text-[8px] tracking-[0.04em] text-[#c9c2b1]`,
                    children: `${n} · ${label}`,
                  },
                  `math-choice-${n}`,
                ),
              )
            : []),
          (0, M.jsx)(`button`, {
            type: `button`,
            onClick: () => e.current?.rangedAttack(),
            className: `rounded-lg border border-white/10 bg-white/[0.04] py-2 font-mono text-[9px] tracking-[0.1em] text-[#c9c2b1]`,
            children: `Q · RANGED`,
          }),
          (0, M.jsx)(`button`, {
            type: `button`,
            onClick: () => e.current?.dash(),
            className: `rounded-lg border border-white/10 bg-white/[0.04] py-2 font-mono text-[9px] tracking-[0.1em] text-[#c9c2b1]`,
            children: `DASH`,
          }),
        ],
      }),
    ],
  });
}
var P = [`w`, `a`, `s`, `d`, `arrowup`, `arrowdown`, `arrowleft`, `arrowright`],
  F = [...P, ` `];
function I({ canvasRef: e, engineRef: t, snap: n }) {
  (0, r.useEffect)(() => {
    let e = (e) => {
        let n = e.key.toLowerCase();
        F.includes(n) && e.preventDefault();
        let r = t.current;
        r && (P.includes(n) && r.setKey(n, !0), !e.repeat && r.press(n));
      },
      n = (e) => t.current?.setKey(e.key.toLowerCase(), !1);
    return (
      window.addEventListener(`keydown`, e),
      window.addEventListener(`keyup`, n),
      () => {
        (window.removeEventListener(`keydown`, e),
          window.removeEventListener(`keyup`, n));
      }
    );
  }, [t]);
  let i = (e) => {
    let n = e.currentTarget.getBoundingClientRect();
    return (
      t.current?.setAim(e.clientX - n.left, e.clientY - n.top),
      { x: e.clientX - n.left, y: e.clientY - n.top }
    );
  };
  return (0, M.jsxs)(`div`, {
    className: `overflow-hidden rounded-[22px] border border-white/10 bg-[#0b0c12] shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)]`,
    children: [
      (0, M.jsxs)(`div`, {
        className: `flex items-center justify-between gap-3 border-b border-white/[0.08] px-4 py-3`,
        children: [
          (0, M.jsx)(`span`, {
            className: `font-mono text-[10px] tracking-[0.22em] text-[#d6cdb9]`,
            children: n.roomName,
          }),
          (0, M.jsx)(`span`, {
            className: `font-mono text-[10px] tracking-[0.22em] text-[#c9a86a]`,
            children: n.roomStatus,
          }),
        ],
      }),
      (0, M.jsxs)(`div`, {
        className: `relative aspect-[4/3] w-full sm:aspect-[16/10] lg:aspect-[16/9]`,
        children: [
          (0, M.jsx)(`canvas`, {
            ref: e,
            onPointerMove: i,
            onPointerDown: (e) => {
              if (e.button !== 0) return;
              let n = i(e);
              t.current?.meleeAt(n.x, n.y);
            },
            className: `block h-full w-full touch-none cursor-crosshair`,
          }),
          (0, M.jsx)(`div`, {
            className: `pointer-events-none absolute inset-x-0 bottom-2 flex justify-center px-2`,
            children: (0, M.jsx)(`span`, {
              className: `rounded-full border border-white/10 bg-black/50 px-3 py-1 font-mono text-[9px] tracking-[0.16em] text-[#bdb5a4] backdrop-blur-sm`,
              children: `WASD MOVE · Q RANGED · CLICK MELEE`,
            }),
          }),
        ],
      }),
      (0, M.jsxs)(`div`, {
        className: `hidden flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/[0.08] px-4 py-3 font-mono text-[9px] tracking-[0.18em] text-[#7f7a8c] sm:flex`,
        children: [
          (0, M.jsxs)(`span`, {
            className: `text-[#b9b1a0]`,
            children: [
              `WASD / ARROWS `,
              (0, M.jsx)(`span`, {
                className: `text-[#6d6879]`,
                children: `MOVE`,
              }),
            ],
          }),
          (0, M.jsxs)(`span`, {
            className: `text-[#b9b1a0]`,
            children: [
              `Q `,
              (0, M.jsx)(`span`, {
                className: `text-[#6d6879]`,
                children: `RANGED`,
              }),
            ],
          }),
          (0, M.jsxs)(`span`, {
            className: `text-[#b9b1a0]`,
            children: [
              `CLICK `,
              (0, M.jsx)(`span`, {
                className: `text-[#6d6879]`,
                children: `MELEE`,
              }),
            ],
          }),
          (0, M.jsxs)(`span`, {
            className: `text-[#b9b1a0]`,
            children: [
              `SPACE `,
              (0, M.jsx)(`span`, {
                className: `text-[#6d6879]`,
                children: `DASH`,
              }),
            ],
          }),
          (0, M.jsxs)(`span`, {
            className: `text-[#b9b1a0]`,
            children: [
              `Z X C V `,
              (0, M.jsx)(`span`, {
                className: `text-[#6d6879]`,
                children: `ELEMENT MOVES`,
              }),
            ],
          }),
        ],
      }),
      (0, M.jsx)(N, { engineRef: t, snap: n }),
    ],
  });
}
var L = `fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#04050a]/85 p-4 backdrop-blur-sm`,
  R = `w-full max-w-lg rounded-2xl border border-white/10 bg-[#0f1017] p-6 shadow-[0_40px_120px_-40px_rgba(0,0,0,1)]`;
function z({ engineRef: e, snap: t }) {
  return (0, M.jsx)(`div`, {
    className: L,
    children: (0, M.jsxs)(`div`, {
      className: R,
      children: [
        (0, M.jsx)(`p`, {
          className: `font-mono text-[9px] tracking-[0.28em] text-[#c9a86a]`,
          children: `ELEMENTAL DUNGEON / ${t.world === 2 ? `02` : `01`}`,
        }),
        (0, M.jsx)(`h2`, {
          className: `mt-3 font-heading text-3xl leading-[1.05] tracking-[-0.02em] text-[#f0e9d8]`,
          children: `Claim your element.`,
        }),
        (0, M.jsx)(`p`, {
          className: `mt-3 max-w-sm text-sm leading-relaxed text-[#9d97a8]`,
          children: `Fight through shifting rooms, gather fragments, unlock elements, and face awakened bosses.`,
        }),
        (0, M.jsxs)(`div`, {
          className: `mt-5 rounded-xl border border-white/[0.08] bg-black/20 p-3`,
          children: [
            (0, M.jsx)(`p`, {
              className: `font-mono text-[8px] tracking-[0.2em] text-[#7f7a8c]`,
              children: `CHOOSE YOUR WORLD`,
            }),
            (0, M.jsxs)(`div`, {
              className: `mt-2 grid grid-cols-2 gap-2`,
              children: [
                (0, M.jsx)(`button`, {
                  type: `button`,
                  onClick: () => e.current?.setWorld(1),
                  className: `rounded-lg border border-[#c9a86a]/40 bg-[#c9a86a]/10 px-3 py-2 text-left font-heading text-[10px] tracking-[0.08em] text-[#efe0bd]`,
                  children: `WORLD 1 · THE DESCENT`,
                }),
                (0, M.jsx)(`button`, {
                  type: `button`,
                  disabled: !t.worldUnlocked,
                  onClick: () => e.current?.setWorld(2),
                  className: [
                    `rounded-lg border px-3 py-2 text-left font-heading text-[10px] tracking-[0.08em]`,
                    t.worldUnlocked
                      ? `border-[#54c7c3]/40 bg-[#54c7c3]/10 text-[#a3e4df]`
                      : `cursor-not-allowed border-white/[0.06] text-[#5f5a6b]`,
                  ].join(` `),
                  children: `WORLD 2 · THE DEPTHS`,
                }),
              ],
            }),
            (0, M.jsx)(`p`, {
              className: `mt-2 font-mono text-[8px] leading-relaxed tracking-[0.1em] text-[#6d6879]`,
              children: t.worldUnlocked
                ? `25 NEW ELEMENTS · AQUATIC FRAGMENTS · WATER-TYPED ENEMIES.`
                : `WORLD 2 UNLOCKS AT WORLD 1 DEPTH 50 · RECORD ${String(t.bestDepth || 1).padStart(2, `0`)}/50.`,
            }),
          ],
        }),
        (0, M.jsxs)(`div`, {
          className: `mt-6 grid gap-2 sm:grid-cols-2`,
          children: [
            (0, M.jsxs)(`button`, {
              type: `button`,
              onClick: () => e.current?.setControlMode(`computer`),
              className: `group rounded-xl border border-[#c9a86a]/40 bg-[#c9a86a]/10 px-4 py-3 text-left transition hover:border-[#c9a86a]/80 hover:bg-[#c9a86a]/15`,
              children: [
                (0, M.jsx)(`span`, {
                  className: `font-heading text-sm tracking-[0.06em] text-[#efe0bd]`,
                  children: `COMPUTER`,
                }),
                (0, M.jsx)(`span`, {
                  className: `mt-1 block font-mono text-[9px] leading-relaxed tracking-[0.08em] text-[#9d97a8]`,
                  children: `WASD / ARROWS · Q RANGED · CLICK MELEE · SPACE DASH`,
                }),
              ],
            }),
            (0, M.jsxs)(`button`, {
              type: `button`,
              onClick: () => e.current?.setControlMode(`mobile`),
              className: `rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-left transition hover:border-white/25`,
              children: [
                (0, M.jsx)(`span`, {
                  className: `font-heading text-sm tracking-[0.06em] text-[#efe0bd]`,
                  children: `MOBILE`,
                }),
                (0, M.jsx)(`span`, {
                  className: `mt-1 block font-mono text-[9px] leading-relaxed tracking-[0.08em] text-[#9d97a8]`,
                  children: `JOYSTICK · Q BUTTON · TAP THE ARENA TO MELEE`,
                }),
              ],
            }),
          ],
        }),
        (0, M.jsx)(`p`, {
          className: `mt-5 font-mono text-[8px] leading-relaxed tracking-[0.14em] text-[#6d6879]`,
          children: `Z X C V CAST ELEMENT MOVES · DEPTH SAVES AUTOMATICALLY · RELOAD TO RESUME`,
        }),
      ],
    }),
  });
}
function B({ snap: e, engineRef: t }) {
  let n = e.upgrades;
  return (0, M.jsx)(`div`, {
    className: L,
    children: (0, M.jsxs)(`div`, {
      className: `${R} max-w-2xl`,
      children: [
        (0, M.jsxs)(`div`, {
          className: `flex items-baseline justify-between gap-3`,
          children: [
            (0, M.jsx)(`p`, {
              className: `font-mono text-[9px] tracking-[0.28em] text-[#c9a86a]`,
              children: `ROOM CLEARED / SYSTEM`,
            }),
            (0, M.jsxs)(`span`, {
              className: `font-mono text-[9px] tracking-[0.16em] text-[#8b8598]`,
              children: [n.used, ` UPGRADES ACTIVE`],
            }),
          ],
        }),
        (0, M.jsx)(`h2`, {
          className: `mt-2 font-heading text-2xl tracking-[-0.01em] text-[#f0e9d8]`,
          children: `Choose an upgrade`,
        }),
        (0, M.jsxs)(`p`, {
          className: `mt-1 text-[11px] leading-snug text-[#9d97a8]`,
          children: [
            `Choose one of three upgrades. Every upgrade can reach level `,
            n.maxLevel,
            `.`,
          ],
        }),
        (0, M.jsx)(`div`, {
          className: `mt-5 grid gap-1.5 sm:grid-cols-3`,
          children: n.choices.map((e) => {
            return (0, M.jsxs)(
              `button`,
              {
                type: `button`,
                onClick: () => t.current?.chooseUpgrade(e.id),
                className: [
                  `rounded-xl border px-3 py-2.5 text-left transition`,
                  `border-white/10 bg-white/[0.02] hover:border-[#c9a86a]/60 hover:bg-[#c9a86a]/10`,
                ].join(` `),
                children: [
                  (0, M.jsxs)(`span`, {
                    className: `flex items-baseline justify-between gap-2`,
                    children: [
                      (0, M.jsx)(`span`, {
                        className: `font-heading text-[11px] tracking-[0.08em] text-[#efe0bd]`,
                        children: e.name,
                      }),
                      (0, M.jsx)(`span`, {
                        className: `shrink-0 font-mono text-[8px] tracking-[0.12em] text-[#8b8598]`,
                        children: `LV ${e.level}/${n.maxLevel}`,
                      }),
                    ],
                  }),
                  (0, M.jsx)(`span`, {
                    className: `mt-0.5 block text-[11px] leading-snug text-[#9d97a8]`,
                    children: e.text,
                  }),
                ],
              },
              e.id,
            );
          }),
        }),
        n.choices.length === 0 &&
          (0, M.jsx)(`p`, {
            className: `mt-5 rounded-xl border border-white/[0.06] bg-white/[0.01] px-3 py-4 text-center font-mono text-[9px] tracking-[0.12em] text-[#8b8598]`,
            children: `ALL UPGRADES MAXED`,
          }),
        (0, M.jsx)(`button`, {
          type: `button`,
          onClick: () => t.current?.skipUpgrade(),
          className: `mt-3 w-full rounded-xl border border-white/10 px-3 py-2 font-mono text-[9px] tracking-[0.18em] text-[#8b8598] transition hover:border-white/25 hover:text-[#e6cf9a]`,
          children: `SKIP · OPEN THE GATE`,
        }),
      ],
    }),
  });
}
function V({ snap: e, engineRef: t }) {
  return (0, M.jsx)(`div`, {
    className: L,
    children: (0, M.jsxs)(`div`, {
      className: `${R} max-w-md text-center`,
      children: [
        (0, M.jsx)(`p`, {
          className: `font-mono text-[9px] tracking-[0.28em] text-[#c9a86a]`,
          children: `RUN COMPLETE`,
        }),
        (0, M.jsx)(`h2`, {
          className: `mt-3 font-heading text-3xl tracking-[-0.02em] text-[#f0e9d8]`,
          children: `The circle fades`,
        }),
        (0, M.jsxs)(`p`, {
          className: `mt-3 text-sm leading-relaxed text-[#9d97a8]`,
          children: [
            `You reached room `,
            e.room,
            ` holding `,
            e.fragments,
            e.world === 2 ? ` aquatic fragments.` : ` fragments.`,
            (0, M.jsx)(`br`, {}),
            `Your collection is kept for the next descent.`,
          ],
        }),
        e.worldUnlocked &&
          (0, M.jsx)(`button`, {
            type: `button`,
            onClick: () => t.current?.setWorld(e.world === 1 ? 2 : 1),
            className: `mt-2 w-full rounded-xl border border-[#54c7c3]/40 bg-[#54c7c3]/10 px-4 py-2 font-heading text-[10px] tracking-[0.08em] text-[#a3e4df] transition hover:bg-[#54c7c3]/20`,
            children: e.world === 1 ? `DESCEND INTO WORLD 2` : `RETURN TO WORLD 1`,
          }),
        (0, M.jsx)(`p`, {
          className: `mt-6 font-mono text-[8px] tracking-[0.16em] text-[#6d6879]`,
          children: `DEPTH SAVED · RELOAD TO CONTINUE HERE`,
        }),
      ],
    }),
  });
}
function H({ snap: e, engineRef: t }) {
  return e.mode === null
    ? (0, M.jsx)(z, { engineRef: t, snap: e })
    : e.over
      ? (0, M.jsx)(V, { snap: e, engineRef: t })
      : e.upgradeOpen
        ? (0, M.jsx)(B, { snap: e, engineRef: t })
        : null;
}
function U({ snap: e, engineRef: t }) {
  return (0, M.jsxs)(`div`, {
    className: `rounded-2xl border border-white/10 bg-white/[0.025] p-4`,
    children: [
      (0, M.jsxs)(`div`, {
        className: `flex items-baseline justify-between`,
        children: [
          (0, M.jsx)(`p`, {
            className: `font-mono text-[9px] tracking-[0.22em] text-[#7f7a8c]`,
            children: `ELEMENTS`,
          }),
          (0, M.jsx)(`span`, {
            className: `font-mono text-[8px] tracking-[0.16em] text-[#5f5a6b]`,
            children: `UNLOCK / SWAP`,
          }),
        ],
      }),
      (0, M.jsx)(`div`, {
        className: `mt-2 grid grid-cols-2 gap-1.5`,
        children: [...e.elements]
          .sort((e, t) => e.cost - t.cost)
          .map((n) => {
            let r = !n.unlocked && e.fragments >= n.cost,
              i = !n.unlocked && !r;
            return (0, M.jsxs)(
              `button`,
              {
                type: `button`,
                disabled: i,
                onClick: () => t.current?.selectElement(n.id),
                className: [
                  `flex items-center justify-between gap-2 rounded-lg border px-2.5 py-2 text-left transition`,
                  n.equipped
                    ? `border-[#c9a86a]/60 bg-[#c9a86a]/10`
                    : `border-white/[0.08] bg-white/[0.02] hover:border-white/20`,
                  i ? `opacity-40` : ``,
                ].join(` `),
                children: [
                  (0, M.jsxs)(`span`, {
                    className: `flex min-w-0 items-center gap-1.5`,
                    children: [
                      (0, M.jsx)(`span`, {
                        className: `h-1.5 w-1.5 shrink-0 rounded-full`,
                        style: { background: n.color },
                      }),
                      (0, M.jsxs)(`span`, {
                        className: `min-w-0 flex-1`,
                        children: [
                          (0, M.jsx)(`span`, {
                            className: `block truncate font-heading text-[11px] tracking-[0.05em]`,
                            style: { color: n.color },
                            children: n.name,
                          }),
                          (0, M.jsx)(`span`, {
                            className: `mt-0.5 block truncate font-mono text-[7px] tracking-[0.04em] text-[#8b8598]`,
                            children: `${n.traits.buffLabel} · ${n.traits.debuffLabel}`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, M.jsx)(`span`, {
                    className: `shrink-0 font-mono text-[8px] tracking-[0.08em] text-[#8b8598]`,
                    children: n.equipped
                      ? `ON`
                      : n.unlocked
                        ? `SWAP`
                        : `${n.cost}`,
                  }),
                ],
              },
              n.id,
            );
          }),
      }),
      e.element?.forms &&
        (0, M.jsxs)(`div`, {
          className: `mt-3 rounded-lg border border-white/[0.08] bg-black/20 p-2`,
          children: [
            (0, M.jsx)(`p`, {
              className: `font-mono text-[8px] tracking-[0.18em] text-[#7f7a8c]`,
              children: `SOUL FORM`,
            }),
            (0, M.jsx)(`div`, {
              className: `mt-1.5 flex gap-1.5`,
              children: e.element.forms.map((n) =>
                (0, M.jsx)(
                  `button`,
                  {
                    type: `button`,
                    onClick: () => t.current?.chooseForm(n.id),
                    className: [
                      `flex-1 rounded px-1.5 py-1 font-mono text-[8px] tracking-[0.12em] transition`,
                      e.element.form === n.id
                        ? `bg-[#c9a86a]/20 text-[#e6cf9a]`
                        : `text-[#8b8598] hover:text-[#e6cf9a]`,
                    ].join(` `),
                    children: n.name,
                  },
                  n.id,
                ),
              ),
            }),
            !e.element.form &&
              (0, M.jsx)(`p`, {
                className: `mt-1 font-mono text-[8px] leading-relaxed tracking-[0.1em] text-[#6d6879]`,
                children: `PICK LIFE OR DEATH TO BUY SOUL MOVES.`,
              }),
          ],
        }),
      (0, M.jsxs)(`div`, {
        className: `mt-4 border-t border-white/[0.08] pt-3`,
        children: [
          (0, M.jsxs)(`div`, {
            className: `flex items-baseline justify-between`,
            children: [
              (0, M.jsx)(`p`, {
                className: `font-mono text-[9px] tracking-[0.22em] text-[#7f7a8c]`,
                children: `ELEMENT MOVES`,
              }),
              (0, M.jsx)(`span`, {
                className: `font-mono text-[8px] tracking-[0.16em] text-[#5f5a6b]`,
                children: `BASE + AWAKENED`,
              }),
            ],
          }),
          (0, M.jsx)(`div`, {
            className: `mt-2 space-y-1.5`,
            children: e.moves.map((e, n) =>
              (0, M.jsxs)(
                `div`,
                {
                  className: `flex items-center gap-2 rounded-lg border border-white/[0.06] bg-black/20 px-2 py-1.5`,
                  children: [
                    (0, M.jsx)(`span`, {
                      className: `grid h-5 w-5 shrink-0 place-items-center rounded border border-white/15 font-mono text-[9px] text-[#c9a86a]`,
                      children: e.key,
                    }),
                    (0, M.jsx)(`span`, {
                      className: [
                        `min-w-0 flex-1 truncate font-mono text-[9px] tracking-[0.08em]`,
                        e.locked
                          ? `text-[#5f5a6b]`
                          : e.awakened
                            ? `text-[#e6cf9a]`
                            : `text-[#b9b1a0]`,
                      ].join(` `),
                      children: e.name,
                    }),
                    e.buyable
                      ? (0, M.jsxs)(`button`, {
                          type: `button`,
                          disabled: !e.canBuy,
                          onClick: () => t.current?.buyMove(n),
                          className: [
                            `shrink-0 rounded px-1.5 py-0.5 font-mono text-[8px] tracking-[0.1em]`,
                            e.canBuy
                              ? `bg-[#c9a86a]/20 text-[#e6cf9a] hover:bg-[#c9a86a]/30`
                              : `text-[#5f5a6b]`,
                          ].join(` `),
                          children: [e.buyCost, ` FRAG`],
                        })
                      : (0, M.jsx)(`span`, {
                          className: `shrink-0 font-mono text-[8px] tracking-[0.1em] text-[#5f5a6b]`,
                          children: e.locked
                            ? `LOCKED`
                            : e.awakened
                              ? `AWAKENED`
                              : `READY`,
                        }),
                  ],
                },
                e.key,
              ),
            ),
          }),
          !e.element &&
            (0, M.jsx)(`p`, {
              className: `mt-2 font-mono text-[8px] leading-relaxed tracking-[0.1em] text-[#6d6879]`,
              children: `COLLECT FRAGMENTS, THEN UNLOCK AN ELEMENT ABOVE.`,
            }),
        ],
      }),
    ],
  });
}
function W({ snap: e }) {
  let t = e.upgrades,
    n = t.options.filter((e) => e.level > 0);
  return (0, M.jsxs)(`div`, {
    className: `mt-4 border-t border-white/[0.08] pt-3`,
    children: [
      (0, M.jsxs)(`div`, {
        className: `flex items-baseline justify-between`,
        children: [
          (0, M.jsx)(`p`, {
            className: `font-mono text-[9px] tracking-[0.22em] text-[#7f7a8c]`,
            children: `SYSTEM`,
          }),
          (0, M.jsxs)(`span`, {
            className: `font-mono text-[8px] tracking-[0.16em] text-[#5f5a6b]`,
            children: [t.used, ` ACTIVE`],
          }),
        ],
      }),
      (0, M.jsx)(`div`, {
        className: `mt-2 max-h-36 space-y-1 overflow-y-auto`,
        children: n.length
          ? n.map((i) => {
              return (0, M.jsxs)(
                `div`,
                {
                  className: `flex items-center justify-between gap-2 rounded-lg border border-white/[0.06] bg-black/20 px-2 py-1.5`,
                  children: [
                    (0, M.jsx)(`span`, {
                      className: `min-w-0 truncate font-mono text-[9px] tracking-[0.1em] text-[#e6cf9a]`,
                      children: i.name,
                    }),
                    (0, M.jsx)(`span`, {
                      className: `flex shrink-0 gap-1`,
                      children: Array.from({ length: t.maxLevel }).map(
                        (e, t) =>
                          (0, M.jsx)(
                            `span`,
                            {
                              className: [
                                `h-1.5 w-1.5 rounded-full`,
                                t < i.level ? `bg-[#c9a86a]` : `bg-white/10`,
                              ].join(` `),
                            },
                            t,
                          ),
                      ),
                    }),
                  ],
                },
                i.id,
              );
            })
          : (0, M.jsx)(`p`, {
              className: `rounded-lg border border-white/[0.06] bg-black/20 px-2 py-2 font-mono text-[8px] tracking-[0.1em] text-[#5f5a6b]`,
              children: `NO UPGRADES YET`,
            }),
      }),
    ],
  });
}
function G({ snap: e, engineRef: t }) {
  let n = e.colorways;
  if (!n) return null;
  let r = n.list.find((e) => e.id === n.active);
  return (0, M.jsxs)(`div`, {
    className: `mt-4 border-t border-white/[0.08] pt-3`,
    children: [
      (0, M.jsxs)(`div`, {
        className: `flex items-baseline justify-between`,
        children: [
          (0, M.jsx)(`p`, {
            className: `font-mono text-[9px] tracking-[0.22em] text-[#7f7a8c]`,
            children: `COLORWAY`,
          }),
          (0, M.jsx)(`span`, {
            className: `font-mono text-[8px] tracking-[0.16em] text-[#5f5a6b]`,
            children: n.unlocked ? r?.name || `DEFAULT` : `DEPTH 10`,
          }),
        ],
      }),
      (0, M.jsx)(`div`, {
        className: `mt-2 flex gap-1.5`,
        children: n.list.map((e) =>
          (0, M.jsx)(
            `button`,
            {
              type: `button`,
              "aria-label": e.name,
              title: n.unlocked ? e.name : `Reach depth 10`,
              disabled: !n.unlocked,
              onClick: () => t.current?.setColorway(e.id),
              className: [
                `h-6 flex-1 rounded-md border transition`,
                n.unlocked
                  ? `border-white/15 hover:border-white/40`
                  : `cursor-not-allowed border-white/[0.06] opacity-30`,
                n.active === e.id ? `border-white/60` : ``,
              ].join(` `),
              style: {
                background: e.glow,
                boxShadow:
                  n.active === e.id ? `0 0 14px -1px ${e.glow}` : `none`,
              },
            },
            e.id,
          ),
        ),
      }),
      !n.unlocked &&
        (0, M.jsx)(`p`, {
          className: `mt-2 font-mono text-[8px] leading-relaxed tracking-[0.14em] text-[#5f5a6b]`,
          children: `REACH DEPTH 10 TO UNLOCK COLORWAYS`,
        }),
    ],
  });
}
function K({ value: e, max: t }) {
  let n = Math.max(0, Math.min(100, (e / t) * 100));
  return (0, M.jsx)(`div`, {
    className: `mt-2 h-[3px] w-full overflow-hidden rounded-full bg-white/10`,
    children: (0, M.jsx)(`div`, {
      className: `h-full rounded-full bg-gradient-to-r from-[#c9a86a] to-[#efe0bd] transition-[width] duration-200`,
      style: { width: `${n}%` },
    }),
  });
}
function q({ snap: e, engineRef: t }) {
  let n = e.element?.color || `#7f7a8c`,
    r = e.element
      ? e.element.awakened
        ? `AWAKENED ELEMENT`
        : e.element.hasAwakening
          ? `ELEMENT EQUIPPED`
          : `NO AWAKENING · BASE MOVES`
      : `NO ELEMENT · NO ABILITIES`;
  return (0, M.jsxs)(`div`, {
    className: `rounded-2xl border border-white/10 bg-white/[0.025] p-4`,
    children: [
      (0, M.jsxs)(`div`, {
        className: `flex items-center gap-3`,
        children: [
          (0, M.jsx)(`div`, {
            className: `grid h-12 w-12 shrink-0 place-items-center rounded-full border`,
            style: { borderColor: n, boxShadow: `0 0 22px -4px ${n}` },
            children: (0, M.jsx)(`span`, {
              className: `h-2.5 w-2.5 rounded-full`,
              style: { background: n },
            }),
          }),
          (0, M.jsxs)(`div`, {
            className: `min-w-0`,
            children: [
              (0, M.jsx)(`p`, {
                className: `font-mono text-[9px] tracking-[0.22em] text-[#7f7a8c]`,
                children: `CURRENT ELEMENT`,
              }),
              (0, M.jsx)(`p`, {
                className: `font-heading text-lg leading-tight tracking-[0.06em]`,
                style: { color: n },
                children: e.element?.name ?? `NONE`,
              }),
              (0, M.jsx)(`p`, {
                className: `font-mono text-[8px] tracking-[0.16em] text-[#7f7a8c]`,
                children: r,
              }),
              e.element?.traits &&
                (0, M.jsx)(`p`, {
                  className: `mt-1 font-mono text-[8px] tracking-[0.08em] text-[#c9a86a]`,
                  children: `${e.element.traits.buffLabel} · ${e.element.traits.debuffLabel}`,
                }),
            ],
          }),
        ],
      }),
      (0, M.jsxs)(`div`, {
        className: `mt-4 flex items-end justify-between`,
        children: [
          (0, M.jsx)(`span`, {
            className: `font-mono text-[9px] tracking-[0.22em] text-[#7f7a8c]`,
            children: `VITALITY`,
          }),
          (0, M.jsxs)(`span`, {
            className: `font-heading text-sm tabular-nums text-[#efe5cf]`,
            children: [
              e.health,
              (0, M.jsxs)(`span`, {
                className: `text-[#6d6879]`,
                children: [` / `, e.maxHealth],
              }),
            ],
          }),
        ],
      }),
      (0, M.jsx)(K, { value: e.health, max: e.maxHealth }),
      (0, M.jsxs)(`div`, {
        className: `mt-4 grid grid-cols-2 gap-2`,
        children: [
          (0, M.jsxs)(`div`, {
            className: `rounded-xl border border-white/[0.08] bg-black/20 px-3 py-2`,
            children: [
              (0, M.jsx)(`p`, {
                className: `font-mono text-[8px] tracking-[0.2em] text-[#7f7a8c]`,
                children: e.world === 2 ? `AQUATIC FRAGMENTS` : `FRAGMENTS`,
              }),
              (0, M.jsx)(`p`, {
                className: `font-heading text-base tabular-nums text-[#b78aff]`,
                children: String(e.fragments).padStart(2, `0`),
              }),
            ],
          }),
          (0, M.jsxs)(`div`, {
            className: `rounded-xl border border-white/[0.08] bg-black/20 px-3 py-2`,
            children: [
              (0, M.jsx)(`p`, {
                className: `font-mono text-[8px] tracking-[0.2em] text-[#7f7a8c]`,
                children: `WORLD ${e.world} · DEPTH`,
              }),
              (0, M.jsx)(`p`, {
                className: `font-heading text-base tabular-nums text-[#efe5cf]`,
                children: String(e.room).padStart(2, `0`),
              }),
            ],
          }),
        ],
      }),
      (0, M.jsx)(W, { snap: e }),
      (0, M.jsx)(G, { snap: e, engineRef: t }),
      (0, M.jsxs)(`div`, {
        className: `mt-4 border-t border-white/[0.08] pt-3`,
        children: [
          (0, M.jsx)(`p`, {
            className: `font-mono text-[9px] tracking-[0.22em] text-[#7f7a8c]`,
            children: `FIELD NOTES`,
          }),
          (0, M.jsx)(`div`, {
            className: `mt-2 space-y-1.5`,
            children: e.log.map((e, t) =>
              (0, M.jsxs)(
                `p`,
                {
                  className: `text-[11px] leading-snug text-[#a9a2b3]`,
                  children: [
                    (0, M.jsx)(`span`, {
                      className: `mr-2 font-mono text-[9px] tracking-[0.14em] text-[#c9a86a]`,
                      children: e.label,
                    }),
                    e.message,
                  ],
                },
                `${e.label}-${t}`,
              ),
            ),
          }),
        ],
      }),
    ],
  });
}
function J() {
  let e = (0, r.useRef)(null),
    t = (0, r.useRef)(null),
    [n, i] = (0, r.useState)(A);
  return (
    (0, r.useEffect)(() => {
      let n = new j(e.current, { onSnapshot: i });
      return (
        (t.current = n),
        n.start(),
        () => {
          (n.destroy(), (t.current = null));
        }
      );
    }, []),
    (0, M.jsxs)(`div`, {
      className: `min-h-screen bg-[#08080d] text-[#ece4d3]`,
      children: [
        (0, M.jsxs)(`div`, {
          className: `mx-auto flex min-h-screen max-w-[1440px] flex-col gap-5 px-4 py-5 sm:px-6 lg:gap-6 lg:py-8`,
          children: [
            (0, M.jsxs)(`header`, {
              className: `flex flex-wrap items-center justify-between gap-3`,
              children: [
                (0, M.jsxs)(`div`, {
                  className: `flex items-center gap-3`,
                  children: [
                    (0, M.jsx)(`span`, {
                      className: `relative grid h-9 w-9 place-items-center rounded-full border border-[#c9a86a]/45`,
                      children: (0, M.jsx)(`span`, {
                        className: `h-2 w-2 rounded-full bg-[#c9a86a] shadow-[0_0_12px_2px_rgba(201,168,106,0.5)]`,
                      }),
                    }),
                    (0, M.jsxs)(`div`, {
                      children: [
                        (0, M.jsx)(`p`, {
                          className: `font-heading text-sm tracking-[0.18em] text-[#f0e9d8]`,
                          children: `ELEMENTAL DESCENT`,
                        }),
                        (0, M.jsx)(`p`, {
                          className: `font-mono text-[8px] tracking-[0.22em] text-[#6d6879]`,
                          children: `AN UNSTABLE DUNGEON CARTOGRAPHY`,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, M.jsxs)(`div`, {
                  className: `flex items-center gap-3 font-mono text-[9px] tracking-[0.2em] text-[#8b8598]`,
                  children: [
                    (0, M.jsxs)(`span`, {
                      className: `flex items-center gap-1.5`,
                      children: [
                        (0, M.jsx)(`span`, {
                          className: `h-1.5 w-1.5 rounded-full ${n.over ? `bg-[#c25a6b]` : `bg-[#7fd3a0]`}`,
                        }),
                        n.mode === null
                          ? `AWAITING ENTRY`
                          : n.over
                            ? `RUN ENDED`
                            : `RUN IN PROGRESS`,
                      ],
                    }),
                    (0, M.jsxs)(`span`, {
                      className: `rounded-full border border-white/10 px-2.5 py-1 text-[#c9a86a]`,
                      children: [`ROOM `, String(n.room).padStart(2, `0`)],
                    }),
                  ],
                }),
              ],
            }),
            (0, M.jsxs)(`div`, {
              className: `grid flex-1 items-start gap-4 lg:grid-cols-[minmax(0,1fr)_360px] xl:grid-cols-[minmax(0,1fr)_400px]`,
              children: [
                (0, M.jsxs)(`section`, {
                  className: `flex min-w-0 flex-col gap-3`,
                  children: [
                    (0, M.jsx)(I, { canvasRef: e, engineRef: t, snap: n }),
                    (0, M.jsx)(`p`, {
                      className: `px-1 font-mono text-[8px] leading-relaxed tracking-[0.16em] text-[#5f5a6b]`,
                      children: `FRAGMENTS DROP FROM EVERY FOE · WALK OVER THEM TO COLLECT · BOSSES EVERY 10 ROOMS AWAKEN AN ELEMENT`,
                    }),
                  ],
                }),
                (0, M.jsxs)(`aside`, {
                  className: `flex flex-col gap-3`,
                  children: [
                    (0, M.jsx)(q, { snap: n, engineRef: t }),
                    (0, M.jsx)(U, { snap: n, engineRef: t }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, M.jsx)(H, { snap: n, engineRef: t }),
      ],
    })
  );
}
var Y = J;
export { Y as component };
