import * as RN from 'react-native'
import styled from 'styled-components/native'

import { typography, TypographyProps } from '../styles'
import { composeBox, BoxProps } from './Box'

export interface TextProps extends BoxProps, TypographyProps, RN.TextProps {}

export const Text = styled.Text<TextProps>(composeBox, typography)
