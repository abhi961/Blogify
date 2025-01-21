import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList
} from 'react-native';
import {IMAGES} from '../theme/images';
import {normalize} from '../utlities/helpers/normalize';
import {COLORS} from '../theme/color';

import SnapCarousel from '../Components/Snapcarousel';


const Home = () => {
  
  // const carouselRef = useRef(null);
 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerConatiner}>
        <TouchableOpacity>
          <Image source={IMAGES.profile} style={styles.profileImg} />
        </TouchableOpacity>
        <Image source={IMAGES.logo} style={styles.logoContainer} />
        <TouchableOpacity>
          <Image source={IMAGES.notification} style={styles.notify} />
        </TouchableOpacity>
      </View>
        <FlatList
        horizontal
          data={[1, 2, 3, 4, 5]}
          keyExtractor={(item) => item.toString()}
          renderItem={({item}) => (
            <View>
              <Text>{item}</Text>
            </View>
          )}
         />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
    padding: normalize(15),
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
});

export default Home;
