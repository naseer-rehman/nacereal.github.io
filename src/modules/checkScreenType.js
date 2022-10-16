function getScreenWidth() {
  return window.innerWidth;
}

export function isMobile() {
  const MOBILE_CUTOFF = 700;
  return getScreenWidth() <= MOBILE_CUTOFF; 
}

export function isDesktop() {
  return !isMobile();
}

const exports = {
  isMobile,
  isDesktop,
}

export default exports;