export const getComponentPosition = (ref?: DOMRect) => {
  if(ref && ref.top > 400) return 'top'
  return 'bottom'
}
