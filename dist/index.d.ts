import { CSSProperties } from 'react';
import { Dispatch } from 'react';
import { FC } from 'react';
import { INavigableListProps as INavigableListProps_2 } from '../../utils/types';
import { SetStateAction } from 'react';

declare type BaseProps = {
    /**
     * class name of the the unordered list.
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
        [key: string]: any;
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
     * enable multi select or not.
     * @default - false
     */
    multiple?: boolean;
    /**
     * enable checkboxes for multi select.
     * @default - false
     */
    checkboxOnMultiple?: boolean;
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
     * Reset focused index on mouse leave.
     * @default false
     */
    onMouseLeaveResetFocusedIndex?: boolean;
    /**
     * Callback function triggered when selected indexes change.
     */
    onChange?: (selected: number[] | number | undefined) => void;
};

export declare type IListItemProps = {
    multiple: boolean;
    checkboxOnMultiple: boolean;
    disabled: boolean;
    selected: boolean;
    focused: boolean;
    children: React.ReactNode;
    index: number;
    listItemStyles?: IListItemStylesProps;
    isKeyboardNavigation: boolean;
    itemHeight?: number;
    onClick: (index: number) => void;
    setFocusedIndex: Dispatch<SetStateAction<number | undefined>>;
};

export declare type IListItemStylesProps = {
    selectedClasses?: string;
    selectedStyle?: CSSProperties;
    disabledClasses?: string;
    disabledStyle?: CSSProperties;
    focusedClasses?: string;
    focusedStyle?: CSSProperties;
    checkboxClasses?: string;
    checkboxStyle?: CSSProperties;
};

export declare type INavigableListProps = BaseProps & (({
    enableVirtualization?: false;
} & NonVirtualizedProps) | ({
    enableVirtualization: true;
} & VirtualizedProps));

declare type NonVirtualizedProps = {
    itemHeight?: never;
    windowHeight?: never;
    overscan?: never;
};

declare const ReactNavigableList: FC<INavigableListProps_2>;
export default ReactNavigableList;

declare type VirtualizedProps = {
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

export { }
