/* eslint-disable @typescript-eslint/no-explicit-any */
import '@/lib/tailwind/theme.css';
import { useState, useEffect, useRef, FC } from 'react';
import clsx from 'clsx';

import { KEYS, KEY } from '@/utils/keys';
import { INavigableListProps } from '@/utils/types';
import { useDragToScroll } from '@/hooks/useDragToScroll';
import { range } from '@/utils/helpers';
import ListItem from '@/components/ListItem';
import { List } from 'react-virtualized';



const ReactNavigableList: FC<INavigableListProps> = ({
  className,
  items, // rename parameter
  selected: initialSelected,
  disabled,
  focusedIndex: initialFocusedIndex = 0,
  multiple = false,
  checkboxOnMultiple = true,
  keyboardEvents = true,
  listItemStyles,
  overflowY = true,
  enableVirtualization = true,
  onMouseLeaveResetFocusedIndex = false,
  onChange,
  setSelected: externalSetSelected
}) => {
  const [focusedIndex, setFocusedIndex] = useState<number | undefined>(
    initialFocusedIndex
  );
  const [selectedItems, setSelectedItems] = useState<number[]>(
    initialSelected ?? []
  );
  // Add a state variable to track keyboard navigation state
  const [isKeyboardNavigation, setIsKeyboardNavigation] = useState(false);

  // Define setSelected function if not provided
  const setSelected = externalSetSelected ?? setSelectedItems;
  const selected = initialSelected ?? selectedItems;

  const ulRef = useRef<any>(null);

  const events = useDragToScroll(ulRef);

  // useEffect(() => {
  //   if (focusedIndex !== undefined && ulRef.current) {
  //     console.log(ulRef.current);
  //     const li = ulRef.current.querySelector(`[list-index="${focusedIndex}"]`);

  //     if (li) {
  //       li.scrollIntoView({
  //         behavior: 'smooth',
  //         block: 'nearest'
  //       });
  //     }
  //   }
  // }, [focusedIndex]);

  useEffect(() => {
    // trigger user defined onChange on every change
    onChange && onChange(selected);
  }, [onChange, selected]);

  const focusPrevious = () => {
    // if all items are disabled
    if (items.length === disabled.length) {
      return;
    }
    let newIndex = undefined;
    let range_;
    if (focusedIndex === 0) {
      range_ = range(1, items.length).reverse();
    } else {
      range_ = [
        ...range(0, focusedIndex!).reverse(),
        ...range(focusedIndex! + 1, focusedIndex!).reverse()
      ];
    }
    for (const element of range_) {
      if (!disabled?.includes(element)) {
        newIndex = element;
        1;
        break;
      }
      focusPrevious;
    }

    setFocusedIndex(newIndex);
  };

  const focusNext = () => {
    // if all items are disabled
    if (items.length === disabled.length) {
      return;
    }
    let newIndex = undefined;
    let range_;
    if (focusedIndex === items.length - 1) {
      range_ = range(0, items.length - 1);
    } else {
      range_ = [
        ...range(focusedIndex! + 1, items.length),
        ...range(0, focusedIndex!)
      ];
    }
    for (const element of range_) {
      if (!disabled?.includes(element)) {
        newIndex = element;
        break;
      }
    }

    setFocusedIndex(newIndex);
  };

  // handle insert, de-select
  const handleActions = (index?: number) => {
    if (index) {
      setFocusedIndex(index);
    }

    if (multiple) {
      if (selected.includes(index ?? focusedIndex!)) {
        setSelected(selected.filter(el => el !== (index ?? focusedIndex)));
      } else {
        setSelected([...selected, index ?? focusedIndex!]);
      }
    } else {
      setSelected([index ?? focusedIndex!]);
    }
  };

  const onKeyDown = (event: any) => {
    // disable keyboard events when keyboardEvents is false
    if (!keyboardEvents) return;

    setIsKeyboardNavigation(true);

    const key = event.keyCode;

    if (key === KEY.UP || key === KEY.K) {
      focusPrevious();
    } else if (key === KEY.DOWN || key === KEY.J) {
      focusNext();
    } else if (key === KEY.SPACE || key === KEY.ENTER) {
      handleActions();
    }

    // prevent default behavior where in some situations pressing the
    // key up / down would scroll the browser window
    if (KEYS?.includes(key)) {
      event.preventDefault();
    }
  };

  function rowRenderer({
    key, // Unique key within array of rows
    index, // Index of row within collection
    isScrolling, // The List is currently being scrolled
    isVisible, // This row is visible within the List (eg it is not an overscanned row)
    style // Style object to be applied to row (to position it)
  }) {
    return (
      <div key={key} style={style}>
        <ListItem
          key={index}
          multiple={multiple}
          checkboxOnMultiple={checkboxOnMultiple}
          index={index}
          disabled={disabled?.includes(index)}
          selected={selected?.includes(index)}
          focused={focusedIndex === index}
          listItemStyles={listItemStyles}
          isKeyboardNavigation={isKeyboardNavigation}
          onClick={handleActions}
          setFocusedIndex={setFocusedIndex}
        >
          {items[index].label}
        </ListItem>
      </div>
    );
  }

  return enableVirtualization ? (
    <List
      height={20 * items.length} // Set the height of the list
      rowCount={items.length} // Number of items in the list
      rowHeight={20} // Size of each item in the list
      width={100} // Set the width of the list
      rowRenderer={rowRenderer}
      ref={ulRef}
      // className={clsx(
      //   'react-navigable-list m-0 list-none border-none p-0 outline-none overflow-y-auto',
      //   overflowY && 'overflow-y-auto',
      //   className
      // )}
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseMoveCapture={() => setIsKeyboardNavigation(false)}
      onMouseLeave={() => {
        onMouseLeaveResetFocusedIndex && setFocusedIndex(undefined);
      }}
      {...(overflowY && events)}
    ></List>
  ) : (
    <ul
      ref={ulRef}
      className={clsx(
        'react-navigable-list m-0 list-none border-none p-0 outline-none',
        overflowY && 'overflow-y-auto',
        className
      )}
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseMoveCapture={() => setIsKeyboardNavigation(false)}
      onMouseLeave={() => {
        onMouseLeaveResetFocusedIndex && setFocusedIndex(undefined);
      }}
      {...(overflowY && events)}
    >
      {items.map((itemContent, index) => (
        <ListItem
          key={index}
          multiple={multiple}
          checkboxOnMultiple={checkboxOnMultiple}
          index={index}
          disabled={disabled?.includes(index)}
          selected={selected?.includes(index)}
          focused={focusedIndex === index}
          listItemStyles={listItemStyles}
          isKeyboardNavigation={isKeyboardNavigation}
          onClick={handleActions}
          setFocusedIndex={setFocusedIndex}
        >
          {itemContent.label}
        </ListItem>
      ))}
    </ul>
  );
};

export default ReactNavigableList;
