import type { Faction } from "./_base";

export const sleepers: Faction = {
  name: "Sleepers",
  types: ["EM", "Thermal", "Kinetic", "Explosive", "RAR"],
  prefixes: [],
  ships: [
    {
      name: "Aegis",
      class: "Frigate",
      icons: ["HighDPS"],
    },
    {
      name: "Escort",
      class: "Frigate",
      icons: [],
    },
    {
      name: "Firewatcher",
      class: "Frigate",
      icons: ["Neaut"],
    },
    {
      name: "Preserver",
      class: "Frigate",
      icons: ["RAR"],
    },
    {
      name: "Warden",
      class: "Frigate",
      icons: ["Web"],
    },
    {
      name: "Sentinel",
      class: "Cruiser",
      icons: ["Neaut"],
    },
    {
      name: "Upholder",
      class: "Cruiser",
      icons: ["Web"],
    },
    {
      name: "Watchman",
      class: "Cruiser",
      icons: ["HighDPS"],
    },
    {
      name: "Deepwatcher",
      class: "Battleship",
      icons: ["TP"],
    },
  ],
  notes: "",
};
