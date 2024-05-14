/* eslint-disable @typescript-eslint/no-explicit-any */
import '@/lib/tailwind/theme.css';
import { useState, useEffect, useRef, FC } from 'react';
import clsx from 'clsx';

import { KEYS, KEY } from '@/utils/keys';
import { INavigableListProps } from '@/utils/types';
import { useDragToScroll } from '@/hooks/useDragToScroll';
import { range } from '@/utils/helpers';
import ListItem from '@/components/ListItem';

const ReactNavigableList: FC<INavigableListProps> = ({
  className,
  items = [], // rename parameter
  selected: initialSelected = [],
  disabled = [],
  focusedIndex: initialFocusedIndex = 0,
  multiple = false,
  checkboxOnMultiple = false,
  keyboardEvents = true,
  enableDragToScroll,
  listItemStyles,
  overflowY = true,
  enableVirtualization = true,
  onMouseLeaveResetFocusedIndex = false,
  itemHeight = 20,
  overscan = 20,
  windowHeight = 300,
  onChange
}) => {
  // value guard to make initial focused index don't exceed items length
  if (initialFocusedIndex >= items.length) {
    initialFocusedIndex = 0;
  }
  // focused item index
  const [focusedIndex, setFocusedIndex] = useState<number | undefined>(
    initialFocusedIndex
  );
  // list of selected indexes
  const [selected, setSelected] = useState<number[]>(initialSelected);
  // Add a state variable to track keyboard navigation state
  const [isKeyboardNavigation, setIsKeyboardNavigation] = useState(false);

  const scrollContainerRef = useRef<any>(null);

  const events = useDragToScroll(scrollContainerRef);

  useEffect(() => {
    // trigger user defined onChange on every change
    onChange && onChange(selected);
  }, [onChange, selected]);

  // if user decide to load component at a specific item focused/hovered
  useEffect(() => {
    if (overflowY) updateScrollPosition(initialFocusedIndex);
  }, [overflowY, initialFocusedIndex]);

  // this code is responsible for syncing scroll with the currst focused item
  const updateScrollPosition = (focusedIndex: number) => {
    const li: HTMLLIElement = scrollContainerRef.current.querySelector(
      `[list-index="${focusedIndex}"]`
    );

    if (li) {
      li.scrollIntoView({
        behavior: 'instant',
        block: 'nearest'
      });
    }
  };

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
    updateScrollPosition(newIndex!);
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
    updateScrollPosition(newIndex!);
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

  if (enableVirtualization) {
    // Ensure initialFocusedIndex is within the valid range when initialFocusedIndex is provided
    const clampedInitialFocusedIndex = Math.min(
      Math.max(0, initialFocusedIndex),
      items.length - 1
    );

    const [renderedNodesCount, setRenderedNodesCount] = useState(
      Math.min(
        items.length,
        Math.floor(windowHeight / itemHeight) + 2 * overscan
      )
    );

    const initialScrollTop =
      clampedInitialFocusedIndex >= 0
        ? Math.max(
            0,
            (clampedInitialFocusedIndex - Math.floor(renderedNodesCount / 2)) *
              itemHeight
          )
        : 0;
    const [scrollTop, setScrollTop] = useState(initialScrollTop);
    const [startIndex, setStartIndex] = useState(
      Math.max(0, Math.floor(scrollTop / itemHeight) - overscan)
    );

    const outerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const newStartIndex = Math.max(
        0,
        Math.floor(scrollTop / itemHeight) - overscan
      );
      const newRenderedNodesCount = Math.min(
        items.length - newStartIndex,
        Math.floor(windowHeight / itemHeight) + 2 * overscan
      );

      setStartIndex(newStartIndex);
      setRenderedNodesCount(newRenderedNodesCount);
    }, [scrollTop, items.length, windowHeight, itemHeight, overscan]);

    const generateRows = () => {
      let displayedRows: JSX.Element[] = [];
      for (let i = startIndex; i < startIndex + renderedNodesCount; i++) {
        const index = i;
        displayedRows.push(
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
        );
      }

      return displayedRows;
    };

    return (
      <div
        ref={outerRef}
        className="overflow-y-scroll w-full"
        style={{ height: `${windowHeight}px` }}
        onScroll={e => {
          setScrollTop(e.currentTarget.scrollTop);
        }}
      >
        <div
          style={{
            height: items.length * itemHeight
          }}
          ref={scrollContainerRef}
        >
          <ul
            style={{
              height: `${renderedNodesCount * itemHeight}px`,
              transform: `translateY(${startIndex * itemHeight}px)`
            }}
            className="focus:outline-none"
            tabIndex={0}
            onKeyDown={onKeyDown}
            onMouseMoveCapture={() => setIsKeyboardNavigation(false)}
            onMouseLeave={() => {
              onMouseLeaveResetFocusedIndex && setFocusedIndex(undefined);
            }}
            {...(overflowY && enableDragToScroll && events)}
          >
            {generateRows()}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <ul
      ref={scrollContainerRef}
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
      {...(overflowY && enableDragToScroll && events)}
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
