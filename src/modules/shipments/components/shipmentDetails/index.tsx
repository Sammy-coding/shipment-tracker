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
          <Icons name="checkbox-blank-outline" iconName="MatCom" />
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
              {item.from.toLowerCase()}
            </AText>
            <Icons
              name="arrowright"
              iconName="Ant"
              size={12}
              color={colors.primaryColor}
            />
            <AText fs={13} color={colors.greyColor}>
              {item?.to?.toLowerCase()}
            </AText>
          </Container>
        </Container>

        <Container style={styles.status} pv={4} ph={6}>
          <AText fs={11} color={colors.placeholderSecondaryColor}>
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
              <AText ta="left">Cairo</AText>
              <AText color={colors.placeholdePrimaryrColor}>
                Dokki, 22 Nile st.
              </AText>
            </Container>
            <Container>
              <Icons
                name="arrowright"
                iconName="Ant"
                size={12}
                color={colors.primaryColor}
              />
            </Container>
            <Container>
              <AText fs={11} ta="left" color={colors.primaryColor}>
                Destination
              </AText>
              <AText ta="left">Alexandria</AText>
              <AText ta="left" color={colors.placeholdePrimaryrColor}>
                Smoha, 22 max st.
              </AText>
            </Container>
          </Container>
          <Container style={styles.buttons} mt={20}>
            <Container>
              <CustomButton wt={100} ht={40}></CustomButton>
            </Container>
            <Container>
              <CustomButton wt={100} ht={40}></CustomButton>
            </Container>
          </Container>
        </Container>
      )}
    </>
  );
};

export default ShipmentDetails;
