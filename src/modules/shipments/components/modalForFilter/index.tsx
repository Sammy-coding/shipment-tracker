import React from 'react';
import Container from '../../../../shared/components/common/viewWrapper';
import {FlatList, Image, TouchableOpacity} from 'react-native';
import AText from '../../../../shared/components/common/customText';
import styles from './styles';
import {colors} from '../../../../assets/colors';
import StatusList from '../statusList';
import {hp} from '../../../../shared/utils/responsive';

interface Props {
  onSelect: (text: string) => void;
  selected: any[];
  onCancel: () => void;
  onDone: () => void;
  data: any[];
}

const ModalForFilter = (props: Props) => {
  const {onCancel, onSelect, selected, onDone, data} = props;
  return (
    <Container style={styles.container} wt={393} ht={282}>
      <Container mt={10}>
        <Image
          source={require('../../../../assets/images/Grabber.png')}
          style={styles.grabber}
        />
      </Container>
      <Container style={styles.headerCon} ph={24} pv={12}>
        <TouchableOpacity
          onPress={() => {
            onCancel();
          }}>
          <AText color={colors.primaryColor} ta="left">
            Cancel
          </AText>
        </TouchableOpacity>
        <Container>
          <AText fs={18} fw="500">
            Filters
          </AText>
        </Container>
        <TouchableOpacity
          onPress={() => {
            onDone();
          }}>
          <AText color={colors.primaryColor} ta="right">
            Done
          </AText>
        </TouchableOpacity>
      </Container>
      <Container style={styles.title} ph={24} mt={12}>
        <AText ta="left" fs={13} fw="400">
          SHIPMENT STATUS
        </AText>
      </Container>
      <Container ph={24} mt={12}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <StatusList onSelect={onSelect} selected={selected} item={item} />
          )}
          keyExtractor={item => item?.id?.toString()}
          showsVerticalScrollIndicator={false}
          numColumns={3}
          contentContainerStyle={styles.statusList}
          columnWrapperStyle={{gap: hp(20)}}
        />
      </Container>
    </Container>
  );
};

export default ModalForFilter;
