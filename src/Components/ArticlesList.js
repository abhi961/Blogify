import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ArticleCards from './ArticleCards'

const ArticlesList = ({item}) => {
  return (
     <FlatList
     
       data={item}
       renderItem={({item}) => (
         <ArticleCards item={item} />
       )}
     />
  )
}

export default ArticlesList

const styles = StyleSheet.create({})