export const ymReachGoal = (target:string) => {
  // @ts-ignore
  if (ym) {
    // @ts-ignore
    ym(80365951, 'reachGoal', target);
  }
};
