import {PaymentCreate} from "./payment-create";

type Props = {
    onGoBack: () => void;
}

export const PaymentCreateConnector = ({onGoBack}: Props) => {
    let handleGoBack = () => {
        onGoBack();
    }
    return <PaymentCreate onGoBack={handleGoBack}/>
}
