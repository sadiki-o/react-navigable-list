/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable @typescript-eslint/no-explicit-any */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return function (this: any, ...args: Parameters<T>) {
    const context = this;

    if (timeout !== null) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      timeout = null;
      func.apply(context, args);
    }, wait);
  };
}

export function cloneDeep<T>(value: T): T {
  if (value === null || typeof value !== 'object') {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map(cloneDeep) as unknown as T; // Type assertion because map's return type is always inferred as any[]
  }

  const clonedObj: any = {};
  for (const key in value) {
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      clonedObj[key] = cloneDeep((value as Record<string, any>)[key]);
    }
  }

  return clonedObj as T;
}

export function throttle<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let lastCall = 0;
  let timeout: NodeJS.Timeout | null = null;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>): void {
    const now = new Date().getTime();

    if (now - lastCall < wait) {
      if (timeout) {
        clearTimeout(timeout);
      }

      timeout = setTimeout(
        () => {
          lastCall = new Date().getTime();
          func.apply(this, args); // 'this' now has a correct type
        },
        wait - (now - lastCall)
      );
    } else {
      lastCall = now;
      func.apply(this, args);
    }
  };
}
