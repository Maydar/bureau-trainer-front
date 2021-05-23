import { useRef } from 'react';

export const useLocal = <T>(initialValueCreator: () => T): T => {
  const ref = useRef<T>(null);
  if (!ref.current) {
    ref.current = initialValueCreator();
  }

  return ref.current;
};
