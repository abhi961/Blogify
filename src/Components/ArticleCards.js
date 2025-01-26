import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { normalize } from '../utlities/helpers/normalize';
import { Fonts } from '../theme/fonts';
import { COLORS } from '../theme/color';
import { CatIcon, IMAGES } from '../theme/images';
import { useDarkMode } from './DarkModeProvider';
import { useNavigation } from '@react-navigation/native';

const ArticleCards = ({ item }) => {
  const navigation = useNavigation();
  const isDarkMode = useDarkMode();
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => navigation.navigate('Details', { data: item })}
      style={[styles.cardsContainer,{ borderColor: isDarkMode ? COLORS.lightBack : COLORS.divider }]}>
      <Image source={{ uri: item.illustration }} style={styles.articlImg} />
      <View style={styles.conentCards}>
        <Text
          style={[
            styles.titletext,
            { color: isDarkMode ? COLORS.lightWhite : COLORS.lightBack },
          ]}>
          {item.title}
        </Text>
        <Text
          style={[
            styles.dateText,
            { color: isDarkMode ? COLORS.lightWhite : COLORS.lightBack },
          ]}>
          {item.date}
        </Text>
        <View style={styles.flexContainer}>
          <View style={styles.likesContainer}>
            <Image
              source={CatIcon.Likes}
              style={[
                styles.likesIcon,
                { tintColor: isDarkMode ? COLORS.lightWhite : COLORS.lightBack },
              ]}
            />
            <Text
              style={[
                styles.countsText,
                { color: isDarkMode ? COLORS.lightWhite : COLORS.lightBack },
              ]}>
              101
            </Text>
          </View>
          <View style={styles.commentConatiner}>
            <Image
              source={CatIcon.comment}
              style={[
                styles.likesIcon,
                { tintColor: isDarkMode ? COLORS.lightWhite : COLORS.lightBack },
              ]}
            />
            <Text style={[styles.countsText, { color: isDarkMode ? COLORS.lightWhite : COLORS.lightBack }]}>1244</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ArticleCards;

const styles = StyleSheet.create({
  cardsContainer: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: normalize(10),
    padding: normalize(10),
    borderColor: COLORS.lightBack,
    borderWidth: normalize(1),
    borderRadius: normalize(8),
    marginBottom: normalize(16),
  },
  articlImg: {
    width: normalize(100),
    height: normalize(100),
    borderRadius: normalize(10),
    resizeMode: 'cover',
  },
  titletext: {
    fontSize: normalize(15),
    width: normalize(200),
    fontFamily: Fonts.Poppins_SemiBold,
    color: COLORS.lightBack,
  },
  dateText: {
    color: COLORS.lightBack,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: normalize(13),
    letterSpacing: normalize(0.5),
  },
  conentCards: {
    marginLeft: normalize(15),
  },
  likesIcon: {
    resizeMode: 'contain',
    width: normalize(16),
    height: normalize(16),
  },
  likesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: normalize(10),
  },
  commentConatiner: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: normalize(30),
  },
  countsText: {
    fontFamily: Fonts.Poppins_Medium,
    fontSize: normalize(13),
    color: COLORS.lightBack,
    marginLeft: normalize(3),
  },
});
