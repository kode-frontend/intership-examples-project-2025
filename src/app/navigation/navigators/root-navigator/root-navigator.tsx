import {createStackNavigator} from "@react-navigation/stack";
import {RootStackParamsList} from "./types";
import {PaymentCreateScreen, PaymentServicesScreen} from "./screens";
import {HomeTabNavigatorConnector} from "../home-tabs-navigator";
import {rootStackOptions} from "./config";

const RootStack = createStackNavigator<RootStackParamsList>()

export const RootNavigator = () => {
    return (
        <RootStack.Navigator
            initialRouteName='HomeTabs'
            screenOptions={rootStackOptions}>
            <RootStack.Screen
                name='HomeTabs'
                component={HomeTabNavigatorConnector}
                options={{headerShown: false}}
            />
            <RootStack.Screen
                name='paymentServices'
                component={PaymentServicesScreen}
                options={{headerTitle: 'Мобильная связь'}}
            />
            <RootStack.Screen
                name='paymentCreate'
                component={PaymentCreateScreen}
                options={({route}) => ({headerTitle: route.params.title})}
            />
        </RootStack.Navigator>
    )
};
