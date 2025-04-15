import { HomeTabsParamsList } from "../home-tabs-navigator";

export type RootStackScreenParams = {
    paymentServices: undefined
    paymentCreate: { serviceId: string; title: string }
}

export type RootStackParamsList = {
    HomeTabs: HomeTabsParamsList
} & RootStackScreenParams;
