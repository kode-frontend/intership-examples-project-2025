import { useOtp } from '@entities/otp/hooks'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamsList } from '@routing/app-navigation/types'
import { darkTheme } from '@shared/ui/theme'
import { useState } from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Linking,
  Switch,
  Alert,
} from 'react-native'

export type TPaymentCreateProps = StackScreenProps<
  RootStackParamsList,
  'paymentCreate'
>

export const PaymentCreate = ({ navigation }: TPaymentCreateProps) => {
  const [switchValue, setSwitchValue] = useState(false)
  const { mutate, isPending } = useOtp()

  const onBack = () => {
    navigation.goBack()
  }

  const goToSettings = () => {
    Linking.openSettings()
  }

  const openLink = () => {
    const link = 'https://reactnative.dev/'

    const handleFallback = () => {
      Alert.alert('Не удалось перейти по ссылке')
    }

    Linking.openURL(link).catch(handleFallback)
  }

  const onSubmit = () => {
    mutate(
      {
        postApiCoreOtpRequest: {
          operation: 'PAYMENT',
        },
      },
      {
        onSuccess: data => {
          if (data?.data) {
            navigation.navigate('PaymentOtp', {
              otpId: data?.data.otpId,
              otpLength: data?.data.otpLen,
              resendIn: data?.data.resendIn,
            })
          }
        },
        onError: (e: any) => {
          if (e.code !== 'GLOBAL_ERROR') {
            console.log('e.code', e.code)
            // showErrorToast({ message: 'Не удалось отправить СМС' })
          }
        },
      },
    )

    // showToast({ message: 'Оплата прошла успешно' });
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
      <TouchableOpacity onPress={onSubmit} style={styles.textButton}>
        <Text>Переход к ОТП</Text>
      </TouchableOpacity>

      <Switch value={switchValue} onValueChange={onValueChange} />
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
