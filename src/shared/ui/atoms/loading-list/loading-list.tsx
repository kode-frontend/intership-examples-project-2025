
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { Separator } from '../separator';
import { TListItem } from '../list-item';

type TLoadingListProps = {};

const mock = Array(3).fill(0);

export const LoadingList = ({}: TLoadingListProps) => {
  const separatorItem = () => <Separator spacing={{ left: 7 }} />;

  const renderItem = () => {
    return <Item />;
  };

  return (
    <StyledList
      data={mock}
      ItemSeparatorComponent={separatorItem}
      renderItem={renderItem}
    />
  );
};

const Item = () => {
  return (
    <ItemWrapper>
      <MockIcon />

      <Col>
        <MockTitle />
        <MockDescription />
      </Col>
    </ItemWrapper>
  );
};

const ItemWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(1.75)}px 0;
`;

const MockIcon = styled.View`
  height: ${({ theme }) => theme.spacing(5)}px;
  width: ${({ theme }) => theme.spacing(5)}px;
  background-color: ${({ theme }) => theme.palette.content.secondary};
  border-radius: 99px;
`;

const MockTitle = styled.View`
  height: ${({ theme }) => theme.spacing(2)}px;
  background-color: ${({ theme }) => theme.palette.content.secondary};
  margin-bottom: ${({ theme }) => theme.spacing(0.94125)}px;
  border-radius: 99px;
`;

const MockDescription = styled.View`
  height: ${({ theme }) => theme.spacing(1.5)}px;
  background-color: ${({ theme }) => theme.palette.content.secondary};
  border-radius: 99px;
`;
const Col = styled.View`
  flex: 1;
  margin-left: ${({ theme }) => theme.spacing(2)}px;
`;

const StyledList = styled(FlatList<TListItem>)`
  background-color: ${({ theme }) => theme.palette.background.secondary};
  padding: ${({ theme }) => theme.spacing(2)}px;
`;
