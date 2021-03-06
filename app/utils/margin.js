/**
  pulled in from https://github.com/jxnblk/understyle/blob/master/src/margin.js
*/
import getNumberProp from './get-number-prop'
import initialScale from './initial-scale'

const {
  assign
} = Object;

export const setScale = (scale = initialScale) => ({
  m,
  mx,
  my,
  mt,
  mr,
  mb,
  ml,
  gutter
} = {}) => {
  const getScaledProp = getNumberProp(scale)

  const style = assign({},
    getScaledProp('margin')(m),
    getScaledProp('marginTop')(mt),
    getScaledProp('marginBottom')(mb),
    getScaledProp('marginTop')(my),
    getScaledProp('marginBottom')(my),
    getScaledProp('marginLeft')(ml),
    getScaledProp('marginRight')(mr),
    getScaledProp('marginLeft')(mx),
    getScaledProp('marginRight')(mx),

    getScaledProp('marginLeft')(gutter, -1),
    getScaledProp('marginRight')(gutter, -1)
  )

  return style
}

const margin = setScale()

export default margin
