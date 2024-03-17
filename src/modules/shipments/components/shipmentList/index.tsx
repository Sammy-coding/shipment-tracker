import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Container from '../../../../shared/components/common/viewWrapper';
import AText from '../../../../shared/components/common/customText';
import ShipmentDetails from '../shipmentDetails';
import styles from './styles';
import Icons from '../../../../assets/icons';
import {colors} from '../../../../assets/colors';
import {IShipmentData} from '../../model/shipment.model';

interface Props {
  onRefresh?: () => void;
  onSelect: (text: string) => void;
  refreshing: boolean;
  loading?: boolean;
  data: IShipmentData[] | null;
  onMarkAll: () => void;
  isMarked: boolean;
}

const ShipmentList = (props: Props) => {
  const {onRefresh, onSelect, refreshing, data, loading, onMarkAll, isMarked} =
    props;
  return (
    <Container mt={32}>
      <Container style={styles.header} mb={16}>
        <Container>
          <AText>Shipments</AText>
        </Container>
        <TouchableOpacity onPress={onMarkAll} style={styles.markAll}>
          <Icons
            name={isMarked ? 'checkbox-intermediate' : 'checkbox-blank-outline'}
            iconName="MatCom"
            color={isMarked ? colors.primaryColor : colors.borderColor}
          />
          <AText>Mark All</AText>
        </TouchableOpacity>
      </Container>
      <Container ht={420}>
        {loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <FlatList
            data={data}
            refreshing={refreshing}
            contentContainerStyle={styles.listCon}
            onRefresh={onRefresh}
            renderItem={({item}) => (
              <ShipmentDetails
                item={item}
                onSelect={onSelect}
                isMarked={isMarked}
              />
            )}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            showsVerticalScrollIndicator={false}
          />
        )}
      </Container>
    </Container>
  );
};

export default ShipmentList;
