import { SITE_LINK } from 'config/constants';

export const ymReachGoal = (target: string) => {
  // @ts-ignore
  if (ym) {
    // @ts-ignore
    ym(80424139, 'reachGoal', target);
  }
};

export const shareFB = () => {
  // @ts-ignore
  if (FB) {
    //@ts-ignore
    FB.ui(
      {
        display: 'popup',
        method: 'share_open_graph',
        action_type: 'og.likes',
        action_properties: JSON.stringify({
          object: SITE_LINK,
        }),
      },
      function (response: any) {}
    );
  }
};
