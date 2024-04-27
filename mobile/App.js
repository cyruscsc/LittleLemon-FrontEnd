import { SafeAreaView, StyleSheet, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import { NavigationContainer } from '@react-navigation/native'
import { RootNavigator } from './navigators'

export default function App() {
  const [fontsLoaded] = useFonts({
    'MarkaziText-Regular': require('./assets/fonts/MarkaziText-Regular.ttf'),
    'Karla-Regular': require('./assets/fonts/Karla-Regular.ttf'),
  })

  if (!fontsLoaded) {
    return (
      <SafeAreaView style={styles.loading}>
        <Text>Preparing menu...</Text>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <StatusBar style='auto' />
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
})
