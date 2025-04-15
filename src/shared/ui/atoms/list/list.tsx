import { FlatList, ListRenderItem, RefreshControl } from 'react-native';

import styled from 'styled-components';

import { darkTheme } from '@theme/dark';

import { ListItem, TListItem } from '@components/list-item';
import { Separator } from '@components/separator';
import { LoadingList } from '@components/loading-list';
import { ErrorScreen } from '@components/error-screen';

const StyledList = styled(FlatList<TListItem>)`
  background-color: ${({ theme }) => theme.palette.background.secondary};
  padding: ${({ theme }) => theme.spacing(2)}px;
`;

type TListProps = {
  data: TListItem[];
  onPress: (item: TListItem) => void;
  iconSize?: number;
  loading?: boolean;
  onRefresh?: () => void;
  refreshing?: boolean;
};

export const List = ({
  data,
  onPress,
  iconSize,
  loading,
  onRefresh,
  refreshing,
}: TListProps) => {
  const separatorItem = () => <Separator spacing={{ left: 7 }} />;

  const renderItem: ListRenderItem<TListItem> = ({ item }) => {
    return (
      <ListItem
        {...item}
        onPress={onPress}
        iconSize={iconSize}
      />
    );
  };

  if (loading) {
    return <LoadingList />;
  }

  if (data.length === 0) {
    return <ErrorScreen message="Па вашему запросу ничего не найдено" />;
  }

  return (
    <StyledList
      onRefresh={onRefresh}
      refreshing={loading}
      data={data}
      renderItem={renderItem}
      keyExtractor={item => String(item.id)}
      ItemSeparatorComponent={separatorItem}
      refreshControl={
        <RefreshControl
          refreshing={refreshing || false}
          onRefresh={onRefresh}
          tintColor={darkTheme.palette.text.primary}
          title=""
        />
      }
    />
  );
};
