import { PaymentCategories } from '@screens/payment-categories/ui/payment-categories';
import {TListItem} from "@shared/ui/atoms/list-item";

type Props = {
  onCategorySelect: (id: string, title: string) => void;
}

export const PaymentCategoriesConnector = ({ onCategorySelect }: Props) => {
  const handleSelect = (item: TListItem) => {
    onCategorySelect(item.id, item.title);
  };

  return <PaymentCategories onSelect={handleSelect} />;
};
