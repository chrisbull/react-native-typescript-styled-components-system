import * as System from 'styled-system'

export interface AlignProps {
  space?: 'between' | 'around' | 'evenly'
  row?: boolean
  col?: boolean
  center?: boolean
  flexStart?: boolean
  flexEnd?: boolean
  flexTop?: boolean
  flexBottom?: boolean
  middle?: boolean
}

export const alignProps = System.compose(
  props => props.row && { flexDirection: 'row' },
  props => props.col && { flexDirection: 'column' },
  props => props.center && { alignItems: 'center' },
  props => props.flexStart && { alignItems: 'flex-start' },
  props => props.flexEnd && { alignItems: 'flex-end' },
  props => props.flexTop && { justifyContent: 'flex-start' },
  props => props.flexBottom && { justifyContent: 'flex-end' },
  props => props.middle && { justifyContent: 'center' },
  props => props.space && { justifyContent: `space-${props.space}` }
)
