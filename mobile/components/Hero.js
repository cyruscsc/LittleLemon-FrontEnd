import heroImg from '../assets/images/hero-image.png'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'

const Hero = () => {
  return (
    <View>
      <ImageBackground source={heroImg} style={styles.image}>
        <View style={styles.overlay}>
          <Text style={styles.title}>Little Lemon</Text>
          <Text style={styles.subtitle}>Chicago</Text>
          <Text style={styles.text}>
            A family-owned Mediterranean restaurant, focused on traditional
            recipes served with a modern twist.
          </Text>
        </View>
      </ImageBackground>
    </View>
  )
}

export default Hero

const styles = StyleSheet.create({
  overlay: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#495E57',
    opacity: 0.9,
  },
  title: {
    fontFamily: 'MarkaziText-Regular',
    fontSize: 64,
    color: '#F4CE14',
  },
  subtitle: {
    fontFamily: 'MarkaziText-Regular',
    fontSize: 48,
    color: '#EDEFEE',
  },
  text: {
    fontFamily: 'Karla-Regular',
    fontSize: 20,
    color: '#EDEFEE',
    paddingVertical: 16,
  },
  image: {
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 12,
  },
})
