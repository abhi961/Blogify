import { StyleSheet, Text, View,Image, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import { IMAGES } from '../theme/images'
import { normalize } from '../utlities/helpers/normalize'
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../theme/color';

const Splash = () => {
    const navigation = useNavigation()
   useEffect(()=>{
    setTimeout(()=>{
        navigation.navigate('TabNav')
       },2000)
   },[])
  return (
    <SafeAreaView style={styles.container}>
    <StatusBar barStyle="default" backgroundColor={COLORS.orange} />
      <Image source={IMAGES.logoWhite}  style={styles.imgBox}/>
    </SafeAreaView>
  )
}

export default Splash

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.orange,
        justifyContent:'center',
        alignItems:'center'
    },
    imgBox:{
        resizeMode:'contain',
        width:normalize(120)
    }
})