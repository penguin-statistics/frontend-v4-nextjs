export enum ServerEnum {
  // CN, the Arknights main server launched initially in China, and is maintained by 鹰角网络 Hypergryph
  CN = "CN",

  // US, the Arknights "global" server launched in US, and is maintained by Yostar Limited
  US = "US",

  // JP, the Arknights Japan server launched in Japan, and is maintained by 株式会社Yostar
  JP = "JP",

  // KR, the Arknights Korea server launched in Korea, and is maintained by Yostar Limited
  KR = "KR"
}

export enum LanguageEnum {
  // zh, Chinese, 中文;
  // Temporarily in Penguin Statistics we only support Chinese (Simplified)
  ZH = "zh",

  // en, English, 英文
  EN = "en",

  // ja, Japanese, 日文
  JA = "ja",

  // ko, Korean, 韩文
  KO = "ko"
}

export interface Existence {
  exist?: boolean;
  openTime?: number | null;
  closeTime?: number | null;
}

export type WithServer<T> = {
  [key in ServerEnum]: T
}

export type WithLanguage<T> = {
  [key in LanguageEnum]: T
}

export type WithPartialLanguage<T> = {
  [key in LanguageEnum]?: T
}