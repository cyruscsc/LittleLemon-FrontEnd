import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import { Onboarding } from './screens'
import { NavigationContainer } from '@react-navigation/native'
import { RootNavigator } from './navigators'

export default function App() {
  const [fontsLoaded] = useFonts({
    'MarkaziText-Regular': require('./assets/fonts/MarkaziText-Regular.ttf'),
    'Karla-Regular': require('./assets/fonts/Karla-Regular.ttf'),
  })

  return (
    <NavigationContainer>
      <StatusBar style='auto' />
      <RootNavigator />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
