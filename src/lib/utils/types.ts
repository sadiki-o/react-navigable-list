import type { CSSProperties, Dispatch, SetStateAction } from 'react';

type IListItemStylesProps = {
  selectedClasses?: string;
  selectedStyle?: CSSProperties;
  disabledClasses?: string;
  disabledStyle?: CSSProperties;
  focusedClasses?: string;
  focusedStyle?: CSSProperties;
  checkboxClasses?: string;
  checkboxStyle?: CSSProperties;
};

type INavigableListProps = {
  className?: string;
  listItemStyles?: IListItemStylesProps;

  items: {
    label: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: any;
  }[];
  selected?: number[];
  disabled: number[];
  focusedIndex?: number;
  multiple?: boolean;
  checkboxOnMultiple?: boolean;
  keyboardEvents?: boolean;
  overflowY?: boolean;
  enableVirtualization?: boolean;
  onMouseLeaveResetFocusedIndex?: boolean;
  setSelected?: Dispatch<SetStateAction<number[]>>;
  onChange?: (selected: number[] | number | undefined) => void;
};

type IListItemProps = {
  multiple: boolean;
  checkboxOnMultiple: boolean;
  disabled: boolean;
  selected: boolean;
  focused: boolean;
  children: React.ReactNode;
  index: number;
  listItemStyles?: IListItemStylesProps;
  isKeyboardNavigation: boolean;
  onClick: (index: number) => void;
  setFocusedIndex: Dispatch<SetStateAction<number | undefined>>;
};

export type { INavigableListProps, IListItemProps, IListItemStylesProps };
