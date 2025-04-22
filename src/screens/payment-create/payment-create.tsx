import {darkTheme} from '@shared/ui/theme'
import {useState} from 'react'
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    Linking,
    Switch,
    Alert,
} from 'react-native'

type Props = {
    onGoBack: () => void
}

export const PaymentCreate = ({onGoBack}: Props) => {
    const [switchValue, setSwitchValue] = useState(false)

    const onBack = () => {
        onGoBack();
    }

    const goToSettings = () => {
        Linking.openSettings() // TODO: move out!
    }

    const openLink = () => {
        const link = 'https://reactnative.dev/'

        const handleFallback = () => {
            Alert.alert('Не удалось перейти по ссылке')
        }

        Linking.openURL(link).catch(handleFallback)
    }

    const onValueChange = (value: boolean) => {
        if (value) {
            Alert.alert('Внимание', 'Спасибо за внимание', [
                {
                    text: 'OK',
                },
                {
                    text: 'Не OK',
                    style: 'destructive',
                    isPreferred: true,
                },
            ])
        }

        setSwitchValue(value)
    }

    // TODO: посмотрите сами про hitSlop
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onBack} style={styles.button} hitSlop={8}>
                <Text>Назад</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={goToSettings}
                style={styles.button}
                hitSlop={8}>
                <Text>Открыть настройки</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={openLink} style={styles.textButton}>
                <Text>Перейти по ссылке</Text>
            </TouchableOpacity>

            <Switch value={switchValue} onValueChange={onValueChange}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: darkTheme.palette.background.primary,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16,
    },
    button: {
        backgroundColor: 'gray',
        padding: 16,
    },
    textButton: {
        padding: 16,
    },
})
