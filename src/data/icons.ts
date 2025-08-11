import { type Class, type Icons, type IconToFile, type Ship } from "./_base";

const iconsPath = "./public/eveIcons";

function icon(name: string): string {
  return `${iconsPath}/${name}`;
}

const damageIcons = {
  Thermal: icon("Icon_damage_therm.png"),
  Explosive: icon("Icon_damage_exp.png"),
  Kinetic: icon("Icon_damage_kin.png"),
  EM: icon("Icon_damage_em.png"),
};

const electronicWarFareIcons = {
  Scram: icon("Icon_warp_scrambler_i.png"),
  Damps: icon("Icon_remote_sensor_dampening.png"),
  TD: icon("Icon_track_disruptor_64.png"),
  MGD: icon("Icon_missile_guidance_computer_i.png"),
  RSB: icon("Icon_shield_transporter_i.png"),
  RAR: icon("Icon_remote_armor_repair_i.png"),
  TP: icon("Icon_target_painter_i.png"),
  Neaut: icon("Icon_energy_neutralizer_i.png"),
  NOS: icon("Vamp.png"),
  Web: icon("Icon_stasis_webifier_i.png"),
};

const dangerIcons = {
  KeepAtRange: icon("Icon_target_range.png"),
  HighDPS: icon("danger.svg"),
};

const tank = {
  Armour: icon("Icon_armor.png"),
  Shield: icon("Icon_shield_glow.png"),
};

const edenConIcons = {
  "Small Vorton Projector": icon("small_vorton.png"),
  "Medium Vorton Projector": icon("med_vorton.png"),
  "Large Vorton Projector": icon("large_vorton.png"),
};

const icons = {
  ...damageIcons,
  ...electronicWarFareIcons,
  ...dangerIcons,
  ...tank,
  ...edenConIcons,
} as IconToFile;

export function getIcon(name: Icons): string {
  return icons[name] || icon("Icon_unknown.png");
}

const shipIcons = {
  Frigate: icon("Isis_frigate.png"),
  Destroyer: icon("Isis_destroyer.png"),
  Cruiser: icon("Isis_cruiser.png"),
  Battlecruiser: icon("Isis_battlecruiser.png"),
  Battleship: icon("Isis_battleship.png"),
};

export function getShipIcon(name: Class): string {
  return shipIcons[name] || icon("Isis_unknown.png");
}
