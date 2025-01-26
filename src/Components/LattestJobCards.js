import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { normalize } from '../utlities/helpers/normalize'
import { COLORS } from '../theme/color'
import { Fonts } from '../theme/fonts'
import { useDarkMode } from './DarkModeProvider'
import { useNavigation } from '@react-navigation/native'

const LattestJobCards = ({item}) => {
    const navigation = useNavigation()
    const isDarkMode = useDarkMode();
    const {title, date} = item
    console.log(item)
  return (
    <TouchableOpacity 
     onPress={()=> navigation.navigate('LobDetails', {data: item})}
    style={[styles.container,{ borderColor:isDarkMode ? COLORS.lightBack:COLORS.lightWhite}]}>
      <Text style={[styles.titleText, {color: isDarkMode ? COLORS.white : COLORS.lightBack}]} >{title}</Text>
      <Text style={[styles.dateText, {color: isDarkMode ? COLORS.white : COLORS.lightBack}]} >Last Date: {date}</Text>
    </TouchableOpacity>
  )
}

export default LattestJobCards

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: normalize(10),
        borderColor:COLORS.lightWhite,
        borderWidth:normalize(1),
        borderRadius:normalize(8),
        marginBottom:normalize(16),
      
    },
    titleText:{
        fontSize:normalize(13),
        fontFamily:Fonts.Poppins_Medium,
        color:COLORS.black
    },
    dateText:{
        fontSize:normalize(12),
        fontFamily:Fonts.Poppins_Medium,
        color:COLORS.lightBack,
        marginTop:normalize(5)
    }
})