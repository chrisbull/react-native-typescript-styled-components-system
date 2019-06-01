import { ImageProps as RNImageProps } from 'react-native'
import styled from 'styled-components/native'
import { BoxProps, composeBox } from './Box'

export interface ImageProps extends BoxProps, RNImageProps {}

export const Image = styled.Image<ImageProps>(composeBox)
