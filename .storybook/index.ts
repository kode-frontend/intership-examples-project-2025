import AsyncStorage from '@react-native-async-storage/async-storage'
import { view } from './storybook.requires'

export const Storybook = view.getStorybookUI({
  storage: {
    getItem: AsyncStorage.getItem,
    setItem: AsyncStorage.setItem,
  },
})
