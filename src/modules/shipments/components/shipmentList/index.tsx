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
}

const ShipmentList = (props: Props) => {
  const {onRefresh, onSelect, refreshing, data, loading} = props;
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
      <Container>
        {loading ? (
          <ActivityIndicator size="large" />
        ) : (
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
            showsVerticalScrollIndicator={false}
          />
        )}
      </Container>
    </Container>
  );
};

export default ShipmentList;
