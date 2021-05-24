import { windowPixelWidth, WindowWidth } from 'config/settings';

export default (): WindowWidth => {
  if (window.innerWidth >= windowPixelWidth[WindowWidth.lg]) {
    return WindowWidth.lg;
  }
  if (window.innerWidth >= windowPixelWidth[WindowWidth.md]) {
    return WindowWidth.md;
  }
  return window.innerWidth < windowPixelWidth[WindowWidth.tablet]
    ? WindowWidth.phone
    : WindowWidth.tablet;
};
