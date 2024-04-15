import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchBar from '../components/SearchBar'
import useResult from '../hooks/useResult'
import ResultsList from '../components/ResultsList'
export default function SearchScreen() {
  const [searchApi,results] = useResult();
  const filterResultsPrice = (price)=>{
    return results.filter((results)=>{
      return results.price === price
    })
  }
  return (
    <View>
      <SearchBar />
      <ResultsList title = "Cheap Restaurants" results={filterResultsPrice("₺")}/>
      <ResultsList title = "Affordable Restaurant" results={filterResultsPrice("₺₺")}/>
      <ResultsList title = "Expensive Restaurant" results={filterResultsPrice("₺₺₺")}/>
    </View>
  )
}

const styles = StyleSheet.create({})