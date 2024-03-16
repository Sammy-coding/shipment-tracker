import {Modal, ModalProps, Pressable} from 'react-native';
import React from 'react';
import Container from '../viewWrapper';

interface Props extends ModalProps {
  visible: boolean;
  setVisible?: () => void;
  children: React.ReactNode;
  isTransparent?: boolean;
  overlayColor?: string;
  isCentralized?: boolean;
  style?: any;
  onPressOverlay?: () => void;
}

const CustomModal = (props: Props) => {
  const {
    visible,
    children,
    isTransparent,
    overlayColor,
    isCentralized,
    style,
    onPressOverlay,
  } = props;
  return (
    <Modal visible={visible} transparent={isTransparent}>
      <Pressable onPress={onPressOverlay ? onPressOverlay : () => {}}>
        <Container
          ht={844}
          wt={393}
          bg={overlayColor ? overlayColor : undefined}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            ...style,
            backgroundColor: overlayColor
              ? overlayColor
              : style?.backgroundColor
              ? style.backgroundColor
              : null,
            justifyContent: isCentralized
              ? 'center'
              : style?.justifyContent
              ? style.justifyContent
              : null,
            alignItems: isCentralized
              ? 'center'
              : style?.alignItems
              ? style.alignItems
              : null,
          }}>
          {children}
        </Container>
      </Pressable>
    </Modal>
  );
};

export default CustomModal;
