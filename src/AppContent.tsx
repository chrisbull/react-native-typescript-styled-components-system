import * as React from 'react'
import styled from 'styled-components/native'
import { css } from '@styled-system/css'

import { Spinner } from './components/Spinner'
import { Button } from './components/Button'
import { Avatar } from './components/Avatar'

import { useContext } from './hooks/universal-react-hooks'

import { Text, Box, Grid } from './system'
import { ThemeContext } from './context/ThemeContext'

const ToggleButton = () => {
  const { toggle, themeMode } = useContext(ThemeContext)

  return (
    <Button onPress={toggle}>
      <Text color="shade9" p={2}>
        {themeMode === 'dark' ? 'Light' : 'Dark'}
      </Text>
    </Button>
  )
}

const TEST_LOADER = false

export const AppContent = () => {
  const [loaded, setLoaded] = React.useState(false)

  React.useEffect(() => {
    setTimeout(
      () => {
        setLoaded(true)
      },
      TEST_LOADER ? 2000 : 0
    )
  })

  if (!loaded) return <LoadingScreen />

  return (
    <Screen>
      <Grid>
        <Box position="absolute" right="0" top="0">
          <ToggleButton />
        </Box>
        <Avatar
          size={80}
          overflow="hidden"
          source={{
            uri: 'https://avatars3.githubusercontent.com/u/753112?v=4',
          }}
        />
      </Grid>
    </Screen>
  )
}

const Screen = styled.View(
  css({
    flex: 1,
    bg: 'shade4',
    justifyContent: 'center',
    alignItems: 'center',
  })
)

const LoadingScreen = () => (
  <Screen>
    <Spinner color="accent2" />
  </Screen>
)
