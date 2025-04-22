import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import {homeTabsOptions} from './config'
import {HomeTabsParamsList} from './types'

import {IconBank, IconCamera1, IconMainProduct, IconPayment} from '@shared/ui/icons'
import {HomeScreen} from './screens/home-screen'
import {BankScreen} from './screens/bank-screen'
import {PaymentScreen} from './screens/payment-screen'
import {ProfileScreen} from './screens/profile-screen'

const HomeTabs = createBottomTabNavigator<HomeTabsParamsList>()

export const HomeTabsNavigator = () => {
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
                component={HomeScreen}
            />
            <HomeTabs.Screen
                options={{
                    title: 'Платежи',
                    tabBarIcon: IconPayment,
                }}
                name='PaymentMain'
                component={PaymentScreen}
            />
            <HomeTabs.Screen
                options={{
                    title: 'Банкоматы',
                    tabBarIcon: IconBank,
                }}
                name='BankMain'
                component={BankScreen}
            />
            <HomeTabs.Screen
                options={{
                    title: 'Профиль',
                    tabBarIcon: IconCamera1,
                }}
                name='ProfileMain'
                component={ProfileScreen}
            />
        </HomeTabs.Navigator>
    )
}
