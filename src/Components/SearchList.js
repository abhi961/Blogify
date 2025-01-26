import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { normalize } from '../utlities/helpers/normalize'
import { COLORS } from '../theme/color'
import { Fonts } from '../theme/fonts'
import { useDarkMode } from '../Components/DarkModeProvider';
import { useNavigation } from '@react-navigation/native';

const SearchList = ({ item }) => {
    const navigation = useNavigation();
    const isDarkMode = useDarkMode();
    const { title, subtitle, illustration, category, time, date } = item
    return (
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.navigate('Details', { data: item })}
            style={[styles.container, { borderColor: isDarkMode ? COLORS.lightBack : COLORS.lightWhite }]}>
            <Image source={{ uri: illustration }} style={styles.articleImg} />
            <View style={styles.flextLeft}>
                <Text style={[styles.categoryText, {
                    color: isDarkMode ? COLORS.black : COLORS.lightWhite,
                    backgroundColor: isDarkMode ? COLORS.lightWhite : COLORS.black,
                }]}>{category}</Text>
                <Text style={[styles.titleText, { color: isDarkMode ? COLORS.white : COLORS.lightBack, }]}>{title}</Text>
                <Text style={[styles.date, { color: isDarkMode ? COLORS.white : COLORS.lightBack, }]}>{date}</Text>
            </View>


        </TouchableOpacity>
    )
}

export default SearchList

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: normalize(10),
        borderColor: COLORS.lightBack,
        borderWidth: normalize(1),
        borderRadius: normalize(8),
        marginBottom: normalize(16),

    },
    articleImg: {
        width: normalize(100),
        height: normalize(100),
        borderRadius: normalize(8)
    },
    categoryText: {
        fontSize: normalize(12),
        fontFamily: Fonts.Poppins_Medium,
        paddingHorizontal: normalize(8),
        paddingVertical: normalize(2),
        borderRadius: normalize(4),
        alignSelf: 'flex-start',
    },
    flextLeft: {
        marginLeft: normalize(10)
    },
    titleText: {
        fontFamily: Fonts.Poppins_bold,
        fontSize: normalize(13),
        letterSpacing: 0.5,
        color: COLORS.black,
        width: normalize(200),
        marginTop: normalize(12),
    },
    date: {
        fontFamily: Fonts.Poppins_Regular,
        fontSize: normalize(11),
        letterSpacing: 0.5,
        color: COLORS.lightBack,
    }

})