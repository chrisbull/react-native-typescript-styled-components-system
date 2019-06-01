import * as React from 'react'
import { SafeAreaViewProps as RNSafeAreaViewProps } from 'react-native-safe-area-view'
import styled from 'styled-components/native'
import { BoxProps, composeBox } from './Box'

export interface SafeAreaViewProps extends BoxProps, RNSafeAreaViewProps {}

export const SafeAreaView: React.FC<SafeAreaViewProps> = styled.SafeAreaView(
  composeBox
)

SafeAreaView.defaultProps = {
  forceInset: { top: 'always', horizontal: 'never' },
}
