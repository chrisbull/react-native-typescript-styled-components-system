import * as React from 'react'
import { SafeAreaView } from 'react-native'
import { SafeAreaViewProps } from 'react-native-safe-area-view'

import styled from 'styled-components/native'

const SafeContent: React.FC<SafeAreaViewProps> = props => (
  <SafeAreaView
    forceInset={{ top: 'always', horizontal: 'never' }}
    {...props}
  />
)

export const Grid = styled(SafeAreaView)({
  flex: 1,
  width: '80%',
  margin: '0 auto',
})
