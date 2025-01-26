import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useDarkMode } from '../Components/DarkModeProvider';
import { COLORS } from '../theme/color';
import Header from '../Components/Header';
import { normalize } from '../utlities/helpers/normalize';
import { jobData } from '../theme/Data';
import LattestJobList from '../Components/LattestJobList';

const LattestJob = ({}) => {
    const isDarkMode = useDarkMode();
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: isDarkMode ? COLORS.black : COLORS.white }]}>
            <Header mainTitle={'Latest Job'} saveIcon={true} />
            <View style={styles.contentContainer}>
                <LattestJobList item={jobData} />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        

    },
    contentContainer: {
        flex: 1,
       paddingHorizontal: normalize(16),
       
    },
});

export default LattestJob;