import React from 'react';
import Container from '../../../../shared/components/common/viewWrapper';
import styles from './styles';
import AppInput from '../../../../shared/components/common/customInput';
import {colors} from '../../../../assets/colors';
import {useInputFocus} from '../../../../shared/hooks/useInputFocus';
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
    labelStyle: urlLabelStyle,
  } = useInputFocus(url);
  const {
    inputContainerStyle: userInputContainerStyle,
    onFocused: onEmailFocused,
    ref: emailRef,
    inputStyle: userInputStyle,
    translateUp: userTranslateUp,
    labelStyle: userLabelStyle,
  } = useInputFocus(username);
  const {
    inputContainerStyle: passwordInputContainerStyle,
    onFocused: onPasswordFocused,
    ref: passwordRef,
    inputStyle: passwordInputStyle,
    translateUp: passwordTranslateUp,
    labelStyle: passwordLabelStyle,
  } = useInputFocus(password);

  return (
    <Container style={styles.container} mh={16} mt={38}>
      <Container>
        <AppInput
          ht={56}
          value={url}
          ref={urlRef}
          wt={361}
          labelStyle={{paddingLeft: wp(14), ...urlLabelStyle}}
          onChange={(text: string) => onChange(text, 'url')}
          container={{...styles.outerContainer, ...urlInputContainerStyle}}
          inputContainer={styles.inputContainer}
          inputStyle={{...urlInputStyle.inputStyle, color: colors.primaryColor}}
          translateUp={urlTranslateUp}
          isLabelAnimated={true}
          label="URL"
          onFocus={() => {
            onUrlFocused();
          }}
          onBlur={() => {
            onUrlFocused();
          }}
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
          labelStyle={{paddingLeft: wp(14), ...userLabelStyle}}
          wt={361}
          label="Username / Email"
          translateUp={userTranslateUp}
          onChange={(text: string) => onChange(text, 'username')}
          container={{...styles.outerContainer, ...userInputContainerStyle}}
          inputContainer={styles.inputContainer}
          inputStyle={{...userInputStyle.inputStyle}}
          isLabelAnimated={true}
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
          labelStyle={{paddingLeft: wp(14), ...passwordLabelStyle}}
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
          secureTextEntry={true}
        />
      </Container>
    </Container>
  );
};

export default LoginForm;
