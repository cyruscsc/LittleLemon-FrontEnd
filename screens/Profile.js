import { ScrollView, StyleSheet, Text } from 'react-native'
import { Header } from '../components'
import { KeyboardFriendly } from '../layouts'

const Profile = () => {
  return (
    <KeyboardFriendly>
      <Header />
      <ScrollView style={styles.content}>
        <Text style={styles.text}>Profile</Text>
      </ScrollView>
    </KeyboardFriendly>
  )
}

export default Profile

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  text: {
    fontFamily: 'Karla-Regular',
    fontSize: 32,
    textAlign: 'left',
    color: '#495E57',
  },
})
