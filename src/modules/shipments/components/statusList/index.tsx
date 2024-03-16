import React from 'react';
import Container from '../../../../shared/components/common/viewWrapper';
import AText from '../../../../shared/components/common/customText';
import styles from './styles';
import {TouchableOpacity} from 'react-native';
import {colors} from '../../../../assets/colors';

interface Props {
  item: any;
  onSelect: (text: string) => void;
  selected: any;
}

const StatusList = (props: Props) => {
  const {item, onSelect, selected} = props;
  return (
    <TouchableOpacity
      onPress={() => onSelect(item.status)}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        ...styles.container,
        borderWidth: selected.includes(item.status) ? 1 : 0,
        borderColor: selected.includes(item.status)
          ? colors.primaryColor
          : undefined,
      }}>
      <AText>{item?.status}</AText>
    </TouchableOpacity>
  );
};

export default StatusList;
