import React from 'react';
import Screen from '../../shared/components/common/screenWrapper';
import styles from './styles';
import ShipmentHeader from '../../modules/shipments/components/shipmentHeader';
import {useAppSelector} from '../../shared/types/redux.types';
import ShipmentList from '../../modules/shipments/components/shipmentList';

const ShippmentScreen = () => {
  const {data} = useAppSelector(state => state.auth);
  return (
    <Screen style={styles.container}>
      <ShipmentHeader fullname={data?.full_name} />
      <ShipmentList />
    </Screen>
  );
};

export default ShippmentScreen;
