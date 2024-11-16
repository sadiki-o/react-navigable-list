/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useRef,
  useState,
  useEffect,
  MouseEvent,
  RefObject,
  EventHandler
} from 'react';

interface MouseCoords {
  startY: number;
  scrollTop: number;
  lastY: number;
  lastTime: number;
  velocity: number;
}

interface UseDragToScrollProps {
  onMouseDown: (e: MouseEvent) => void;
}

export const useDragToScroll = (
  ourRef: RefObject<HTMLElement>
): UseDragToScrollProps => {
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
  const mouseCoords = useRef<MouseCoords>({
    startY: 0,
    scrollTop: 0,
    lastY: 0,
    lastTime: 0,
    velocity: 0
  });

  const handleDragStart = (e: MouseEvent): void => {
    if (!ourRef.current) return;
    const container = ourRef.current;
    const startY = e.pageY - container.offsetTop;
    const scrollTop = container.scrollTop;
    const lastY = startY;
    const lastTime = Date.now();

    mouseCoords.current = { startY, scrollTop, lastY, lastTime, velocity: 0 };
    setIsMouseDown(true);
    document.body.style.cursor = 'grabbing';
  };

  const handleDragEnd = (): void => {
    setIsMouseDown(false);
    document.body.style.cursor = 'default';

    const { velocity } = mouseCoords.current;
    const container = ourRef.current;

    if (velocity !== 0 && container) {
      const scrollAmount = velocity * 200; // Adjust the multiplier for desired scroll intensity
      const duration = 500; // Adjust the duration for desired scroll effect

      const startTime = Date.now();
      const startScrollTop = container.scrollTop;

      const animateScroll = (): void => {
        const now = Date.now();
        const elapsedTime = now - startTime;
        const progress = Math.min(elapsedTime / duration, 1);

        container.scrollTop =
          startScrollTop - scrollAmount * easeOutCubic(progress);

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    }
  };

  const handleDrag = (e: MouseEvent): void => {
    if (!isMouseDown || !ourRef.current) return;
    e.preventDefault();

    const container = ourRef.current;
    const y = e.pageY - container.offsetTop;
    const walkY = (y - mouseCoords.current.startY) * 1.5;
    container.scrollTop = mouseCoords.current.scrollTop - walkY;

    const now = Date.now();
    const elapsedTime = now - mouseCoords.current.lastTime;

    if (elapsedTime > 0) {
      const deltaY = y - mouseCoords.current.lastY;
      const velocity = deltaY / elapsedTime;

      mouseCoords.current.velocity = velocity;
      mouseCoords.current.lastY = y;
      mouseCoords.current.lastTime = now;
    }
  };

  const easeOutCubic = (t: number): number => {
    return 1 - Math.pow(1 - t, 3);
  };

  useEffect(() => {
    const addListeners = () => {
      document.addEventListener('mousemove', handleDrag as EventHandler<any>);
      document.addEventListener('mouseup', handleDragEnd);
    };

    const removeListeners = () => {
      document.removeEventListener(
        'mousemove',
        handleDrag as EventHandler<any>
      );
      document.removeEventListener('mouseup', handleDragEnd);
    };

    if (isMouseDown) {
      addListeners();
    } else {
      removeListeners();
    }

    return removeListeners; // Cleanup
  }, [isMouseDown]);

  return {
    onMouseDown: handleDragStart
  };
};
