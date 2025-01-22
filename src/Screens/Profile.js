import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDarkMode } from '../Components/DarkModeProvider';
import { COLORS } from '../theme/color';

const Profile = () => {
    const isDarkMode = useDarkMode();
    return (
        <View style={[styles.container, { backgroundColor: isDarkMode ? COLORS.black : COLORS.lightWhite }]}>
            <Text style={styles.text}>Profile Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default Profile;