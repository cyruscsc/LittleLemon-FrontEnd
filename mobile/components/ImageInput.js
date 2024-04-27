import jd from '../assets/images/jd.png'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const ImageInput = ({ label, image, onPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Image source={image ? { uri: image } : jd} style={styles.image} />
      </TouchableOpacity>
    </View>
  )
}

export default ImageInput

const styles = StyleSheet.create({
  container: {
    gap: 2,
  },
  label: {
    fontFamily: 'Karla-Regular',
    fontSize: 16,
    color: '#495E57',
    paddingHorizontal: 4,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 64,
    height: 64,
    borderRadius: 50,
    backgroundColor: '#F4CE14',
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 50,
    resizeMode: 'cover',
  },
})
