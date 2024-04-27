import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
} from 'react-native'

const KeyboardFriendly = ({ children }) => {
  return (
    <SafeAreaView style={styles.layout}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.main}
      >
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default KeyboardFriendly

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  main: {
    flex: 1,
  },
})
