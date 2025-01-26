import { FlatList, StyleSheet } from 'react-native'
import React from 'react'
import LattestJobCards from './LattestJobCards'

const LattestJobList = ({item}) => {
  return (
   <FlatList 

   showsVerticalScrollIndicator={false}
   data={item}
   keyExtractor={(item, index) => `${item.title}-${index}`}
   renderItem={({ item }) => <LattestJobCards item={item} />}
   />
  )
}

export default LattestJobList

const styles = StyleSheet.create({})