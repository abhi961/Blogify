import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LattestJob = () => {
    return (
        <View style={styles.container}>
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