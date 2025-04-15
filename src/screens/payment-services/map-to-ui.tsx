import {PaymentService, PaymentServiceType} from "@entities/payment-service/types";
import {ReactNode} from "react";
import {IconFee} from "@shared/ui/icons";
import {UIData} from "@screens/payment-services/types";

type IconMap = {
    [k in PaymentServiceType]: ReactNode;
}

const iconMap: IconMap = {
    C: <IconFee/>,
    A: <IconFee/>,
    B: <IconFee/>,
}

export const mapToUi = (item: PaymentService): UIData => {
    return {
        title: item.title,
        icon: iconMap[item.type] || <IconFee/>,
    }
}
