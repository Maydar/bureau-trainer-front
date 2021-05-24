import * as React from 'react';

import { WindowWidth } from 'config/settings';
import getWindowWidth from 'utils/getWindowWidth';

const useSize = (): {
  size: WindowWidth;
  isMobile: boolean;
  isPhone: boolean;
  isTable: boolean;
} => {
  const [size, setSize] = React.useState<WindowWidth>(getWindowWidth());

  React.useEffect(() => {
    const resizeListener = (): void => {
      setSize(getWindowWidth());
    };

    window.addEventListener('resize', resizeListener);

    return (): void => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  const isMobile = React.useMemo(() => {
    return size === WindowWidth.phone || size === WindowWidth.tablet;
  }, [size]);

  const isPhone = React.useMemo(() => {
    return size === WindowWidth.phone;
  }, [size]);

  const isTable = React.useMemo(() => {
    return size === WindowWidth.tablet;
  }, [size]);

  return { size, isMobile, isPhone, isTable };
};

export default useSize;
