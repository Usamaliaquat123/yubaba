import { calculateHypotenuse } from 'core/helpers/math';

export function calculateElementSize (element) {
  return {
    width: element.clientWidth,
    height: element.clientHeight,
  };
}

export function calculateElementLocation (element) {
  const rect = element.getBoundingClientRect();

  return {
    left: rect.left + document.body.clientLeft,
    top: rect.top + document.body.clientTop,
  };
}

export function calculateElementCircumcircle (element) {
  const size = calculateElementSize(element);
  const diameter = calculateHypotenuse(size);
  const location = calculateElementLocation(element);

  return {
    ...location,
    diameter,
  };
}

export function calculateWindowCentre () {
  return {
    left: Math.ceil(window.innerWidth / 2),
    top: Math.ceil(window.innerHeight / 2),
  };
}

export function calculateElementCenterInViewport (element) {
  const location = calculateElementLocation(element);
  const size = calculateElementSize(element);

  return {
    top: location.top + Math.ceil(size.width / 2),
    left: location.left - Math.ceil(size.height / 2),
  };
}