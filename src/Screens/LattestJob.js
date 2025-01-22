import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDarkMode } from '../Components/DarkModeProvider';
import { COLORS } from '../theme/color';

const LattestJob = () => {
    const isDarkMode = useDarkMode();
    return (
        <View style={[styles.container,{backgroundColor:isDarkMode?COLORS.black:COLORS.lightWhite}]}>
            <Text style={styles.title}>Latest Job</Text>
            {/* Add your job listing components here */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default LattestJob;