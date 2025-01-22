import React, {useState} from 'react';
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

const Search = () => {
  const isDarkMode = useDarkMode();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = text => {
    setQuery(text);
    // Implement your search logic here and update the results state
    // setResults(filteredResults);
  };

  return (
    <SafeAreaView
      style={[
        styles.container,
        {backgroundColor: isDarkMode ? COLORS.black : COLORS.white},
      ]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.container}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            value={query}
            onChangeText={handleSearch}
          />
          <FlatList
            data={results}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <View style={styles.resultItem}>
                <Text>{item.title}</Text>
              </View>
            )}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  resultItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default Search;
