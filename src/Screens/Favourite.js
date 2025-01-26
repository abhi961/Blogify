import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { useDarkMode } from '../Components/DarkModeProvider';
import { COLORS } from '../theme/color';
import Header from '../Components/Header';
import FavouriteList from '../Components/FavouriteList';
import Data from '../theme/Data';
import { FlatList } from 'react-native';
import { normalize } from '../utlities/helpers/normalize';

const Favourite = () => {
  const isDarkMode = useDarkMode();

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? COLORS.black : COLORS.white },
      ]}>
      <Header mainTitle={'Favourite'} />
      <FlatList
        data={Data}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => `${item.title}-${index}`}
        renderItem={({ item, index }) => <FavouriteList item={item} index={index} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: COLORS.white,
  
  },
});

export default Favourite;
