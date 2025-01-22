import { StyleSheet, Text, View,LogBox } from 'react-native'
import React from 'react'
import Splash from './src/Screens/Splash'
import StackNav from './src/Navigation/StackNav/Stack'
import { DarkModeProvider } from './src/Components/DarkModeProvider'

const App = () => {
  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  return (
     <DarkModeProvider>
      <StackNav />
     </DarkModeProvider>
     

  )
}

export default App

const styles = StyleSheet.create({})