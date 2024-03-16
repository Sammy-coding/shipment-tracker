import {View, Text, FlatList, RefreshControl} from 'react-native';
import React from 'react';
import Container from '../../../../shared/components/common/viewWrapper';
import AText from '../../../../shared/components/common/customText';
import ShipmentDetails from '../shipmentDetails';
import styles from './styles';
import Icons from '../../../../assets/icons';

interface Props {
  onRefresh?: () => void;
  onSelect: (text: string) => void;
  refreshing?: boolean;
}

const ShipmentList = (props: Props) => {
  const {onRefresh, onSelect, refreshing} = props;
  const data = [
    {
      name: 'AWB',
      from: 'CAIRO',
      to: 'ALEXANDRE',
      id: 773774772733,
      status: 'CANCELLED',
    },
    {
      name: 'AWB',
      from: 'CAIRO',
      to: 'ALEXANDRE',
      id: 773774773433,
      status: 'CANCELLED',
    },
    {
      name: 'AWB',
      from: 'CAIRO',
      to: 'ALEXANDRE',
      id: 773774753733,
      status: 'RECEIVED',
    },
  ];
  return (
    <Container mt={32}>
      <Container style={styles.header} mb={16}>
        <Container>
          <AText>Shipments</AText>
        </Container>
        <Container style={styles.markAll}>
          <Icons name="checkbox-blank-outline" iconName="MatCom" />
          <AText>Mark All</AText>
        </Container>
      </Container>
      <FlatList
        data={data}
        refreshing={false}
        contentContainerStyle={styles.listCon}
        onRefresh={onRefresh}
        renderItem={({item}) => (
          <ShipmentDetails item={item} onSelect={onSelect} />
        )}
        refreshControl={
          <RefreshControl
            refreshing={refreshing as boolean}
            progressViewOffset={100}
          />
        }
      />
    </Container>
  );
};

export default ShipmentList;
