import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { homeTabsOptions } from './config'
import { HomeTabsParamsList } from './types'

import { HomeMain } from '@screens/home'
import { BankMain } from '@screens/bank'
import { PaymentMain } from '@screens/payment'
import { ProfileMain } from '@screens/profile'
import {
  IconBank,
  IconCamera1,
  IconMainProduct,
  IconPayment,
} from '@shared/ui/icons'

const HomeTabs = createBottomTabNavigator<HomeTabsParamsList>()

export const HomeTabsNavigation = () => {
  return (
    <HomeTabs.Navigator
      initialRouteName='HomeMain'
      screenOptions={homeTabsOptions()}>
      <HomeTabs.Screen
        options={{
          title: 'Главная',
          tabBarIcon: IconMainProduct,
        }}
        name='HomeMain'
        component={HomeMain}
      />
      <HomeTabs.Screen
        options={{
          title: 'Платежи',
          tabBarIcon: IconPayment,
        }}
        name='PaymentMain'
        component={PaymentMain}
      />
      <HomeTabs.Screen
        options={{
          title: 'Банкоматы',
          tabBarIcon: IconBank,
        }}
        name='BankMain'
        component={BankMain}
      />
      <HomeTabs.Screen
        options={{
          title: 'Профиль',
          tabBarIcon: IconCamera1,
        }}
        name='ProfileMain'
        component={ProfileMain}
      />
    </HomeTabs.Navigator>
  )
}
