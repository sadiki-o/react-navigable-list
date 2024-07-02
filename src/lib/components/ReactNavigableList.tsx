/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import '@/lib/tailwind/theme.css';
import { useState, useEffect, useRef, FunctionComponent, useMemo } from 'react';
import clsx from 'clsx';

import { KEYS, KEY } from '@/utils/keys';
import { INavigableListProps } from '../utils/types';
import { useDragToScroll } from '../hooks/useDragToScroll';
import ListItem from '../components/ListItem';
import { debounce } from '../utils/helpers';

const ReactNavigableList: FunctionComponent<INavigableListProps> = ({
  className,
  items = [], // rename parameter
  selected: initialSelected = [],
  disabled = [],
  maxSelection,
  focusedIndex: initialFocusedIndex = 0,
  multiple = false,
  checkboxOnMultiple = false,
  keyboardEvents = true,
  enableDragToScroll = true,
  listItemStyles,
  overflowY = true,
  enableVirtualization = false,
  onMouseLeaveResetFocusedIndex = false,
  itemHeight = 20,
  overscan = 10,
  windowHeight = 300,
  onChange,
  onScroll
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
    // If all items are disabled, do nothing
    if (items.length === disabled.length) return;

    let newIndex = focusedIndex!;

    // Keep going to the previous item until a non-disabled item is found
    do {
      newIndex = (newIndex - 1 + items.length) % items.length;
    } while (disabled.includes(newIndex) && newIndex !== focusedIndex);

    // If a new valid index is found, update the focus
    if (newIndex !== focusedIndex) {
      updateScrollPosition(newIndex);
      debounce(setFocusedIndex, 20)(newIndex);
    }
  };

  const focusNext = () => {
    // If all items are disabled, do nothing
    if (items.length === disabled.length) return;

    let newIndex = focusedIndex!;

    // Keep going to the next item until a non-disabled item is found
    do {
      newIndex = (newIndex + 1) % items.length;
    } while (disabled.includes(newIndex) && newIndex !== focusedIndex);

    // If a new valid index is found, update the focus
    if (newIndex !== focusedIndex) {
      updateScrollPosition(newIndex);
      debounce(setFocusedIndex, 20)(newIndex);
    }
  };

  // handle select, de-select
  const handleSelection = (index?: number) => {
    if (index) {
      setFocusedIndex(index);
    }

    // de-select
    if (selected.includes(index ?? focusedIndex!)) {
      setSelected(selected.filter(el => el !== (index ?? focusedIndex)));
      return;
    }

    if (multiple) {
      // prevent selecting more than the maximum
      if (maxSelection !== undefined && selected.length === maxSelection) {
        return;
      }
      // select
      setSelected([...selected, index ?? focusedIndex!]);
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
      handleSelection();
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

    const [firstNonDisabledIndex, lastNonDisabledIndex] = useMemo(() => {
      const s = new Set(disabled); // Using a Set for O(1) membership checks

      let l = 0;
      let r = items.length - 1;

      while (l <= r) {
        while (l <= r && s.has(l)) {
          l++;
        }
        while (l <= r && s.has(r)) {
          r--;
        }
        if (l <= r) {
          break;
        }
      }

      return [l, r];
    }, [disabled, items]);

    const outerRef = useRef<HTMLDivElement>(null);

    const events = useDragToScroll(outerRef);

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

    // for virtualization enabled, when you move from first to last item using keyboard arrow or the opposite this effect does the calculation (move to bottom or top of the list)
    useEffect(() => {
      if (isKeyboardNavigation) {
        // check if user has scrolled using mouse or scrollbar
        if (focusedIndex === firstNonDisabledIndex && outerRef.current) {
          outerRef.current.scrollTop = 0;
        } else if (focusedIndex === lastNonDisabledIndex && outerRef.current) {
          outerRef.current.scrollTop = outerRef.current.scrollHeight;
        }
        updateScrollPosition(focusedIndex!);
      }
    }, [focusedIndex, startIndex]);

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
            onClick={handleSelection}
            setFocusedIndex={setFocusedIndex}
            itemHeight={itemHeight}
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
          onScroll &&
            onScroll(
              e,
              e.currentTarget.scrollTop === 0,
              Boolean(
                e.currentTarget.scrollTop + e.currentTarget.clientHeight >=
                  e.currentTarget.scrollHeight - 1
              )
            );
        }}
        onMouseDown={() => setIsKeyboardNavigation(false)}
        {...(overflowY && enableDragToScroll && events)}
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
      onScroll={e => {
        onScroll &&
          debounce(onScroll, 1000)(
            e,
            e.currentTarget.scrollTop === 0,
            Boolean(
              e.currentTarget.scrollTop + e.currentTarget.clientHeight >=
                e.currentTarget.scrollHeight - 1
            )
          );
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
          onClick={handleSelection}
          setFocusedIndex={setFocusedIndex}
          itemHeight={itemHeight}
        >
          {itemContent.label}
        </ListItem>
      ))}
    </ul>
  );
};

export default ReactNavigableList;
