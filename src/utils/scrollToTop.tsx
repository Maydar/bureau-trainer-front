import * as React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import * as smoothscroll from 'smoothscroll-polyfill';

export const GoToTop = (isDocumentScroll?: boolean): void => {
  if (
    !isDocumentScroll &&
    !document.getElementsByClassName('root-content').length
  ) {
    return;
  }

  smoothscroll.polyfill();

  if (
    document.querySelector(isDocumentScroll ? 'html' : '.root-content').scroll
  ) {
    document
      .querySelector(isDocumentScroll ? 'html' : '.root-content')
      .scroll({ top: 0, behavior: 'smooth' });
  } else {
    document.querySelector(
      isDocumentScroll ? 'html' : '.root-content'
    ).scrollTop = 0;
  }
};

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  const isMainPage = React.useMemo(() => {
    return location.pathname === '/';
  }, [location.pathname]);

  useEffect(() => {
    GoToTop(isMainPage);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
