import React, {useCallback, useEffect, useState} from 'react';
import Screen from '../../shared/components/common/screenWrapper';
import styles from './styles';
import ShipmentHeader from '../../modules/shipments/components/shipmentHeader';
import {useAppDispatch, useAppSelector} from '../../shared/types/redux.types';
import ShipmentList from '../../modules/shipments/components/shipmentList';
import {shipment} from '../../modules/shipments/store/actions/action.creator';
import CustomModal from '../../shared/components/common/customModal';
import ModalForFilter from '../../modules/shipments/components/modalForFilter';
import Container from '../../shared/components/common/viewWrapper';
import {Alert} from 'react-native';
import {clearError} from '../../modules/shipments/store/reducer/shipment.slice';
import {IShipmentData} from '../../modules/shipments/model/shipment.model';

const ShippmentScreen = () => {
  const {data} = useAppSelector(state => state.auth);
  const {
    data: shipmentData,
    loading,
    error,
    statusError,
  } = useAppSelector(state => state.shipment);
  const dispatch = useAppDispatch();
  const [state, setState] = useState({
    isRefreshing: false,
    isFilterModalOpened: false,
    selectedStatus: [] as any,
    searchValue: '',
    isMarked: false,
    newData: [] as null | IShipmentData[],
  });

  useEffect(() => {
    if (error) {
      Alert.alert(error);
    }
    if (statusError) {
      Alert.alert(statusError);
    }

    dispatch(clearError());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, statusError]);

  useEffect(() => {
    fetchShipments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setState({...state, newData: shipmentData});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shipmentData]);

  const fetchShipments = useCallback(() => {
    const dataToBeSent = {
      doctype: 'AWB',
      fields: [
        'name',
        'destination_city',
        'destination_area',
        'origin_city',
        'destination_state',
        'origin_state',
        'sender_phone',
        'origin_area',
        'status',
      ],
    };

    dispatch(shipment(dataToBeSent));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onRefresh = () => {
    fetchShipments();
  };

  const onSelect = () => {};

  const onCloseModal = () => {
    setState({...state, isFilterModalOpened: false});
  };

  const onDone = () => {
    if (state.newData) {
      const filteredData = state.newData.filter(val =>
        state.selectedStatus.includes(val.status),
      );
      setState({...state, isFilterModalOpened: false, newData: filteredData});
    } else {
      setState({...state, isFilterModalOpened: false});
    }
  };

  const onSelectFilter = (text: string) => {
    if (state.selectedStatus.includes(text)) {
      const newState = state.selectedStatus.filter((val: any) => val !== text);
      setState({...state, selectedStatus: newState});
    } else {
      setState({...state, selectedStatus: state.selectedStatus.concat([text])});
    }
  };

  const handleFilter = () => {
    setState({...state, isFilterModalOpened: true});
  };

  const handleAddIcon = () => {};

  const onSearch = (text: string) => {
    setState({...state, searchValue: text});
  };

  const handleSearchSent = () => {
    const dataToSend = {
      doctype: 'AWB',
      fields: [
        'name',
        'destination_city',
        'destination_area',
        'origin_city',
        'destination_state',
        'origin_state',
        'sender_phone',
        'origin_area',
        'status',
      ],
      filters: {
        status: ['like', `%${state.searchValue}%`],
      },
    };

    dispatch(shipment(dataToSend));
  };

  const onMarkAll = () => {
    setState({...state, isMarked: !state.isMarked});
  };

  return (
    <Screen style={styles.container}>
      <ShipmentHeader
        fullname={data?.full_name}
        onPressFilterIcon={handleFilter}
        onPressAddIcon={handleAddIcon}
        onSearch={onSearch}
        searchValue={state.searchValue}
        onSearchSend={handleSearchSent}
      />
      <ShipmentList
        onRefresh={onRefresh}
        onSelect={onSelect}
        loading={loading}
        refreshing={state.isRefreshing}
        data={state.newData}
        onMarkAll={onMarkAll}
        isMarked={state.isMarked}
      />
      <CustomModal
        visible={state.isFilterModalOpened}
        isTransparent={true}
        style={styles.modalCon}>
        <Container>
          <ModalForFilter
            onCancel={onCloseModal}
            onDone={onDone}
            onSelect={onSelectFilter}
            selected={state.selectedStatus}
          />
        </Container>
      </CustomModal>
    </Screen>
  );
};

export default ShippmentScreen;
