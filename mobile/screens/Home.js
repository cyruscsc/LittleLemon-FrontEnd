import { StyleSheet } from 'react-native'
import { KeyboardFriendly } from '../layouts'
import { Header, Hero, Menu } from '../components'

const Home = ({ navigation }) => {
  return (
    <KeyboardFriendly>
      <Header toProfile={() => navigation.navigate('Profile')} />
      <Hero />
      <Menu />
    </KeyboardFriendly>
  )
}

export default Home

const styles = StyleSheet.create({})
