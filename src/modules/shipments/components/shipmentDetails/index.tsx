import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Container from '../../../../shared/components/common/viewWrapper';
import AText from '../../../../shared/components/common/customText';
import Icons from '../../../../assets/icons';
import styles from './styles';
import {colors} from '../../../../assets/colors';

interface Props {
  item: any;
  onSelect: (text: string) => void;
}

const ShipmentDetails = (props: Props) => {
  const {item} = props;
  return (
    <Container style={styles.container} ph={14} pv={12}>
      <TouchableOpacity>
        <Icons name="checkbox-blank-outline" iconName="MatCom" />
      </TouchableOpacity>
      <Container>
        <Image
          source={require('../../../../assets/images/package.png')}
          style={styles.packageImage}
        />
      </Container>
      <Container style={styles.details}>
        <Container>
          <AText ta="left" fs={13}>
            {item?.name}
          </AText>
        </Container>
        <Container>
          <AText fs={18} ta="left">
            {item?.id}
          </AText>
        </Container>
        <Container style={styles.address}>
          <AText fs={13} color={colors.greyColor}>
            {item.from}
          </AText>
          <Icons
            name="arrowright"
            iconName="Ant"
            size={16}
            color={colors.primaryColor}
          />
          <AText fs={13} color={colors.greyColor}>
            {item.to}
          </AText>
        </Container>
      </Container>
      <Container>
        <Container>
          <AText fs={11} color={colors.placeholderSecondaryColor}>
            {item?.status}
          </AText>
        </Container>
      </Container>
    </Container>
  );
};

export default ShipmentDetails;
