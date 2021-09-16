import {Existence, WithLanguage, WithServer} from "./common";

export interface Stage {
  stageType: string;
  stageId: string;
  zoneId: string;
  code: string;
  apCost: number;
  dropInfos?: (DropInfo)[] | null;
  existence: WithServer<Existence>;
  minClearTime?: number | null;
  code_i18n: WithLanguage<string>;
  isGacha?: boolean | null;
  recognitionOnly?: (string)[] | null;
}

export interface DropInfo {
  itemId?: string | null;
  dropType: string;
  bounds: Bounds;
}

export interface Bounds {
  lower: number;
  upper: number;
  exceptions?: (number)[] | null;
}
