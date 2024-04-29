import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';


export default function SearchBar({onTermChange,onTermSubmit,term}) {
  return (
    <View style={styles.main} >
      <AntDesign style={styles.icon} name="search1" size={24} color="black" />
      <TextInput 
      autoCapitalize='none'
      autoCorrect={false}
      style={styles.input}
      value={term}
      onChangeText={onTermChange}
      onEndEditing={onTermSubmit}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  main:{
    margin:10,
    flexDirection:"row",
    backgroundColor:"lightgrey",
    alignItems:"center",
    height:50,
    borderRadius:25,
  },
  icon:{
    fontSize:25,
    marginHorizontal:15,
  },
  input:{
    flex:1
  }
})