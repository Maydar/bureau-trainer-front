import * as React from 'react';

//import { ErrorPages } from 'components/common/Plug';

import './Layout.modules.scss';

type Props = {
  children: React.ReactNode;
  className?: string;
  error?: number;
};

const Layout: React.FC<Props> = ({ className, children, error }: Props) => {
  // if (error) {
  //   return (
  //     <div styleName="content">
  //       <ErrorPages type={error} />
  //     </div>
  //   );
  // }
  return (
    <div styleName="content" className={className}>
      {children}
    </div>
  );
};

export default Layout;
