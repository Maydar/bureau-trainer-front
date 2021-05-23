import { useContext } from 'react';
import { MobXProviderContext } from 'mobx-react';

import rootStore, { RootStore } from './RootStore';

type StoreType = {
  rootStore: RootStore;
};


export default {
  rootStore,
};

export const useStores = (): StoreType => {
  return useContext(MobXProviderContext);
};

export const useRootStore = (): RootStore => {
  const store = useStores();

  return store.rootStore;
};
