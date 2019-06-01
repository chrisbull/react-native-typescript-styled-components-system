import styled from 'styled-components/native'
import * as System from 'styled-system'
import * as Styles from '../styles'

export interface BoxProps
  extends Styles.BasicsProps,
    Styles.BordersProps,
    Styles.DimensionsProps,
    Styles.FlexboxesProps,
    Styles.PositionsProps,
    Styles.AlignProps {}

export const composeBox = System.compose(
  Styles.basics,
  Styles.borders,
  Styles.dimensions,
  Styles.flexboxes,
  Styles.positions,
  Styles.alignProps
)

export const Box = styled.View<BoxProps>(composeBox)
