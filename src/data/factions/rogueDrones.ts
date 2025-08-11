import type { Faction } from "../_base";

export const rogueDrones: Faction = {
  name: "Rogue Drones",
  types: [],
  prefixes: [
    {
      name: "Spark",
      icon: ["EM"],
    },
    {
      name: "Ember",
      icon: ["Thermal"],
    },
    {
      name: "Strike",
      icon: ["Kinetic"],
    },
    {
      name: "Blast",
      icon: ["Explosive"],
    },
    {
      name: "Snarecaster",
      icon: ["Web"],
    },
    {
      name: "Fogcaster",
      icon: ["TD", "MGD"],
    },
    {
      name: "Spotlighter",
      icon: ["TP"],
    },
    {
      name: "Fieldweaver",
      icon: ["RSB"],
    },
    {
      name: "Plateforger",
      icon: ["RAR"],
    },
  ],
  ships: [
    {
      name: "Needle Tessella",
      class: "Frigate",
      icons: [],
    },
    {
      name: "Lance Tessella",
      class: "Frigate",
      icons: ["HighDPS"],
    },
    {
      name: "Lance Tessella",
      class: "Frigate",
      icons: ["HighDPS"],
    },
    {
      name: "Tessera",
      class: "Battlecruiser",
      icons: ["HighDPS", "HighDPS"],
    },
    {
      name: "Overmind",
      class: "Battleship",
      icons: ["Thermal", "Kinetic"],
      tierNames: {
        1: { name: "Photic", icons: [] },
        2: { name: "Twilit", icons: [] },
        3: { name: "Hadal", icons: [] },
        4: { name: "Bathyic", icons: [] },
        5: { name: "Benthic", icons: ["Web"] },
        6: { name: "Endobenthic", icons: ["Web"] },
      },
    },
  ],
  notes:
    "Tessera Battlecruiser have extreme damage and tracking but short optimal, Stay > 12km away.",
};
