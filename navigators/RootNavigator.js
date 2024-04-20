import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Onboarding, Profile } from '../screens'

const Stack = createNativeStackNavigator()

const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='Onboarding'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name='Onboarding' component={Onboarding} />
      <Stack.Screen name='Profile' component={Profile} />
    </Stack.Navigator>
  )
}

export default RootNavigator
