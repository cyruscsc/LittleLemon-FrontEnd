import { Pressable, StyleSheet, Text } from 'react-native'

const Button = ({ label, onPress, disabled, color, bgColor, borderColor }) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        { opacity: disabled ? 0.5 : pressed ? 0.8 : 1 },
        { backgroundColor: bgColor || '#495E57' },
        { borderWidth: borderColor ? 1 : 0 },
        { borderColor: borderColor || '#495E57' },
        styles.buttonBase,
      ]}
    >
      <Text style={[{ color: color || '#FFFFFF' }, styles.label]}>{label}</Text>
    </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({
  buttonBase: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  label: {
    fontFamily: 'Karla-Regular',
    fontSize: 20,
    textAlign: 'center',
  },
})
