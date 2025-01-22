import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../theme/color';
import {normalize} from '../utlities/helpers/normalize';
import {Fonts} from '../theme/fonts';
import {useDarkMode} from './DarkModeProvider';

const Snapcarousel = ({item}) => {
  const isDarkMode = useDarkMode();
  return (
    <View style={[styles.container,{backgroundColor:isDarkMode?COLORS.cardDark:COLORS.white}]}>
      <Image source={{uri: item.illustration}} style={styles.articleImg} />
      <View style={styles.category}>
        <Text style={styles.categoryText}>{item.category}</Text>
      </View>
      <View style={styles.contentContainer}>
        <TouchableOpacity style={styles.titleConatiner}>
          <Text style={[styles.titleText,{color:isDarkMode? COLORS.white:COLORS.lightBack}]}>{item.title}</Text>
        </TouchableOpacity>
        <Text style={[styles.timeText,{color:isDarkMode ? COLORS.white:COLORS.lightBack}]}>{item.time}</Text>
      </View>
    </View>
  );
};

export default Snapcarousel;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    // borderColor:COLORS.ExtraWhite,
    // borderWidth:normalize(1),
      borderRadius:normalize(10),
    // padding: normalize(15),
    width: normalize(280),
    margin: normalize(10),
    height:normalize(300)
  },
  articleImg: {
    width: '100%',
    height: normalize(180),
    borderTopRightRadius: normalize(10),
    borderTopLeftRadius: normalize(10),
    resizeMode: 'cover',
  },
  category: {
    // paddingHorizontal:normalize(10),
    fontSize: normalize(16),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: normalize(72),
    height: normalize(20),
    backgroundColor: COLORS.orange,
    borderRadius: normalize(5),
    margin: normalize(10),
    marginTop: normalize(22),
  },
  categoryText: {
    // paddingHorizontal:normalize(10),
    fontFamily: Fonts.Poppins_SemiBold,
    color: COLORS.white,
    fontSize: normalize(10),
    letterSpacing: normalize(0.5),
  },
  contentContainer: {
    margin: normalize(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: normalize(50),
    paddingBottom: normalize(15),
  },
  titleConatiner: {
    width: '70%',
  },
  titleText: {
    fontFamily: Fonts.Poppins_SemiBold,
    fontSize: normalize(14),
    letterSpacing: normalize(0.5),
  },
  timeText:{
    fontFamily:Fonts.Poppins_Regular,
   fontSize:normalize(12),
   color:COLORS.lightBack,
  }
});
