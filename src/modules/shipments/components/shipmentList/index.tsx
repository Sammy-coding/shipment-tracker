import {FlatList, RefreshControl, TouchableOpacity} from 'react-native';
import React from 'react';
import Container from '../../../../shared/components/common/viewWrapper';
import AText from '../../../../shared/components/common/customText';
import ShipmentDetails from '../shipmentDetails';
import styles from './styles';
import Icons from '../../../../assets/icons';
import {colors} from '../../../../assets/colors';

interface Props {
  onRefresh?: () => void;
  onSelect: (text: string) => void;
  refreshing: boolean;
  loading?: boolean;
}

const ShipmentList = (props: Props) => {
  const {onRefresh, onSelect, refreshing} = props;
  const data = [
    {
      name: 'AWB',
      from: 'CAIRO',
      to: 'ALEXANDRE',
      id: 77377477273,
      status: 'CANCELED',
    },
    {
      name: 'AWB',
      from: 'CAIRO',
      to: 'ALEXANDRE',
      id: 77377477343,
      status: 'CANCELED',
    },
    {
      name: 'AWB',
      from: 'CAIRO',
      to: 'ALEXANDRE',
      id: 73774753733,
      status: 'RECEIVED',
    },
  ];
  return (
    <Container mt={32}>
      <Container style={styles.header} mb={16}>
        <Container>
          <AText>Shipments</AText>
        </Container>
        <TouchableOpacity style={styles.markAll}>
          <Icons
            name="checkbox-blank-outline"
            iconName="MatCom"
            color={colors.borderColor}
          />
          <AText>Mark All</AText>
        </TouchableOpacity>
      </Container>
      <FlatList
        data={data}
        refreshing={refreshing}
        contentContainerStyle={styles.listCon}
        onRefresh={onRefresh}
        renderItem={({item}) => (
          <ShipmentDetails item={item} onSelect={onSelect} />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </Container>
  );
};

export default ShipmentList;
