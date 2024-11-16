/* eslint-disable react/no-unknown-property */
import clsx from 'clsx';
import { FunctionComponent, memo } from 'react';
import { IListItemProps } from '@/utils/types';
import React from 'react';

const ListItem: FunctionComponent<IListItemProps> = memo(function ListItem({
  multiple,
  checkboxOnMultiple,
  disabled,
  selected,
  focused,
  children,
  index,
  listItemStyles,
  isKeyboardNavigation,
  itemHeight = 20,
  onClick,
  setFocusedIndex
}) {
  return (
    <li
      className={clsx(
        `${selected ? 'list-item-selected' : focused ? 'list-item-focused' : disabled ? 'list-item-disabled' : 'normal-list-item'} mt-[2px] flex h-[20px] cursor-default items-center px-1 text-[12px] text-[#7C7975]`,
        {
          [listItemStyles?.focusedClasses || 'bg-[#e6e4e0] text-[#94928f]']:
            focused && !disabled && !selected,
          [listItemStyles?.disabledClasses ?? '!text-[#C7C8CC]']: disabled,
          [listItemStyles?.selectedClasses ?? 'bg-option-selected !text-white']:
            selected,
          ['hover:bg-[#e6e4e0] hover:text-[#94928f]']:
            !isKeyboardNavigation &&
            !focused &&
            !disabled &&
            !listItemStyles?.focusedClasses
        }
      )}
      style={{
        ...(itemHeight && { height: itemHeight }),
        ...(disabled && listItemStyles?.disabledStyle),
        ...(focused && !selected && !disabled && listItemStyles?.focusedStyle),
        ...(selected && listItemStyles?.selectedStyle)
      }}
      onClick={() => !disabled && onClick(index)}
      onMouseEnter={() => {
        if (!disabled && !isKeyboardNavigation) {
          setFocusedIndex(index);
        }
      }}
      data-list-index={index}
    >
      {multiple && checkboxOnMultiple && (
        <input
          type="checkbox"
          className={`${listItemStyles?.checkboxClasses} mr-1 h-3 w-3 border-list-checkbox bg-none text-green-500`}
          checked={selected}
          onChange={() => !disabled && onClick(index)}
          style={{
            ...(checkboxOnMultiple && listItemStyles?.checkboxStyle)
          }}
        />
      )}
      {children}
    </li>
  );
});

export default ListItem;
