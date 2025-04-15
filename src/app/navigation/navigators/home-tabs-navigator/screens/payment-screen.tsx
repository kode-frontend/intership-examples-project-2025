import {StackScreenProps} from "@react-navigation/stack";
import {HomeTabsParamsList} from "../types";
import {PaymentCategoriesConnector} from "@screens/payment-categories/payment-categories-connector";
import {CompositeScreenProps} from "@react-navigation/native";
import {RootStackParamsList} from "@app/navigation/navigators/root-navigator";


type Props = CompositeScreenProps<StackScreenProps<
    HomeTabsParamsList,
    'PaymentMain'
>, StackScreenProps<
    RootStackParamsList,
    'paymentServices'
>>;

export const PaymentScreen = ({navigation}: Props) => {
    const goToPaymentServices = (id: string, title: string) => {
        navigation.navigate("paymentServices")
    }

    return <PaymentCategoriesConnector onCategorySelect={goToPaymentServices}/>
}
