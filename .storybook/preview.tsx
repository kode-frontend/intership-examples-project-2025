import React from 'react'
import type { Preview } from '@storybook/react'
import { View } from 'react-native'

import { darkTheme } from '../src/shared/ui/theme/dark'

export const decorators = [
  Story => (
    <View
      style={{
        flex: 1,
        // @ts-ignore
        backgroundColor: darkTheme.palette.background.primary,
      }}>
      <Story />
    </View>
  ),
]

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
