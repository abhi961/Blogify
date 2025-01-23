import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Header from '../Components/Header';
import {normalize} from '../utlities/helpers/normalize';
import {COLORS} from '../theme/color';
import {Fonts} from '../theme/fonts';
import {CatIcon} from '../theme/images';
import {useDarkMode} from '../Components/DarkModeProvider';

const ArticleDetails = ({route}) => {
  const isDarkMode = useDarkMode();
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  console.log(route.params.data);
  const {category, date, illustration, title} = route.params.data;

  return (
    <>
      <Header />
      <SafeAreaView
        style={[
          styles.container,
          {backgroundColor: isDarkMode ? COLORS.black : COLORS.white},
        ]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image source={{uri: illustration}} style={styles.articleImg} />
          <View style={styles.contentContainer}>
            <Text
              style={[
                styles.dateText,
                {color: isDarkMode ? COLORS.white : COLORS.lightBack},
              ]}>
              {date}
            </Text>
            <Text
              style={[
                styles.titleText,
                {color: isDarkMode ? COLORS.white : COLORS.lightBack},
              ]}>
              {title}
            </Text>
            <View
              style={[
                styles.categoryBox,
                {backgroundColor: isDarkMode ? COLORS.orange : COLORS.black},
              ]}>
              <Text style={styles.categoryText}>{category}</Text>
            </View>
            <View style={styles.reactionConatiner}>
              <View style={styles.likeContainer}>
                <TouchableOpacity onPress={() => setLike(!like)}>
                  <Image
                    source={like === true ? CatIcon.Likes : CatIcon.fillLike}
                    style={[
                      styles.icons,
                      {
                        tintColor: isDarkMode
                          ? COLORS.white
                          : COLORS.lightWhite,
                      },
                    ]}
                  />
                </TouchableOpacity>
                <Text
                  style={[
                    styles.likeconts,
                    {color: isDarkMode ? COLORS.white : COLORS.lightWhite},
                  ]}>
                  100
                </Text>
              </View>
              <View style={styles.likeContainer}>
                <TouchableOpacity onPress={() => setDislike(!dislike)}>
                  <Image
                    source={
                      dislike === true ? CatIcon.DisLike : CatIcon.fillDisLike
                    }
                    style={[
                      styles.icons,
                      {
                        tintColor: isDarkMode
                          ? COLORS.white
                          : COLORS.lightWhite,
                      },
                    ]}
                  />
                </TouchableOpacity>
                <Text
                  style={[
                    styles.likeconts,
                    {color: isDarkMode ? COLORS.white : COLORS.lightWhite},
                  ]}>
                  100
                </Text>
              </View>
              <View style={styles.likeContainer}>
                <TouchableOpacity>
                  <Image
                    source={CatIcon.comment}
                    style={[
                      styles.icons,
                      {
                        tintColor: isDarkMode
                          ? COLORS.white
                          : COLORS.lightWhite,
                      },
                    ]}
                  />
                </TouchableOpacity>
                <Text
                  style={[
                    styles.likeconts,
                    {color: isDarkMode ? COLORS.white : COLORS.lightWhite},
                  ]}>
                  100
                </Text>
              </View>
            </View>
            <View style={styles.underline} />
            <Text
              style={[
                styles.paraText,
                {color: isDarkMode ? COLORS.white : COLORS.lightBack},
              ]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              ut quam tincidunt, hendrerit metus vel, ultrices diam. Suspendisse
              vehicula quam et nunc mattis, scelerisque condimentum eros
              fermentum. Proin ullamcorper maximus varius. Nam vitae elementum
              ante, vitae auctor neque. Nulla a mollis nunc. Nullam sodales sed
              lectus faucibus consequat. Nulla vitae pharetra quam, vestibulum
              ornare ipsum. Suspendisse varius purus et quam dapibus, a egestas
              leo tincidunt. Phasellus lobortis vel dui nec accumsan. Cras dolor
              lacus, ultrices non porta et, cursus vel nisl. In vel nunc
              tincidunt, pellentesque arcu vitae, blandit elit. Quisque ut
              egestas metus. Morbi tincidunt eget libero viverra venenatis. Nunc
              in diam mauris. Donec aliquet, libero vitae pretium tincidunt,
              ipsum nulla luctus risus, ac rutrum sem massa vel mauris. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut
              quam tincidunt, hendrerit metus vel, ultrices diam. Suspendisse
              vehicula quam et nunc mattis, scelerisque condimentum eros
              fermentum. Proin ullamcorper maximus varius. Nam vitae elementum
              ante, vitae auctor neque. Nulla a mollis nunc. Nullam sodales sed
              lectus faucibus consequat. Nulla vitae pharetra quam, vestibulum
              ornare ipsum. Suspendisse varius purus et quam dapibus, a egestas
              leo tincidunt. Phasellus lobortis vel dui nec accumsan. Cras dolor
              lacus, ultrices non porta et, cursus vel nisl. In vel nunc
              tincidunt, pellentesque arcu vitae, blandit elit. Quisque ut
              egestas metus. Morbi tincidunt eget libero viverra venenatis. Nunc
              in diam mauris. Donec aliquet, libero vitae pretium tincidunt,
              ipsum nulla luctus risus, ac rutrum sem massa vel mauris.
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: normalize(15),
  },

  articleImg: {
    // resizeMode:'cover',
    width: '100%',
    height: normalize(250),
    borderRadius: normalize(15),
  },
  contentContainer: {
    padding: normalize(15),
  },
  dateText: {
    color: COLORS.lightBack,
    fontFamily: Fonts.Poppins_SemiBold,
    fontSize: normalize(12),
    letterSpacing: 0.3,
  },
  titleText: {
    fontFamily: Fonts.Poppins_bold,
    color: COLORS.black,
    fontSize: normalize(18),
    letterSpacing: 0.5,
    marginTop: normalize(10),
  },
  categoryBox: {
    backgroundColor: COLORS.black,
    width: normalize(85),
    height: normalize(28),

    borderRadius: normalize(8),
    marginTop: normalize(10),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryText: {
    color: COLORS.white,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: normalize(11),
    letterSpacing: 0.5,
  },
  paraText: {
    color: COLORS.lightBack,
    fontFamily: Fonts.Poppins_Regular,
    fontSize: normalize(16),
    // textAlign:'justify',
    marginTop: normalize(20),
    letterSpacing: 0.5,
    paddingBottom: normalize(20),
  },
  icons: {
    resizeMode: 'contain',
    width: normalize(20),
    height: normalize(20),
  },
  reactionConatiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: normalize(15),
    marginBottom: normalize(12),
    backgroundColor: COLORS.darmodeBlack,
    paddingHorizontal: normalize(20),
    paddingBottom: normalize(10),
    borderRadius: normalize(20),
  },
  likeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: normalize(10),
  },
  underline: {
    height: normalize(2),
    width: '100%',
    backgroundColor: COLORS.divider,
    marginTop: normalize(12),
  },
  likeconts: {
    fontFamily: Fonts.Poppins_Medium,
    fontSize: normalize(13),
    marginLeft: normalize(3),
    color: COLORS.lightBack,
  },
});

export default ArticleDetails;
