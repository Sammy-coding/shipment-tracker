import {TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import Container from '../../../../shared/components/common/viewWrapper';
import AText from '../../../../shared/components/common/customText';
import Icons from '../../../../assets/icons';
import styles from './styles';
import {colors} from '../../../../assets/colors';
import CustomButton from '../../../../shared/components/common/customButton';

interface Props {
  item: any;
  onSelect: (text: string) => void;
}

const ShipmentDetails = (props: Props) => {
  const {item} = props;
  const [showMore, setShowMore] = useState(false);

  const getStatusBackground = (status: string) => {
    switch (status) {
      case 'RECEIVED':
        return '#D9E6FD';
      case 'CANCELED':
        return '#F4F2F8';
      case 'ERROR':
        return '#FEE3D4';
      case 'DELIVERED':
        return '#E3FAD6';
      default:
        return '#F4F2F8';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'RECEIVED':
        return '#2F50C1';
      case 'CANCELED':
        return '#58536E';
      case 'ERROR':
        return '#D12030';
      case 'DELIVERED':
        return '#208D28';
      default:
        return '#58536E';
    }
  };

  return (
    <>
      <Container
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          ...styles.container,
          borderBottomRightRadius: showMore ? 0 : 10,
          borderBottomLeftRadius: showMore ? 0 : 10,
        }}
        ph={12}
        pv={12}>
        <TouchableOpacity>
          <Icons
            name="checkbox-blank-outline"
            iconName="MatCom"
            color={colors.borderColor}
          />
        </TouchableOpacity>
        <Container>
          <Image
            source={require('../../../../assets/images/package.png')}
            style={styles.packageImage}
          />
        </Container>
        <Container style={styles.details} wt={121}>
          <Container>
            <AText ta="left" fs={13}>
              AWB
            </AText>
          </Container>
          <Container>
            <AText fs={18} ta="left">
              {item?.name}
            </AText>
          </Container>
          <Container style={styles.address}>
            <AText fs={13} color={colors.greyColor}>
              {item?.origin_state?.toLowerCase()}
            </AText>
            <Icons
              name="arrowright"
              iconName="Ant"
              size={12}
              color={colors.primaryColor}
            />
            <AText fs={13} color={colors.greyColor}>
              {item?.destination_state?.toLowerCase()}
            </AText>
          </Container>
        </Container>

        <Container
          style={styles.status}
          pv={4}
          ph={6}
          bg={getStatusBackground(item.status)}>
          <AText fs={11} color={getStatusText(item.status)}>
            {item?.status}
          </AText>
        </Container>
        <TouchableOpacity
          onPress={() => setShowMore(!showMore)}
          style={styles.saltCon}>
          <Icons
            name="arrowsalt"
            iconName="Ant"
            size={16}
            color={colors.primaryColor}
          />
        </TouchableOpacity>
      </Container>
      {showMore && (
        <Container
          ph={12}
          bg={colors.cardColor}
          style={styles.topBranch}
          pv={10}>
          <Container style={styles.branchCon}>
            <Container>
              <AText ta="left" fs={11} color={colors.primaryColor}>
                Origin
              </AText>
              <AText ta="left">{item?.origin_state}</AText>
              <AText color={colors.placeholdePrimaryrColor}>
                {item?.origin_area ? item.origin_area : 'No Area Provided'}
              </AText>
            </Container>
            <Container>
              <Icons
                name="arrowright"
                iconName="Ant"
                size={21}
                color={colors.primaryColor}
              />
            </Container>
            <Container>
              <AText fs={11} ta="left" color={colors.primaryColor}>
                Destination
              </AText>
              <AText ta="left">{item?.destination_state}</AText>
              <AText ta="left" color={colors.placeholdePrimaryrColor}>
                {item?.destination_area
                  ? item.destination_area
                  : 'No Area Provided'}
              </AText>
            </Container>
          </Container>
          <Container style={styles.buttons} mt={20}>
            <Container>
              <CustomButton wt={100} ht={40} bg={'#2F50C1'}>
                <AText color={colors.white}>Call</AText>
              </CustomButton>
            </Container>
            <Container>
              <CustomButton wt={100} ht={40} bg="#208D28">
                <AText color={colors.white}>Whatsapp</AText>
              </CustomButton>
            </Container>
          </Container>
        </Container>
      )}
    </>
  );
};

export default ShipmentDetails;
