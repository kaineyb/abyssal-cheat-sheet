type DamageIcons = "Thermal" | "Explosive" | "Kinetic" | "EM";
type ElectronicWarFare =
  | "Scram"
  | "Damps"
  | "TD"
  | "MGD"
  | "RSB"
  | "RAR"
  | "TP"
  | "Neaut"
  | "NOS"
  | "Web";

type DangerIcons = "HighDPS" | "KeepAtRange";

type Tank = "Armour" | "Shield";
type EdencomGuns =
  | "Small Vorton Projector"
  | "Medium Vorton Projector"
  | "Large Vorton Projector";

type Resistances =
  | "ThermalResist"
  | "ExplosiveResist"
  | "KineticResist"
  | "EMResist";

type Bonus =
  | "Capacitor"
  | "Velocity"
  | "ScanRes"
  | "ArmourBonus"
  | "ShieldBonus";

export type Icons =
  | DamageIcons
  | ElectronicWarFare
  | DangerIcons
  | Tank
  | EdencomGuns
  | Resistances
  | Bonus;

export type Tiers = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type Class =
  | "Frigate"
  | "Destroyer"
  | "Cruiser"
  | "Battlecruiser"
  | "Battleship";

export type Ship = {
  name: string;
  class: Class;
  icons: Icons[];
  tierNames?: {
    [key: number]: { name: string; icons: Icons[] };
  };
};

export type Prefix = {
  name: string;
  icon: Icons[];
};

export type Faction = {
  name: string;
  types: (Icons | Tank)[];
  ships: Ship[];
  prefixes: Prefix[];
  notes: string;
};

export type FilamentIcon =
  | "electrical"
  | "dark"
  | "exotic"
  | "firestorm"
  | "gamma";

export type Filament = {
  name: string;
  tier: number;
  min: number;
  max: number;
};

export type DropIcons = "Zero-Point Condensate" | "Crystalline Isogen-10";

export type FilamentEffect = {
  name: string;
  mainIcon: FilamentIcon;
  icons: Icons[];
  penalty: string;
  bonus: string;
  penaltyIcon: Icons;
  bonusIcon: Icons;
  drops: DropIcons[];
};

export type BoostIcon = "";

export type Boost = {
  name: string;
  icon: string;
  modifiers: string[];
};

export type IconToFile = {
  [key in Icons]: string;
};
