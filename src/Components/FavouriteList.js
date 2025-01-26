import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { COLORS } from '../theme/color';
import { normalize } from '../utlities/helpers/normalize';
import { Fonts } from '../theme/fonts';
import { useDarkMode } from './DarkModeProvider';
import { useNavigation } from '@react-navigation/native';

const FavouriteList = ({ item }) => {
  const navigation = useNavigation();
  const isDarkMode = useDarkMode();
  const { title, subtitle, illustration, category, time, date } = item;

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => navigation.navigate('Details', { data: item })}
      style={[
        styles.container,
        { borderColor: isDarkMode ? COLORS.lightBack : COLORS.lightWhite },
      ]}>
      <Image source={{ uri: illustration }} style={styles.articleImg} />
      <View style={styles.contentContainer}>
        <Text
          style={[
            styles.categoryText,
            {
              color: isDarkMode ? COLORS.black : COLORS.white,
              backgroundColor: isDarkMode ? COLORS.lightWhite : COLORS.black,
            },
          ]}>
          {category}
        </Text>
        <Text
          style={[
            styles.titleText,
            { color: isDarkMode ? COLORS.white : COLORS.lightBack },
          ]}
          numberOfLines={2}>
          {title}
        </Text>
        <View style={styles.dateContainer}>
          <Text
            style={[
              styles.dateText,
              { color: isDarkMode ? COLORS.white : COLORS.lightBack },
            ]}>
            {date}
          </Text>
          <Text
            style={[
              styles.timeText,
              { color: isDarkMode ? COLORS.white : COLORS.lightBack },
            ]}>
            {time}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: normalize(10),
    borderWidth: normalize(1),
    borderRadius: normalize(8),
    marginBottom: normalize(16),
    marginHorizontal: normalize(16),
  },
  articleImg: {
    width: normalize(100),
    height: normalize(100),
    borderRadius: normalize(8),
  },
  contentContainer: {
    flex: 1,
    marginLeft: normalize(12),
  },
  categoryText: {
    fontSize: normalize(12),
    fontFamily: Fonts.Poppins_Medium,
    paddingHorizontal: normalize(8),
    paddingVertical: normalize(2),
    borderRadius: normalize(4),
    alignSelf: 'flex-start',
  },
  titleText: {
    fontSize: normalize(14),
    fontFamily: Fonts.Poppins_SemiBold,
    marginTop: normalize(8),
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: normalize(8),
  },
  dateText: {
    fontSize: normalize(12),
    fontFamily: Fonts.Poppins_Regular,
  },
  timeText: {
    fontSize: normalize(12),
    fontFamily: Fonts.Poppins_Regular,
    marginLeft: normalize(12),
  },
});

export default FavouriteList;