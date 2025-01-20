import { StyleSheet, Text, View,Image, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import { IMAGES } from '../theme/images'
import { normalize } from '../utlities/helpers/normalize'
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
    const navigation = useNavigation()
   useEffect(()=>{
    setTimeout(()=>{
        navigation.navigate('TabNav')
       },2000)
   },[])
  return (
    <SafeAreaView style={styles.container}>
    <StatusBar barStyle="light-content" backgroundColor="#ff3300" />
      <Image source={IMAGES.logoWhite}  style={styles.imgBox}/>
    </SafeAreaView>
  )
}

export default Splash

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ff3300',
        justifyContent:'center',
        alignItems:'center'
    },
    imgBox:{
        resizeMode:'contain',
        width:normalize(120)
    }
})