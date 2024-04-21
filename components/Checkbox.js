import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Checkbox = ({ label, isChecked, onPress }) => {
  return (
    <View style={styles.container}>
      <BouncyCheckbox
        isChecked={isChecked}
        onPress={onPress}
        fillColor='#495E57'
        disableText
      />
      <Text style={styles.label}>{label}</Text>
    </View>
  )
}

export default Checkbox

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  label: {
    fontFamily: 'Karla-Regular',
    fontSize: 20,
    color: '#495E57',
    paddingHorizontal: 4,
  },
})
