// import {
//   borders as bordersSystem,
//   BordersProps as BordersSystemProps,
//   boxShadow,
//   BoxShadowProps,
//   compose,
// } from 'styled-system'

// export interface BordersProps extends BordersSystemProps, BoxShadowProps {}

// export const borders = compose(
//   bordersSystem,
//   boxShadow,
// )

import * as System from 'styled-system'

export interface BordersProps
  extends System.BordersProps,
    System.BoxShadowProps {
  borderRadius?: number
}
// System.BorderRadiusProps,

export const borders = System.compose(
  // System.borderRadius,
  System.borders,
  System.boxShadow
)
