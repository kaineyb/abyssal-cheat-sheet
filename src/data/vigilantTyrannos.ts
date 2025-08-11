import type { Faction } from "./_base";

export const vigilantTyrannos: Faction = {
  name: "Vigilant Tyrannos",
  types: ["EM", "Thermal", "Kinetic", "Explosive"],
  prefixes: [
    {
      name: "Entanglement",
      icon: ["Web"],
    },
    {
      name: "Nullwarp",
      icon: ["Scram"],
    },
    { name: "Nullcharge", icon: ["Neaut"] },
    { name: "Confuser", icon: ["TD", "MGD"] },
    { name: "Dissipator", icon: ["Neaut"] },
    { name: "Illuminator", icon: ["TP"] },
    { name: "Obfuscator", icon: ["Damps"] },
    { name: "Spearfisher", icon: ["Scram"] },
    { name: "Lancer", icon: ["HighDPS"] },
  ],
  ships: [
    { name: "Ephialtes", class: "Cruiser", icons: [] },
    { name: "Scyalla", class: "Cruiser", icons: [] },
    {
      name: "Karybdis",
      class: "Battleship",
      icons: ["HighDPS", "KeepAtRange"],
    },
  ],
  notes: "Scyalla: Check Type, Karybdis: Spiral to <30km",
};
