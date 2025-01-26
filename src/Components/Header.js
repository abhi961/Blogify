import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {CatIcon} from '../theme/images';
import {normalize} from '../utlities/helpers/normalize';
import {useNavigation} from '@react-navigation/native';
import {useDarkMode} from './DarkModeProvider';
import {COLORS} from '../theme/color';
import { Fonts } from '../theme/fonts';

const Header = ({mainTitle,saveIcon}) => {
  const isDarkMode = useDarkMode();
  const navigation = useNavigation();
  return (
    <View
      style={[
        styles.header,
        {backgroundColor: isDarkMode ? COLORS.black : COLORS.white},
      ]}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={CatIcon.Back}
          style={[
            styles.backIcon,
            {tintColor: isDarkMode ? COLORS.white : COLORS.black},
          ]}
        />
      </TouchableOpacity>
      <Text style={[styles.title, {color: isDarkMode ? COLORS.white : COLORS.black}]}>{mainTitle}</Text>
      <TouchableOpacity>
        <Image
          source={saveIcon === true ? CatIcon.Save : null}
          style={[
            styles.backIcon,
            {tintColor: isDarkMode ? COLORS.white : COLORS.black},
          ]}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: normalize(20),
    paddingHorizontal: normalize(15),
    backgroundColor:'#000',
    paddingTop: normalize(15),
  },
  backIcon: {
    resizeMode: 'contain',
    width: normalize(16),
    height: normalize(16),
  },
  title: {
    fontSize: normalize(16),
    fontFamily: Fonts.Poppins_SemiBold,
  
  },
});

export default Header;
