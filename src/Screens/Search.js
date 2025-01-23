import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  FlatList,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  SafeAreaView,
} from 'react-native';
import {useDarkMode} from '../Components/DarkModeProvider';
import {COLORS} from '../theme/color';
import SearchList from '../Components/SearchList';
import {normalize} from '../utlities/helpers/normalize';
import { useIsFocused } from '@react-navigation/native';
import {Fonts} from '../theme/fonts';


const Search = () => {
  const isFocused = useIsFocused();
  const isDarkMode = useDarkMode();
  const [query, setQuery] = useState('');
  const [masterDataSource, setMasterDataSource] = useState(results);
  const [filteredResults, setFilteredResults] = useState(masterDataSource);
  const [isSeach, setIsSearch] = useState(false);

  const [results, setResults] = useState([
    {
      title: 'Beautiful and dramatic Antelope Canyon',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      illustration: 'https://i.imgur.com/UYiroysl.jpg',
      category: 'science',
      time: '2h ago',
      date: '10 January',
    },
    {
      title: 'Earlier this morning, NYC',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
      category: 'Health',
      time: '2h ago',
      date: '12 January',
    },
    {
      title: 'White Pocket Sunset',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
      illustration: 'https://i.imgur.com/MABUbpDl.jpg',
      category: 'LifeStyle',
      time: '2h ago',
      date: '15 January',
    },
    {
      title: 'Acrocorinth, Greece',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
      category: 'Technology',
      time: '2h ago',
      date: '18 january',
    },
    {
      title: 'The lone tree, majestic landscape of New Zealand',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://i.imgur.com/MABUbpDl.jpg',
      category: 'Entertainment',
      time: '2h ago',
      date: '20 january',
    },

    {
      title: 'The lone tree, majestic landscape of New Zealand',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://i.imgur.com/MABUbpDl.jpg',
      category: 'Entertainment',
      time: '2h ago',
      date: '20 january',
    },
  ]);

  const searchFilterFunction = text => {
    if (text) {
      const newData = masterDataSource?.filter(function (item) {
        const itemData =
          item?.title || item?.category
            ? item?.title.toUpperCase()
            : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
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
    setMasterDataSource(results);
  }, [isFocused]);

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <SafeAreaView
        style={[
          styles.container,
          {backgroundColor: isDarkMode ? COLORS.black : COLORS.white},
        ]}>
        <View style={styles.container}>
          <TextInput
            style={[styles.searchInput,{color:isDarkMode?COLORS.white:COLORS.lightBack}]}
            placeholder="Search..."
            value={query}
            onChangeText={searchFilterFunction}
          />
          {filteredResults?.length > 0 ? (
            <FlatList
              showsVerticalScrollIndicator={false}
              // numColumns={2}
              data={filteredResults}
              keyExtractor={item => item.toString()}
              renderItem={({item, index}) => (
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
    height:normalize(40),
    borderColor:COLORS.lightBack,
    borderWidth: normalize(1),
    borderRadius: normalize(8),
    paddingHorizontal: normalize(8),
    marginBottom: normalize(16),
    color:COLORS.lightBack,
    fontFamily:Fonts.Poppins_SemiBold,
    fontSize:normalize(12),
  },
  resultItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  noDataText:{
    fontSize:normalize(14),
    color:COLORS.lightBack ,
    textAlign:'center',
    fontFamily:Fonts.Poppins_Medium,
    marginTop:normalize(50),

  }
});

export default Search;
