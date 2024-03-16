import React from 'react';
import Container from '../../../../shared/components/common/viewWrapper';
import styles from './styles';
import AppInput from '../../../../shared/components/common/customInput';
import {colors} from '../../../../assets/colors';
import {useInputFocus} from '../../../../shared/utils/useInputFocus';
import {wp} from '../../../../shared/utils/responsive';

interface Props {
  url: string;
  username: string;
  password: string;
  onChange: (text: string, name: string) => void;
}

const LoginForm = (prop: Props) => {
  const {url, username, password, onChange} = prop;
  // const urlRef = useRef() as any;
  const {
    inputContainerStyle: urlInputContainerStyle,
    onFocused: onUrlFocused,
    ref: urlRef,
    inputStyle: urlInputStyle,
    translateUp: urlTranslateUp,
  } = useInputFocus();
  const {
    inputContainerStyle: userInputContainerStyle,
    onFocused: onEmailFocused,
    ref: emailRef,
    inputStyle: userInputStyle,
    translateUp: userTranslateUp,
  } = useInputFocus();
  const {
    inputContainerStyle: passwordInputContainerStyle,
    onFocused: onPasswordFocused,
    ref: passwordRef,
    inputStyle: passwordInputStyle,
    translateUp: passwordTranslateUp,
  } = useInputFocus();

  return (
    <Container style={styles.container} mh={16} mt={38}>
      <Container>
        <AppInput
          ht={56}
          value={url}
          ref={urlRef}
          wt={361}
          labelStyle={{paddingLeft: wp(14)}}
          onChange={(text: string) => onChange(text, 'url')}
          container={{...styles.outerContainer, ...urlInputContainerStyle}}
          inputContainer={styles.inputContainer}
          inputStyle={{...urlInputStyle.inputStyle}}
          translateUp={urlTranslateUp}
          isLabelAnimated={true}
          label="URL"
          onFocus={() => {
            onUrlFocused();
          }}
          onBlur={() => {
            onUrlFocused();
          }}
          placeholderTextColor={colors.placeholderColor}
        />
      </Container>

      <Container mt={25}>
        <AppInput
          ht={56}
          value={username}
          ref={emailRef}
          onFocus={() => {
            onEmailFocused();
          }}
          onBlur={() => {
            onEmailFocused();
          }}
          labelStyle={{paddingLeft: wp(14)}}
          wt={361}
          label="Username / Email"
          translateUp={userTranslateUp}
          onChange={(text: string) => onChange(text, 'username')}
          container={{...styles.outerContainer, ...userInputContainerStyle}}
          inputContainer={styles.inputContainer}
          inputStyle={{...userInputStyle.inputStyle}}
          isLabelAnimated={true}
          placeholderTextColor={colors.placeholderColor}
        />
      </Container>

      <Container mt={25}>
        <AppInput
          label="Password"
          ht={56}
          value={password}
          translateUp={passwordTranslateUp}
          isLabelAnimated={true}
          ref={passwordRef}
          wt={361}
          labelStyle={{paddingLeft: wp(14)}}
          onChange={(text: string) => onChange(text, 'password')}
          container={{...styles.outerContainer, ...passwordInputContainerStyle}}
          inputContainer={styles.inputContainer}
          onFocus={() => {
            onPasswordFocused();
          }}
          onBlur={() => {
            onPasswordFocused();
          }}
          inputStyle={{...passwordInputStyle.inputStyle}}
          placeholderTextColor={colors.placeholderColor}
          secureTextEntry={true}
        />
      </Container>
    </Container>
  );
};

export default LoginForm;
