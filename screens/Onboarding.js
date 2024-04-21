import { StyleSheet, Text, View } from 'react-native'
import { useEffect, useState } from 'react'
import { KeyboardFriendly } from '../layouts'
import { Button, Header, Input } from '../components'
import { validateEmail } from '../utils'
import { getMultiple, storeMultiple } from '../utils/storage'

const Onboarding = ({ navigation }) => {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    fetchStorage()
    firstName && email && navigation.navigate('Home')
  }, [])

  const validEmail = validateEmail(email)

  const fetchStorage = async () => {
    const [rawFirstName, rawEmail] = await getMultiple(['firstName', 'email'])
    rawFirstName[1] && setFirstName(rawFirstName[1])
    rawEmail[1] && setEmail(rawEmail[1])
  }

  const onboard = async () => {
    await storeMultiple([
      ['firstName', firstName],
      ['email', email],
    ])
    navigation.navigate('Home')
  }

  return (
    <KeyboardFriendly>
      <Header />
      <View style={styles.content}>
        <Text style={styles.text}>Let us get to know you</Text>
        <View style={styles.form}>
          <Input
            label='First name'
            placeholder='Chris'
            value={firstName}
            onChangeText={setFirstName}
          />
          <Input
            label='Email'
            placeholder='chris@example.com'
            value={email}
            onChangeText={setEmail}
            keyboardType='email-address'
            autoCapitalize='none'
          />
          <Button
            label='Next'
            onPress={onboard}
            disabled={!(firstName && email && validEmail)}
          />
        </View>
      </View>
    </KeyboardFriendly>
  )
}

export default Onboarding

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 16,
    paddingVertical: 64,
    gap: 64,
  },
  text: {
    fontFamily: 'Karla-Regular',
    fontSize: 32,
    textAlign: 'center',
    color: '#495E57',
  },
  form: {
    gap: 16,
  },
})
