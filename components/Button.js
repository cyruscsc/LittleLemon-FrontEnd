import { Pressable, StyleSheet, Text } from 'react-native'

const Button = ({ label, onPress, disabled }) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        { opacity: disabled ? 0.5 : pressed ? 0.8 : 1 },
        styles.button,
      ]}
    >
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#495E57',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  label: {
    fontFamily: 'Karla-Regular',
    fontSize: 24,
    textAlign: 'center',
    color: '#FFFFFF',
  },
})
