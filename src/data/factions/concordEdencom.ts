import type { Faction } from "../_base";

export const concordEdencom: Faction = {
  name: "Concord Edencom",
  types: ["EM", "Kinetic", "Shield"],
  prefixes: [
    { name: "Arrester", icon: ["Explosive", "Web"] },
    { name: "Marker", icon: ["Thermal", "TP"] },
    { name: "Drainer", icon: ["Thermal", "Explosive", "Neaut"] },
    { name: "Assault/Attacker", icon: ["Thermal"] },
  ],
  ships: [
    { name: "Pacifier", class: "Frigate", icons: [] },
    { name: "Enforcer", class: "Cruiser", icons: [] },
    { name: "Marshal", class: "Battleship", icons: ["HighDPS"] },
    {
      name: "Stormbringer",
      class: "Frigate",
      icons: ["Small Vorton Projector"],
    },
    {
      name: "Skybreaker",
      class: "Cruiser",
      icons: ["Medium Vorton Projector"],
    },
    {
      name: "Thunderchild",
      class: "Battleship",
      icons: ["Large Vorton Projector"],
    },
  ],
  notes:
    "All damage in this room is explosions (like missiles), keep speed up as high as possible until room is under control. Marshall is low health, kill quickly to reduce incoming damage",
};
