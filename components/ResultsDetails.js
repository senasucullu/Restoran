import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

export default function ResultsDetails({result}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} 
      source={result.image_url ? { uri:result.image_url }:null}/>
      <Text style={styles.name}>{result.name}</Text>
      <Text>{result.rating} Star Restaurant | {result.review_count} Review</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    marginLeft:15,
  },
  image:{
    width:220,
    height:120,
    borderRadius:10,
    marginBottom:5,
  },
  name:{
    fontWeight:"bold"
  }
})