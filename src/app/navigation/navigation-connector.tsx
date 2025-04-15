import {
    NavigationContainer
} from '@react-navigation/native'
import {RootNavigatorConnector} from '@app/navigation/navigators/root-navigator/root-navigator-connector'

export const NavigationConnector = () => {
    const isAuth = useAuth();
    return (
        <NavigationContainer>
            <RootNavigatorConnector />
        </NavigationContainer>
    )
}
