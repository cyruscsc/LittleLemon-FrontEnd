import { Pressable, StyleSheet, Text } from 'react-native'

const CategoryButton = ({ label, onPress, selected }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        { opacity: pressed ? 0.8 : 1 },
        selected ? styles.buttonSelected : styles.buttonDefault,
      ]}
    >
      <Text style={selected ? styles.labelSelected : styles.labelDefault}>
        {label}
      </Text>
    </Pressable>
  )
}

export default CategoryButton

const styles = StyleSheet.create({
  buttonDefault: {
    padding: 8,
    borderRadius: 12,
    backgroundColor: '#EDEFEE',
  },
  buttonSelected: {
    padding: 8,
    borderRadius: 12,
    backgroundColor: '#495E57',
  },
  labelDefault: {
    fontFamily: 'Karla-Regular',
    fontSize: 20,
    color: '#495E57',
  },
  labelSelected: {
    fontFamily: 'Karla-Regular',
    fontSize: 20,
    color: '#EDEFEE',
  },
})
