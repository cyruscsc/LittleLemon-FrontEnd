import logo from '../assets/images/logo.png'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons'

const Header = ({ toMenu, toProfile }) => {
  return (
    <View style={styles.header}>
      {toMenu && (
        <Pressable onPress={toMenu} style={{ marginRight: 'auto' }}>
          <Feather name='menu' size={24} color='black' />
        </Pressable>
      )}
      <Image source={logo} height={40} width={185} style={styles.logo} />
      {toProfile && (
        <Pressable onPress={toProfile} style={{ marginLeft: 'auto' }}>
          <Feather name='user' size={24} color='black' />
        </Pressable>
      )}
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    width: '100%',
  },
  logo: {
    position: 'absolute',
    height: 40,
    width: 185,
    resizeMode: 'contain',
  },
})
