import type { Faction } from "./_base";

export const triglavian: Faction = {
  name: "Triglavian Collective",
  types: ["Thermal", "Explosive", "RAR"],
  prefixes: [
    {
      name: "Anchoring",
      icon: ["Scram"],
    },
    {
      name: "Blinding",
      icon: ["Damps"],
    },
    {
      name: "Ghosting",
      icon: ["TD", "MGD"],
    },
    {
      name: "Harrowing/Striking",
      icon: ["Thermal", "Explosive"],
    },
    {
      name: "Renewing",
      icon: ["RAR"],
    },
    {
      name: "Shining",
      icon: ["TP"],
    },
    {
      name: "Tangling",
      icon: ["Web"],
    },
  ],
  ships: [
    {
      name: "Damavik",
      class: "Frigate",
      icons: [],
    },
    {
      name: "Kikimora",
      class: "Destroyer",
      icons: ["HighDPS"],
    },
    {
      name: "Vedmak",
      class: "Cruiser",
      icons: ["HighDPS"],
    },
    {
      name: "Rodiva",
      class: "Cruiser",
      icons: [],
    },
    {
      name: "Drekavac",
      class: "Battlecruiser",
      icons: ["KeepAtRange"],
    },
    {
      name: "Leshak",
      class: "Battleship",
      icons: ["KeepAtRange"],
    },
  ],
  notes:
    "Vila prefix comes with Drones, Kill Triglavian ships to shut off drones, New Drones will be deployed if destroyed.",
};
