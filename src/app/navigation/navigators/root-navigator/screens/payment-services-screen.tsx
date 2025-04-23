import { PaymentServicesConnector } from '@screens/payment-services'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamsList } from '@app/navigation/navigators/root-navigator/types'

export type Props = StackScreenProps<RootStackParamsList, 'paymentServices'>

export const PaymentServicesScreen = ({ navigation }: Props) => {
  const goToPaymentCreate = (serviceId: string, title: string) => {
    navigation.navigate('paymentCreate', { serviceId, title })
  }

  return <PaymentServicesConnector onGoToPaymentCreate={goToPaymentCreate} />
}
