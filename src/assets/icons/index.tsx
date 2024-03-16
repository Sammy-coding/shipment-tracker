import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAweseome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import IonIcons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {hp} from '../../shared/utils/responsive';

interface Props {
  name: string;
  iconName: string;
  size?: number;
  color?: string;
}

const Icons = (props: Props) => {
  const {name, iconName, size = 21, color} = props;

  const getIconsFamily = (
    val: string,
    // eslint-disable-next-line @typescript-eslint/no-shadow
    size: number,
    // eslint-disable-next-line @typescript-eslint/no-shadow
    color: string | undefined,
  ) => {
    switch (val) {
      case 'Ant':
        return <AntDesign name={name} size={hp(size)} color={color} />;
      case 'Mat':
        return <MaterialIcons name={name} size={hp(size)} color={color} />;
      case 'MatCom':
        return (
          <MaterialCommunityIcons name={name} size={hp(size)} color={color} />
        );
      case 'Ent':
        return <Entypo name={name} size={hp(size)} color={color} />;
      case 'Feather':
        return <Feather name={name} size={hp(size)} color={color} />;
      case 'Awesome':
        return <FontAweseome name={name} size={hp(size)} color={color} />;
      case 'Foundation':
        return <Foundation name={name} size={hp(size)} color={color} />;
      case 'Ion':
        return <IonIcons name={name} size={hp(size)} color={color} />;
      case 'Evil':
        return <EvilIcons name={name} size={hp(size)} color={color} />;
      default:
        return <MaterialIcons name={name} size={hp(size)} color={color} />;
    }
  };
  return getIconsFamily(iconName, size, color);
};

export default Icons;
