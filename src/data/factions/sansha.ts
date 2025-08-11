import type { Faction } from "./_base";

export const sansha: Faction = {
  name: "Sansha's Nation",
  types: ["EM", "Thermal", "Shield"],
  prefixes: [],
  ships: [
    {
      name: "Fisher",
      class: "Frigate",
      icons: ["Web"],
    },
    {
      name: "Herald",
      class: "Frigate",
      icons: ["TD", "MGD"],
    },
    {
      name: "Hunter",
      class: "Frigate",
      icons: [],
    },
    {
      name: "Lookout",
      class: "Frigate",
      icons: ["Damps"],
    },
    {
      name: "Priest",
      class: "Frigate",
      icons: ["RSB"],
    },
    {
      name: "Smith",
      class: "Frigate",
      icons: ["Neaut"],
    },
    {
      name: "Trapper",
      class: "Frigate",
      icons: ["Scram"],
    },
    {
      name: "Torchbearer",
      class: "Frigate",
      icons: ["TP"],
    },
    {
      name: "Knight",
      class: "Cruiser",
      icons: ["Web", "Neaut", "HighDPS", "KeepAtRange"],
    },
  ],
  notes:
    "Sansha's are to be kited, they are slower than almost every ship and are very dangerous up close.",
};
