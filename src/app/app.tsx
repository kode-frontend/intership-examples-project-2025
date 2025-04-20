import { useState } from 'react'
import { Button, SafeAreaView } from 'react-native'

import { Providers } from './providers'
import { Storybook } from '../../.storybook'
import { NavigationContainer } from '@react-navigation/native'
import { AppNavigation } from '@routing/app-navigation'
import { QueryClientProvider } from '@tanstack/react-query'
import { GlobalErrorHandlingProvider } from './global-errors-handling-provider'
import { queryClient } from '@shared/api/query-client'
import { apiAxiosInstance } from '@shared/api'

export const App = () => {
  const [isStorybookVisible, setIsStorybookVisible] = useState(true)

  if (isStorybookVisible) {
    return (
      <Providers>
        <Storybook />
        <SafeAreaView>
          <Button
            onPress={() => setIsStorybookVisible(false)}
            title='Перейти к приложению'
          />
        </SafeAreaView>
      </Providers>
    )
  }

  return (
    <Providers>
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <GlobalErrorHandlingProvider axiosInstance={apiAxiosInstance}>
            <AppNavigation />
          </GlobalErrorHandlingProvider>
        </QueryClientProvider>
      </NavigationContainer>
    </Providers>
  )
}
