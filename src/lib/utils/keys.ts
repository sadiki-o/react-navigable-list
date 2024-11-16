export const KeysEnum = {
  UP: 'ArrowUp',
  DOWN: 'ArrowDown',
  ESC: 'Escape',
  ENTER: 'Enter',
  SPACE: ' ',
  J: 'j',
  K: 'k'
} as const;

type KeyType = (typeof KeysEnum)[keyof typeof KeysEnum];

// Infer a more accurate type for KeysEnumS
export const KeysList = Object.values(KeysEnum) as KeyType[];

export const isKeyType = (value: string): value is KeyType => {
  return KeysList.includes(value as KeyType);
};
