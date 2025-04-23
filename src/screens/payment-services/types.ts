import { ImageSourcePropType } from "react-native";
import {ReactNode} from "react";

export type TServiceItem = {
    serviceId: string,
    serviceName: string,
    serviceIcon: ImageSourcePropType,
}

export type UIData = {
    title: string;
    icon: ReactNode;
}

export type TPaymentServicesForm = {
    search: string
}

export type TPaymentServicesForm = {
    search: string
}
