const constants = {
  initScale: 10,
  width: 1000,
  height: 600, // 1.33
  maxAspect: 1.667,
  minAspect: 1.333
};

const fit = () => {
  let
    initAspect = constants.height / constants.width,
    currentHeight = window.innerHeight,
    currentWidth = window.innerWidth
  ;

  let currentAspect = currentWidth / currentHeight;
  let newAspect = currentAspect;
  if (newAspect > constants.maxAspect) {
    newAspect = constants.maxAspect;
  }
  if (newAspect < constants.minAspect) {
    newAspect = constants.minAspect;
  }

  let newWidth = newAspect * currentHeight;
  let newHeight = currentWidth / newAspect;

  let scaleX = newWidth / constants.width;
  let scaleY = newHeight / constants.height;

  let currentScale;
  if (currentAspect > constants.maxAspect) {
    currentScale = scaleX;
  } else if (currentAspect < constants.minAspect) {
    currentScale = scaleY;
  } else {
    currentScale = Math.max(scaleX, scaleY); // actually scaleX = scaleY
  }

  document.documentElement.style.fontSize = currentScale * constants.initScale + 'px';
};

export const markup = {
  init: () => {
    fit();
    window.addEventListener('resize', fit);
  },
};
