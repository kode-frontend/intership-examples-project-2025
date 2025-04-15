import { HomeTabsParamsList } from "../home-tabs-navigator";

export type RootStackParamsList = {
    HomeTabs: HomeTabsParamsList
    paymentServices: undefined
    paymentCreate: { serviceId: string; title: string }
};
