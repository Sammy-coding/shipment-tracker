import {Animated, TextInput, TextInputProps, View} from 'react-native';
import React, {forwardRef} from 'react';
import Container from '../viewWrapper';
import AText from '../customText';
import {hp, wp} from '../../../utils/responsive';
import styles from './styles';
import {colors} from '../../../../assets/colors';

interface Props extends TextInputProps {
  style?: any;
  children?: string;
  color?: string;
  wt?: number;
  ht?: number;
  mt?: number;
  mb?: number;
  pt?: number;
  pb?: number;
  mv?: number;
  mh?: number;
  ph?: number;
  pv?: number;
  pl?: number;
  pr?: number;
  Icon?: React.ReactNode;
  iconPosition?: string;
  inputStyle?: any;
  label?: string;
  labelStyle?: any;
  labelColor?: string;
  inputContainer?: any;
  container?: any;
  error?: string;
  success?: string;
  errorStyle?: any;
  labelWrapper?: any;
  onChange?: any;
  isFocused?: boolean;
  isLabelAnimated?: boolean;
  translateUp?: any;
}

const AppInput = forwardRef((props: Props, ref: any) => {
  const {
    onChange,
    value,
    Icon,
    iconPosition,
    inputStyle,
    wt,
    ht,
    mt,
    mb,
    pt,
    pb,
    mv,
    mh,
    ph,
    pv,
    pr,
    pl,
    label,
    labelStyle,
    labelColor,
    inputContainer,
    container,
    error,
    success,
    labelWrapper,
    isLabelAnimated,
    translateUp,
  } = props;

  return (
    <Container
      mv={mv}
      mt={mt}
      mb={mb}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        ...container,
      }}>
      {label &&
        (isLabelAnimated ? (
          <Animated.View
            style={{
              transform: [
                {
                  translateY: translateUp,
                },
              ],
              ...labelStyle,
            }}>
            <AText ta="left" color={labelColor} mb={5} style={{...labelStyle}}>
              {label}
            </AText>
          </Animated.View>
        ) : (
          <Container style={{...labelWrapper}}>
            <AText ta="left" color={labelColor} mb={5} style={{...labelStyle}}>
              {label}
            </AText>
          </Container>
        ))}
      <View
        style={[
          styles.inputContainer,
          // eslint-disable-next-line react-native/no-inline-styles
          {
            ...inputContainer,
            flexDirection: iconPosition === 'left' ? 'row-reverse' : 'row',
          },
        ]}>
        <TextInput
          ref={ref}
          {...props}
          onChangeText={onChange}
          value={value}
          style={[
            styles.input,
            {
              ...inputStyle,
              marginHorizontal: mh && wp(mh),
              paddingBottom: pb && hp(pb),
              paddingTop: pt && hp(pt),
              paddingHorizontal: ph && wp(ph),
              paddingVertical: pv && hp(pv),
              height: ht && hp(ht),
              paddingLeft: pl && wp(pl),
              paddingRight: pr && wp(pr),
              width: wt && wp(wt),
            },
          ]}
        />
        {Icon && <Container style={styles.icon}>{Icon}</Container>}
      </View>
      {success && (
        <Container>
          <AText color={colors.successColor}>{success}</AText>
        </Container>
      )}
    </Container>
  );
});

export default AppInput;
