import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home, Onboarding, Profile } from '../screens'
import { useEffect, useState } from 'react'
import { getMultiple } from '../utils/storage'

const Stack = createNativeStackNavigator()

const RootNavigator = () => {
  const [isOnboarded, setIsOnboarded] = useState(false)

  useEffect(() => {
    fetchUser()
  }, [])

  const fetchUser = async () => {
    const [rawFirstName, rawEmail] = await getMultiple(['firstName', 'email'])
    rawFirstName[1] && rawEmail[1] && setIsOnboarded(true)
  }

  return (
    <Stack.Navigator
      initialRouteName='Onboarding'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name='Onboarding' component={Onboarding} />
      {isOnboarded && <Stack.Screen name='Home' component={Home} />}
      {isOnboarded && <Stack.Screen name='Profile' component={Profile} />}
    </Stack.Navigator>
  )
}

export default RootNavigator
