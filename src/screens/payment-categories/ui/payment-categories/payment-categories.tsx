import {IconPhone} from "@shared/ui/icons";
import {List} from "@shared/ui/atoms/list";
import {TListItem} from "@shared/ui/atoms/list-item";

const categories = [
  {
    categoryIcon: <IconPhone />,
    categoryName: 'Мобильная связь',
    categoryId: '1',
  },
];

type Props = {
  onSelect: (item: TListItem) => void;
}

export const PaymentCategories = ({ onSelect }: Props) => {
  return (
    <List
      data={categories.map(category => ({
        src: category.categoryIcon,
        label: category.categoryName,
        id: category.categoryId,
      }))}
      onPress={onSelect}
      iconSize={24}
    />
  );
};
