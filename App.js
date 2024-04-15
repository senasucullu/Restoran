import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from './src/SearchScreen';
import ResultsShowScreen from './src/ResultsShowScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  
      screenOptions={{headerTitle:"Restaurant App" ,
    headerTitleAlign:"center",
    headerTitleStyle:{
      fontSize:25,
      color:"#f96d00",
    }
  }}
      >
        <Stack.Screen name="Home" component={SearchScreen} />
        <Stack.Screen name="ResultsShow" component={ResultsShowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
