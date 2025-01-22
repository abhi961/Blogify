import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';
import {IMAGES} from '../theme/images';
import {normalize} from '../utlities/helpers/normalize';
import {COLORS} from '../theme/color';
import {useDarkMode} from '../Components/DarkModeProvider';
import SnapCarousel from '../Components/Snapcarousel';
import {Fonts} from '../theme/fonts';

const Home = () => {
  const isDarkMode = useDarkMode();
  const [entities, setentities] = useState([
    {
      title: 'Beautiful and dramatic Antelope Canyon',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      illustration: 'https://i.imgur.com/UYiroysl.jpg',
      category: 'science',
      time: '2h ago',
    },
    {
      title: 'Earlier this morning, NYC',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
      category: 'Health',
      time: '2h ago',
    },
    {
      title: 'White Pocket Sunset',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
      illustration: 'https://i.imgur.com/MABUbpDl.jpg',
      category: 'LifeStyle',
      time: '2h ago',
    },
    {
      title: 'Acrocorinth, Greece',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
      category: 'Technology',
      time: '2h ago',
    },
    {
      title: 'The lone tree, majestic landscape of New Zealand dvsdvsdv',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://i.imgur.com/MABUbpDl.jpg',
      category: 'Entertainment',
      time: '2h ago',
    },
  ]);

  // const carouselRef = useRef(null);

  return (
    <SafeAreaView
      style={[
        styles.container,
        {backgroundColor: isDarkMode ? COLORS.black : COLORS.lightWhite},
      ]}>
      <View style={styles.headerConatiner}>
        <TouchableOpacity>
          <Image source={IMAGES.profile} style={styles.profileImg} />
        </TouchableOpacity>
        <Image
          source={IMAGES.logo}
          style={[
            styles.logoContainer,
            {tintColor: isDarkMode ? COLORS.white : COLORS.orange},
          ]}
        />
        <TouchableOpacity>
          <Image
            source={IMAGES.notification}
            style={[
              styles.notify,
              {tintColor: isDarkMode ? COLORS.white : COLORS.lightBack},
            ]}
          />
        </TouchableOpacity>
      </View>
      <View
        style={[
          styles.innerColor,
          {
            backgroundColor: isDarkMode
              ? COLORS.darmodeBlack
              : COLORS.lightOrange,
          },
        ]}>
        <FlatList
          contentContainerStyle={{paddingHorizontal: normalize(10)}}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={entities}
          keyExtractor={item => item.toString()}
          renderItem={({item, index}) => (
            <SnapCarousel item={item} index={index} />
          )}
        />
      </View>
      <Text style={styles.lablesText}>Labels</Text>
      <View style={styles.underLine} />
      <View style={styles.LabelsConatiner}>
        <TouchableOpacity>
          <Text style={styles.CatText}>Science</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.CatText}>Health</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.CatText}>LifeStyle</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.CatText}>LifeStyle</Text>
        </TouchableOpacity>
        {/* <Text style={styles.lablesText}>Entertainment</Text>
        <Text style={styles.lablesText}>Business</Text> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
    padding: normalize(15),
    height: normalize(500),
    // marginBottom:normalize(20)
  },
  headerConatiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileImg: {
    width: normalize(30),
    height: normalize(30),
    resizeMode: 'contain',
    borderRadius: normalize(60),
  },
  logoContainer: {
    resizeMode: 'contain',
    width: normalize(26),
    height: normalize(26),
    tintColor: COLORS.orange,
  },
  notify: {
    resizeMode: 'contain',
    width: normalize(26),
    height: normalize(26),
  },
  innerColor: {
    backgroundColor: COLORS.lightOrange,
    marginTop: normalize(10),
    height: normalize(325),
    width: '100%',
  },
  lablesText: {
    fontSize: normalize(16),
    fontFamily: Fonts.Poppins_bold,
    marginTop: normalize(10),
    letterSpacing: normalize(0.5),
    color: COLORS.orange,
  },
  underLine: {
    height: normalize(2),
    width: normalize(45),
    backgroundColor: COLORS.orange,
    marginTop: normalize(2),
  },
  LabelsConatiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: normalize(10),
  },
  CatText: {
    fontSize: normalize(14),
    fontFamily: Fonts.Poppins_SemiBold,
    color: COLORS.orange,
    letterSpacing: normalize(0.5),
    borderWidth: normalize(1),
    borderColor: COLORS.orange,
    paddingHorizontal: normalize(15),
    paddingTop: normalize(5),
    paddingVertical: normalize(5),
    borderRadius: normalize(6),
  },
});

export default Home;
