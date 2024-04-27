import { StyleSheet, Text, View } from 'react-native'

const Separator = () => {
  return <View style={styles.separator} />
}

export default Separator

const styles = StyleSheet.create({
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#EDEFEE',
    marginVertical: 8,
  },
})
