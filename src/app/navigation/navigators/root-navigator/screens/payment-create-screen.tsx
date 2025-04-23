import { PaymentCreateConnector } from '@screens/payment-create'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamsList } from '@app/navigation/navigators/root-navigator/types'

type Props = StackScreenProps<RootStackParamsList, 'paymentCreate'>

export const PaymentCreateScreen = ({}: Props) => {
  return <PaymentCreateConnector />
}
