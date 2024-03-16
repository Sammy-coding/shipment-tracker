import React from 'react';
import Container from '../../../../shared/components/common/viewWrapper';
import CustomButton from '../../../../shared/components/common/customButton';
import styles from './styles';
import AText from '../../../../shared/components/common/customText';
import Icons from '../../../../assets/icons';
import {colors} from '../../../../assets/colors';

interface Props {
  onPressFilter: () => void;
  onPressAddScan: () => void;
}

const ShipmentActionButton = (props: Props) => {
  const {onPressAddScan, onPressFilter} = props;
  return (
    <Container style={styles.container} mt={24}>
      <Container>
        <CustomButton
          wt={173.5}
          ht={44}
          onPress={() => onPressFilter()}
          style={styles.button}
          bg={colors.inputColor}>
          <Icons
            color={colors.placeholderSecondaryColor}
            name="filter-list"
            iconName="Mat"
          />
          <AText color={colors.placeholderSecondaryColor} fs={16}>
            Filter
          </AText>
        </CustomButton>
      </Container>
      <Container>
        <CustomButton
          wt={173.5}
          ht={44}
          style={styles.button}
          onPress={() => onPressAddScan()}>
          <Icons color={colors.white} name="line-scan" iconName="MatCom" />
          <AText color={colors.white} fs={16}>
            Add Scan
          </AText>
        </CustomButton>
      </Container>
    </Container>
  );
};

export default ShipmentActionButton;
