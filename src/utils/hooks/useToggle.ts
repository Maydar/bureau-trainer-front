import { useCallback, useState } from 'react';

export type UseToggleHook = [boolean, () => void];

export default function useToggle(): UseToggleHook {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = useCallback(() => {
    setIsFocused((s) => !s);
  }, []);

  return [isFocused, handleFocus];
}
