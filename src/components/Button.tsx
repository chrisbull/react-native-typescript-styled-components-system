import * as React from 'react'
import * as RN from 'react-native'
import styled from 'styled-components/native'
import * as System from 'styled-system'

import { BoxProps, composeBox } from '../system'

interface ButtonProps extends BoxProps, RN.TouchableHighlight {}

export const Button = styled.TouchableHighlight<ButtonProps>(composeBox)

Button.defaultProps = {
  borderRadius: 1,
  overflow: 'hidden',
  py: 2,
  px: 3,
  bg: 'accent1',
}
