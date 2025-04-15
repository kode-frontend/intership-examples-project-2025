import { ProfileConnector } from '@screens/profile';
import {StackScreenProps} from "@react-navigation/stack";
import {HomeTabsParamsList} from "../types";


type Props = StackScreenProps<
    HomeTabsParamsList,
    'ProfileMain'
>;

export const ProfileScreen = ({}: Props) => {
  return <ProfileConnector />
}
