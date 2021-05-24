export enum WindowWidth {
  md = 'md',
  lg = 'lg',
  tablet = 'tablet',
  phone = 'phone',
}

export const windowPixelWidth = {
  [WindowWidth.tablet]: 768,
  [WindowWidth.md]: 1024,
  [WindowWidth.lg]: 1920,
};
