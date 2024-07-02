import type {
  CSSProperties,
  Dispatch,
  ReactNode,
  SetStateAction,
  UIEvent
} from 'react';

// Define the remaining types used in the INavigableListProps
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

// Define the base props that are always available
type BaseProps = {
  /**
   * class name of the the list element.
   */
  className?: string;
  /**
   * styling/classes of the items/rows depending on their state (selected, disabled, focused).
   */
  listItemStyles?: IListItemStylesProps;
  /**
   * List of items/rows to be fed to the component.
   *
   * Each item should have a `label` and `value` field, and additional fields can be added as needed.
   * @default - []
   */
  items: {
    label: string;
    value: any;
    [key: string]: any; // Index signature to allow additional key-value pairs
  }[];
  /**
   * list of selected indexes.
   * @default - []
   */
  selected?: number[];
  /**
   * list of disabled indexes.
   * @default - []
   */
  disabled?: number[];
  /**
   * default focused/hovered index.
   * @default - 0
   */
  focusedIndex?: number;
  /**
   * enable keyboard navigation/interactions.
   * @default - false
   */
  keyboardEvents?: boolean;
  /**
   * enable scrolling by dragging rows/items with mouse.
   * @default - true
   */
  enableDragToScroll?: boolean;
  /**
   * enable overflow if you want a scrollable list, else a normal list without scrolling.
   * @default - false
   */
  overflowY?: boolean;
  /**
   * Reset focused index to undefined on mouse leave.
   * @default false
   */
  onMouseLeaveResetFocusedIndex?: boolean;
  /**
   * Callback function triggered when selected indexes change.
   */
  onChange: (selectedIndexes: number[] | number | undefined) => void;
  /**
   * Keep track of the scroll position
   */
  onScroll: (
    scrollEvent: UIEvent<HTMLDivElement | HTMLUListElement>,
    isScrollEnd: boolean,
    isScrollStart: boolean
  ) => void;
};

type MultipleEnabledProps = {
  /**
   * when multiple is enabled, limit the maximum selected items.
   * @default - undefined
   */
  maxSelection?: number | undefined;
  /**
   * enable checkboxes for multi select.
   * @default - false
   */
  checkboxOnMultiple?: boolean;
};

type NonMultipleEnabledProps = {
  maxSelection?: never;
  checkboxOnMultiple?: never;
};

// Define the props for when virtualization is enabled
type VirtualizedProps = {
  /**
   * Height of each item row.
   * @default 20px
   */
  itemHeight: number;
  /**
   * Height of the list window.
   * @default 300px
   */
  windowHeight: number;
  /**
   * Number of extra items to render before and after the visible area/range when virtualization is enabled.
   * @default 20
   */
  overscan?: number;
};

// Define the props for when virtualization is disabled
type NonVirtualizedProps = {
  itemHeight?: never;
  windowHeight?: never;
  overscan?: never;
};

// Combine the base props with the conditional props using intersection types
type INavigableListProps = BaseProps &
  (
    | ({
        enableVirtualization?: false;
      } & NonVirtualizedProps)
    | ({
        enableVirtualization: true;
      } & VirtualizedProps)
  ) &
  (
    | ({
        multiple?: false;
      } & NonMultipleEnabledProps)
    | ({
        multiple: true;
      } & MultipleEnabledProps)
  );

type IListItemProps = {
  multiple: boolean;
  checkboxOnMultiple: boolean;
  disabled: boolean;
  selected: boolean;
  focused: boolean;
  children: ReactNode;
  index: number;
  listItemStyles?: IListItemStylesProps;
  isKeyboardNavigation: boolean;
  itemHeight?: number;
  onClick: (index: number) => void;
  setFocusedIndex: Dispatch<SetStateAction<number | undefined>>;
};

export type { INavigableListProps, IListItemProps, IListItemStylesProps };
