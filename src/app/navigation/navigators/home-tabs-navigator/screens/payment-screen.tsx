import {StackScreenProps} from "@react-navigation/stack";
import {HomeTabsParamsList} from "../types";
import {PaymentCategoriesConnector} from "@screens/payment-categories/payment-categories-connector";


type Props = StackScreenProps<
    HomeTabsParamsList,
    'PaymentMain'
>;

export const PaymentScreen = ({ navigation }: Props) => {
  const goToPaymentServices = (id: string, title: string) => {
    navigation.navigate("paymentServices", {})
  }

  return <PaymentCategoriesConnector onCategorySelect={goToPaymentServices} />
}
