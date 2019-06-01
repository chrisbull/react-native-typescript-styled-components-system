import * as System from 'styled-system'

const FuncsList = [
  'space',
  'margin',
  'marginTop',
  'marginBottom',
  'marginLeft',
  'marginRight',
  'padding',
  'paddingTop',
  'paddingBottom',
  'paddingLeft',
  'paddingRight',
  'textColor',
  'backgroundColor',
  'color',
  'fontSize',
  'fontFamily',
  'fontWeight',
  'lineHeight',
  'textAlign',
  'fontStyle',
  'letterSpacing',
  'display',
  'width',
  'maxWidth',
  'minWidth',
  'height',
  'maxHeight',
  'minHeight',
  'size',
  'verticalAlign',
  'alignItems',
  'alignContent',
  'justifyItems',
  'justifyContent',
  'flexWrap',
  'flexBasis',
  'flexDirection',
  'flex',
  'justifySelf',
  'alignSelf',
  'order',
  'gridGap',
  'gridColumnGap',
  'gridRowGap',
  'gridColumn',
  'gridRow',
  'gridAutoFlow',
  'gridAutoColumns',
  'gridAutoRows',
  'gridTemplateColumns',
  'gridTemplateRows',
  'gridTemplateAreas',
  'gridArea',
  'border',
  'borderWidth',
  'borderStyle',
  'borderColor',
  'borderTop',
  'borderRight',
  'borderBottom',
  'borderLeft',
  'borderRadius',
  'borders',
  'boxShadow',
  'opacity',
  'overflow',
  'background',
  'backgroundImage',
  'backgroundSize',
  'backgroundPosition',
  'backgroundRepeat',
  'position',
  'zIndex',
  'top',
  'right',
  'bottom',
  'left',
  'buttonStyle',
  'textStyle',
  'colorStyle',
]

const composeFuncArray = FuncsList.map(func => System[func])
const computeStyle = System.compose(...composeFuncArray)

export default computeStyle
