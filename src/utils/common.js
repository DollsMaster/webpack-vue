export function getElementAbsolutePosition(element) {
  console.log('fffffffffffffffff', element)
  const rect = element.getBoundingClientRect();
  const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const elementHeight = element.offsetHeight
  const width = element.offsetWidth;
  return {
    x: rect.x + scrollLeft,
    y: rect.y + scrollTop + elementHeight,
    w: width,
    h: elementHeight
  };
}

