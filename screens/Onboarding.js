import { StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'
import { KeyboardFriendly } from '../layouts'
import { Button, Header, Input } from '../components'
import { validateEmail } from '../utils'

const Onboarding = ({ navigation }) => {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')

  const validEmail = validateEmail(email)

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
            onPress={() => navigation.navigate('Profile')}
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
