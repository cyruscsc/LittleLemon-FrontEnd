import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  TouchableNativeFeedback,
} from 'react-native'

const KeyboardFriendly = ({ children }) => {
  return (
    <SafeAreaView style={styles.layout}>
      <TouchableNativeFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.main}
        >
          {children}
        </KeyboardAvoidingView>
      </TouchableNativeFeedback>
    </SafeAreaView>
  )
}

export default KeyboardFriendly

const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
  main: {
    flex: 1,
  },
})
