import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamsList } from '@routing/app-navigation/types'
import { Text, TouchableOpacity } from 'react-native'

export const PaymentMain = () => {
  const stackNavigation =
    useNavigation<StackNavigationProp<RootStackParamsList>>()

  const paymentHandler = () =>
    stackNavigation.navigate('paymentCreate', {
      serviceId: '1',
      title: 'MTS',
    })
  return (
    <>
      <TouchableOpacity onPress={paymentHandler}>
        <Text>Оплатить</Text>
      </TouchableOpacity>
    </>
  )
}
