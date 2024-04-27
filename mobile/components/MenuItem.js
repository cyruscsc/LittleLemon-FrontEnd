import { StyleSheet, Text, View } from 'react-native'

const MenuItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.price}>${item.price}</Text>
    </View>
  )
}

export default MenuItem

const styles = StyleSheet.create({
  container: {
    gap: 8,
    paddingVertical: 8,
  },
  name: {
    fontFamily: 'Karla-Regular',
    fontSize: 24,
    color: '#495E57',
  },
  description: {
    fontFamily: 'Karla-Regular',
    fontSize: 18,
    color: '#333333',
  },
  price: {
    fontFamily: 'Karla-Regular',
    fontSize: 18,
    color: '#333333',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    borderRadius: 12,
  },
})
