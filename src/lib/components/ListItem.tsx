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
        'rnl-reset mt-[2px] flex h-[20px] cursor-default items-center px-1 text-[12px] text-[#7C7975]', // Default styles
        {
          // Focused item styles when keyboard navigation is active
          [listItemStyles?.focusedClasses || 'bg-[#e6e4e0] text-[#94928f]']:
            isKeyboardNavigation && focused && !disabled && !selected,

          // Disabled item styles
          [listItemStyles?.disabledClasses ?? '!text-[#C7C8CC]']: disabled,

          // Selected item styles
          [listItemStyles?.selectedClasses ?? 'bg-option-selected !text-white']:
            selected,

          // Hover styles (only apply if mouse is being used and not focused or disabled)
          'hover:bg-[#e6e4e0] hover:text-[#94928f]':
            !isKeyboardNavigation && !disabled && !selected
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
          className={`${listItemStyles?.checkboxClasses} rnl-reset mr-1 h-3 w-3 border-list-checkbox bg-none text-green-500`}
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
