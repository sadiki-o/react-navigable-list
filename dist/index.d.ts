import { CSSProperties } from 'react';
import { Dispatch } from 'react';
import { INavigableListProps as INavigableListProps_2 } from '../../utils/types';
import { SetStateAction } from 'react';

export declare type IListItemProps = {
    multiple: boolean;
    checkboxOnMultiple: boolean;
    disabled: boolean;
    selected: boolean;
    focused: boolean;
    children: React.ReactNode;
    index: number;
    onClick: (index: number) => void;
    listItemStyles?: IListItemStylesProps;
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

export declare type INavigableListProps = {
    className?: string;
    items: {
        label: string;
        value: any;
    }[];
    selected?: number[];
    setSelected?: Dispatch<SetStateAction<number[]>>;
    disabled: number[];
    focusedIndex?: number;
    multiple?: boolean;
    checkboxOnMultiple?: boolean;
    onChange?: (selected: number[] | number | undefined) => void;
    keyboardEvents?: boolean;
    listItemStyles?: IListItemStylesProps;
    overflowY?: boolean;
};

declare const ReactNavigableList: React.FC<INavigableListProps_2>;
export default ReactNavigableList;

export { }
