import {Existence, WithLanguage, WithPartialLanguage, WithServer} from "./common";

type SpriteCoordinate = [number, number]

export interface Item {
  itemId: string;
  name: string;
  sortId: number;
  rarity: number;
  existence: WithServer<Existence>;
  itemType: string;
  addTimePoint: number;
  spriteCoord: SpriteCoordinate[];
  groupID: string;
  name_i18n: WithLanguage<string>;
  alias: WithPartialLanguage<string[]>;
  pron: WithPartialLanguage<string[]>;
}