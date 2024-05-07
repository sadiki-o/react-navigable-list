export const KEY = {
  UP: 38,
  DOWN: 40,
  ESC: 27,
  ENTER: 13,
  SPACE: 32,
  J: 74,
  K: 75,
} as const

export const KEYS: number[] = Object.values(KEY)
