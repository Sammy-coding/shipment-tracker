import React from 'react';
import Container from '../../../../shared/components/common/viewWrapper';
import {Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import AText from '../../../../shared/components/common/customText';
import {colors} from '../../../../assets/colors';
import AppInput from '../../../../shared/components/common/customInput';
import Icons from '../../../../assets/icons';
import {wp} from '../../../../shared/utils/responsive';
import ShipmentActionButton from '../shipmentActionButtons';

interface Props {
  fullname?: string;
  searchValue?: string;
  onSearch?: (text: string) => void;
  onPressAddIcon: () => void;
  onPressFilterIcon: () => void;
  onSearchSend: () => void;
}

const ShipmentHeader = (props: Props) => {
  const {
    fullname,
    onSearch,
    searchValue,
    onPressAddIcon,
    onPressFilterIcon,
    onSearchSend,
  } = props;
  return (
    <Container>
      <Container style={styles.headerContainer}>
        <Container>
          <Image
            source={require('../../../../assets/images/Frame49.png')}
            style={styles.imageContainer}
          />
        </Container>
        <Container>
          <Image
            source={require('../../../../assets/images/shippex2.png')}
            style={styles.logoContainer}
          />
        </Container>
        <Container style={styles.bell}>
          <Image
            source={require('../../../../assets/images/bell.png')}
            style={styles.bellCon}
          />
        </Container>
      </Container>
      <Container mt={24}>
        <AText ta="left" color={colors.greyColor}>
          Hello,
        </AText>
        <AText fs={28} fw="600" ta="left">
          {fullname}
        </AText>
      </Container>
      <Container mt={12}>
        <AppInput
          placeholder="Search"
          wt={311}
          ht={44}
          value={searchValue}
          onChange={(text: string) =>
            typeof onSearch === 'function' && onSearch(text)
          }
          Icon={
            <TouchableOpacity
              style={{width: wp(30)}}
              hitSlop={{bottom: 10, top: 10, right: 10, left: 10}}>
              <Icons iconName="Mat" name="search" />
            </TouchableOpacity>
          }
          iconPosition="left"
          container={styles.inputCon}
          returnKeyType="search"
          onSubmitEditing={() => {
            onSearchSend();
          }}
        />
      </Container>
      <Container>
        <ShipmentActionButton
          onPressAddScan={onPressAddIcon}
          onPressFilter={onPressFilterIcon}
        />
      </Container>
    </Container>
  );
};

export default ShipmentHeader;
