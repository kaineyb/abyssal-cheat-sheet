import type { Faction } from "./_base";

export const angel: Faction = {
  name: "Angel Cartel",
  types: ["Shield"],
  prefixes: [],
  ships: [
    {
      name: "Burst",
      class: "Frigate",
      icons: ["RSB"],
    },
    {
      name: "Dramiel",
      class: "Frigate",
      icons: ["EM", "Thermal", "Kinetic"],
    },
    {
      name: "Elite Dramiel",
      class: "Frigate",
      icons: ["EM", "Thermal", "Kinetic", "Web"],
    },
    {
      name: "Echo",
      class: "Frigate",
      icons: ["Web", "Scram", "Explosive", "Kinetic"],
    },
    {
      name: "Fury",
      class: "Frigate",
      icons: ["Neaut", "Explosive", "Kinetic"],
    },
    {
      name: "Medusa",
      class: "Frigate",
      icons: ["Damps", "Kinetic", "Thermal"],
    },
    {
      name: "Swordspine",
      class: "Frigate",
      icons: ["TP", "Kinetic", "Thermal"],
    },
    {
      name: "Cynabal / Elite Cynabal",
      class: "Cruiser",
      icons: ["Neaut", "Web", "EM", "Explosive", "HighDPS"],
    },
    {
      name: "Ixion",
      class: "Cruiser",
      icons: ["MGD", "TP", "Kinetic", "Thermal", "Explosive"],
    },
  ],
  notes: "",
};
