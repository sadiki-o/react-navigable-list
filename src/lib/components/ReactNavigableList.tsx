import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  LegacyRef,
  FunctionComponent,
  KeyboardEvent
} from 'react';
import clsx from 'clsx';
import { INavigableListProps } from '../utils/types';
import { useDragToScroll } from '@/hooks/useDragToScroll';
import { debounce } from '@/utils/helpers';
import { isKeyType, KeysEnum, KeysList } from '@/utils/keys';
import ListItem from './ListItem';

const ReactNavigableList: FunctionComponent<INavigableListProps> = ({
  className,
  items = [], // rename parameter
  selected: initialSelected = [],
  disabled = [],
  maxSelection,
  focusedIndex: initialFocusedIndex = 0,
  shouldFocusComponent,
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
  onScroll,
  onKeyboardNavigation
}) => {
  // value guard to make initial focused index don't exceed items length
  if (initialFocusedIndex >= items.length) {
    initialFocusedIndex = 0;
  }
  // focused item index
  const [focusedIndex, setFocusedIndex] = useState<number | undefined>(
    initialFocusedIndex ?? 0
  );
  // list of selected indexes
  const [selected, setSelected] = useState<number[]>(initialSelected);
  // Add a state variable to track keyboard navigation state
  const [isKeyboardNavigation, setIsKeyboardNavigation] = useState(false);

  const scrollContainerRef = useRef<HTMLDivElement | HTMLUListElement>(null);

  const events = useDragToScroll(scrollContainerRef);

  // if user decide to load component at a specific item focused/hovered
  useEffect(() => {
    if (overflowY) updateScrollPosition(initialFocusedIndex);
  }, [overflowY, initialFocusedIndex]);

  useEffect(() => {
    if (shouldFocusComponent) {
      scrollContainerRef?.current?.focus();
      setFocusedIndex(0);
    } else setFocusedIndex(undefined);
  }, [shouldFocusComponent]);

  // this code is responsible for syncing scroll with the currst focused item
  const updateScrollPosition = (focusedIndex: number) => {
    const li = scrollContainerRef?.current?.querySelector(
      `[data-list-index="${focusedIndex}"]`
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
    if (index !== undefined) {
      setFocusedIndex(index);
    }

    if (multiple) {
      // prevent selecting more than the maximum
      if (maxSelection !== undefined && selected.length === maxSelection) {
        return;
      }
      if (selected.includes(index ?? focusedIndex!)) {
        const newVal = selected.filter(el => el !== (index ?? focusedIndex));

        setSelected(newVal);
        onChange(newVal);
      } else {
        setSelected([...selected, index ?? focusedIndex!]);
        onChange([...selected, index ?? focusedIndex!]);
      }
    } else {
      setSelected([index ?? focusedIndex!]);
      onChange([index ?? focusedIndex!]);
    }
  };

  const onKeyDown = (event: KeyboardEvent<HTMLUListElement>) => {
    // disable keyboard events when keyboardEvents is false
    if (!keyboardEvents) return;

    setIsKeyboardNavigation(true);

    const key = event.key;

    if (isKeyType(key)) {
      if (
        [KeysEnum.UP, KeysEnum.DOWN].includes(
          key as typeof KeysEnum.UP | typeof KeysEnum.DOWN
        )
      ) {
        // when there is only one item in the list trigger the onScroll because onscroll on parent doesn't trigger it
        if (items.length === 1 && onScroll) {
          onScroll(
            event,
            key === KeysEnum.DOWN ? true : false,
            key === KeysEnum.UP ? true : false
          );
        }

        // triggered when navigating with arrow UP and DOWn
        if (onKeyboardNavigation) {
          const res = onKeyboardNavigation(
            focusedIndex!,
            key as typeof KeysEnum.UP | typeof KeysEnum.DOWN
          );
          // prevent navigation default behavior if the function returns true
          if (res) return;
        }
      }

      if (key === KeysEnum.UP || key === KeysEnum.K) {
        focusPrevious();
      } else if (key === KeysEnum.DOWN || key === KeysEnum.J) {
        focusNext();
      } else if (key === KeysEnum.SPACE || key === KeysEnum.ENTER) {
        handleSelection();
      }

      // prevent default behavior where in some situations pressing the
      // key up / down would scroll the browser window
      if (KeysList?.includes(key)) {
        event.preventDefault();
      }
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
    const ulRef = useRef<HTMLUListElement>(null);

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

    useEffect(() => {
      if (shouldFocusComponent) ulRef?.current?.focus();
    }, [shouldFocusComponent]);

    const generateRows = () => {
      const displayedRows: JSX.Element[] = [];
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
        className="w-full overflow-y-scroll"
        style={{ height: `${windowHeight}px` }}
        onScroll={e => {
          setScrollTop(e.currentTarget.scrollTop);
          if (onScroll)
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
          ref={scrollContainerRef as React.RefObject<HTMLDivElement>}
        >
          <ul
            ref={ulRef}
            style={{
              height: `${renderedNodesCount * itemHeight}px`,
              transform: `translateY(${startIndex * itemHeight}px)`
            }}
            className="focus:outline-none"
            tabIndex={0}
            onKeyDown={onKeyDown}
            onMouseMoveCapture={() => setIsKeyboardNavigation(false)}
            onMouseLeave={() => {
              if (onMouseLeaveResetFocusedIndex) setFocusedIndex(undefined);
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
      ref={scrollContainerRef as unknown as LegacyRef<HTMLUListElement>}
      className={clsx(
        'react-navigable-list m-0 list-none border-none p-0 outline-none',
        overflowY && 'overflow-y-auto',
        className
      )}
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseMoveCapture={() => setIsKeyboardNavigation(false)}
      onMouseLeave={() => {
        if (onMouseLeaveResetFocusedIndex) setFocusedIndex(undefined);
      }}
      onScroll={e => {
        if (onScroll)
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
      {Array.isArray(items) &&
        items.map((itemContent, index) => (
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
          >
            {itemContent.label}
          </ListItem>
        ))}
    </ul>
  );
};

export default ReactNavigableList;
