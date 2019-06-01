import * as System from 'styled-system'

export interface BasicsProps
  extends System.ColorProps,
    System.OpacityProps,
    System.OverflowProps,
    System.SpaceProps {}

export const basics = System.compose(
  System.color,
  System.opacity,
  System.overflow,
  System.space
)
