export const getComponentPosition = (ref?: DOMRect) => {
  if(ref && ref.top > 800) return 'top'
  return 'bottom'
}
