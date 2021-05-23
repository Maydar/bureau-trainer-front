// @flow
import { useEffect } from 'react';

export default <T>(
  asyncCallback: () => Promise<T>,
  inputs: Array<any> = [],
  unMountCallback?: () => void,
  // eslint-disable-next-line no-console
  onException: (data: T) => void = console.warn
): void => {
  useEffect(() => {
    // @ts-ignore
    asyncCallback().then((_, error) => {
      if (error) {
        onException(error);
      }
    });

    if (unMountCallback) {
      return unMountCallback;
    }
  }, inputs);
};
