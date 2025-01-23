import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {CatIcon} from '../theme/images';
import {normalize} from '../utlities/helpers/normalize';
import {useNavigation} from '@react-navigation/native';
import {useDarkMode} from './DarkModeProvider';
import {COLORS} from '../theme/color';

const Header = () => {
  const isDarkMode = useDarkMode();
  const navigation = useNavigation();
  return (
    <View
      style={[
        styles.header,
        {backgroundColor: isDarkMode ? COLORS.black : COLORS.lightWhite},
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
      <TouchableOpacity>
        <Image
          source={CatIcon.Save}
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
    paddingTop: normalize(20),
  },
  backIcon: {
    resizeMode: 'contain',
    width: normalize(16),
    height: normalize(16),
  },
});

export default Header;
