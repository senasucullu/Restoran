import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import SearchBar from '../components/SearchBar'
import useResult from '../hooks/useResult'
import ResultsList from '../components/ResultsList'
export default function SearchScreen() {
  const [searchApi,results,errorMessage] = useResult();
  const [term, setTerm] = useState('')
  
  const filterResultsPrice = (price)=>{
    return results.filter((results)=>{
      return results.price === price
    })
  }
  return (
    <View>
      <SearchBar 
      term={term}
      onTermChange={setTerm} onTermSubmit={()=> searchApi(term)}/>
      {errorMessage ? <Text>{errorMessage}</Text> : <>{results.length == 0 ? (<></>) : (
      <>
      <ResultsList title = "Cheap Restaurants" results={filterResultsPrice("₺")}/>
      <ResultsList title = "Affordable Restaurant" results={filterResultsPrice("₺₺")}/>
      <ResultsList title = "Expensive Restaurant" results={filterResultsPrice("₺₺₺")}/>
      </>)}
      </>}
      
    </View>
  )
}

const styles = StyleSheet.create({})