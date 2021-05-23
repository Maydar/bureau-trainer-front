import { useCallback, useState } from 'react';

export const useOpen = (
  initial = false
): {
  show: boolean;
  toggle: () => void;
  close: () => void;
  open: () => void;
} => {
  const [show, setShow] = useState(initial);
  const toggle = useCallback(() => {
    setShow((s) => !s);
  }, []);

  const open = useCallback(() => {
    setShow(true);
  }, []);

  const close = useCallback(() => {
    setShow(false);
  }, []);

  return { show, toggle, open, close };
};
