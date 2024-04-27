import { StyleSheet, Text, TextInput, View } from 'react-native'

const Input = ({ label, placeholder, value, onChangeText, ...props }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        {...props}
        style={styles.input}
      />
    </View>
  )
}

export default Input

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
  input: {
    fontFamily: 'Karla-Regular',
    fontSize: 20,
    color: '#333333',
    borderColor: '#495E57',
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
  },
})
