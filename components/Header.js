import logo from '../assets/images/logo.png'
import { Image, StyleSheet, Text, View } from 'react-native'

const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={logo} height={40} width={185} style={styles.logo} />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    padding: 16,
    width: '100%',
  },
  logo: {
    height: 40,
    width: 185,
    resizeMode: 'contain',
  },
})
