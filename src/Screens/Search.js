import React, { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  FlatList,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  SafeAreaView,
} from 'react-native';
import { useDarkMode } from '../Components/DarkModeProvider';
import { COLORS } from '../theme/color';
import SearchList from '../Components/SearchList';
import { normalize } from '../utlities/helpers/normalize';
import { useIsFocused } from '@react-navigation/native';
import { Fonts } from '../theme/fonts';
import Data from '../theme/Data'
import Header from '../Components/Header';


const Search = () => {
  const isFocused = useIsFocused();
  const isDarkMode = useDarkMode();
  const [query, setQuery] = useState('');

  const [masterDataSource, setMasterDataSource] = useState(Data);
  const [filteredResults, setFilteredResults] = useState(Data);
  const [isSeach, setIsSearch] = useState(false);

  const searchFilterFunction = text => {
    if (text) {
      const newData = masterDataSource?.filter(function (item) {
        const itemTitle = item?.title?.toUpperCase() || '';
        const itemCategory = item?.category?.toUpperCase() || '';
        const textData = text.toUpperCase();
        return itemTitle.includes(textData) || itemCategory.includes(textData);
      });
      setFilteredResults(newData);
      setQuery(text);
    } else {
      setFilteredResults(masterDataSource);
      setQuery(text);
    }
  };

  useEffect(() => {
    setIsSearch(true);

    // setFilteredResults(results)
    setMasterDataSource(Data);
  }, [isFocused]);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Header mainTitle={'Search'} saveIcon={true} />
      <SafeAreaView
        style={[
          styles.container,
          { backgroundColor: isDarkMode ? COLORS.black : COLORS.white },
        ]}>
        <View style={styles.container}>
          <TextInput
            style={[styles.searchInput, { color: isDarkMode ? COLORS.white : COLORS.lightBack }]}
            placeholder="Search..."
            value={query}
            onChangeText={searchFilterFunction}
          />
          {filteredResults?.length > 0 ? (
            <FlatList
              showsVerticalScrollIndicator={false}
              // numColumns={2}
              data={filteredResults}
              keyExtractor={(item, index) => `${item.title}-${index}`}
              renderItem={({ item, index }) => (
                <SearchList item={item} index={index} />
              )}
            />
          ) : (
            <Text style={styles.noDataText}>No Data Found</Text>
          )}
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: normalize(10),
    paddingTop: normalize(10),
    // padding: 16,
  },
  searchInput: {
    height: normalize(40),
    borderColor: COLORS.lightBack,
    borderWidth: normalize(1),
    borderRadius: normalize(8),
    paddingHorizontal: normalize(8),
    marginBottom: normalize(16),
    color: COLORS.lightBack,
    fontFamily: Fonts.Poppins_SemiBold,
    fontSize: normalize(12),
  },
  resultItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  noDataText: {
    fontSize: normalize(14),
    color: COLORS.lightBack,
    textAlign: 'center',
    fontFamily: Fonts.Poppins_Medium,
    marginTop: normalize(50),

  }
});

export default Search;
