import * as ImagePicker from 'expo-image-picker'
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Button, Checkbox, Header, ImageInput, Input } from '../components'
import { KeyboardFriendly } from '../layouts'
import { useEffect, useState } from 'react'
import { validateEmail, validatePhoneNumber } from '../utils'
import { clearStorage, getMultiple, storeMultiple } from '../utils/storage'

const defaultUserProfile = {
  avatar: '',
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
}

const defaultEmailNotifications = {
  orderStatuses: false,
  specialOffers: false,
  newsletter: false,
}

const Profile = ({ navigation }) => {
  const [userProfile, setUserProfile] = useState(defaultUserProfile)
  const [emailNotifications, setEmailNotifications] = useState(
    defaultEmailNotifications
  )

  useEffect(() => {
    fetchStorage()
  }, [])

  const validEmail = validateEmail(userProfile.email)

  const validPhoneNumber = validatePhoneNumber(userProfile.phoneNumber)

  const fetchStorage = async () => {
    const [
      rawAvatar,
      rawFirstName,
      rawLastName,
      rawEmail,
      rawPhoneNumber,
      rawEmailNotifications,
    ] = await getMultiple([
      'avatar',
      'firstName',
      'lastName',
      'email',
      'phoneNumber',
      'emailNotifications',
    ])
    const fetchedUserProfile = {
      avatar: rawAvatar[1] || '',
      firstName: rawFirstName[1] || '',
      lastName: rawLastName[1] || '',
      email: rawEmail[1] || '',
      phoneNumber: rawPhoneNumber[1] || '',
    }
    const fetchedEmailNotifications = JSON.parse(rawEmailNotifications[1])
    setUserProfile({ ...defaultUserProfile, ...fetchedUserProfile })
    setEmailNotifications({
      ...defaultEmailNotifications,
      ...fetchedEmailNotifications,
    })
  }

  const saveToStorage = async () => {
    await storeMultiple([
      ['avatar', userProfile.avatar],
      ['firstName', userProfile.firstName],
      ['lastName', userProfile.lastName],
      ['email', userProfile.email],
      ['phoneNumber', userProfile.phoneNumber],
      ['emailNotifications', JSON.stringify(emailNotifications)],
    ])
    Alert.alert('Success', 'Changes saved successfully!')
  }

  const logout = async () => {
    await clearStorage()
    setUserProfile(defaultUserProfile)
    setEmailNotifications(defaultEmailNotifications)
    navigation.navigate('Onboarding')
  }

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    })
    if (!result.canceled) {
      setUserProfile((prev) => ({ ...prev, avatar: result.assets[0].uri }))
    }
  }

  return (
    <KeyboardFriendly>
      <Header toMenu={() => navigation.navigate('Home')} />
      <ScrollView keyboardDismissMode='on-drag'>
        <View style={styles.form}>
          <Text style={styles.text}>Profile</Text>
          <ImageInput
            label='Avatar'
            image={userProfile.avatar}
            onPress={pickImage}
          />
          <Input
            label='First name'
            placeholder='Chris'
            value={userProfile.firstName}
            onChangeText={(text) => {
              setUserProfile((prev) => ({ ...prev, firstName: text }))
            }}
          />
          <Input
            label='Last name'
            placeholder='Doe'
            value={userProfile.lastName}
            onChangeText={(text) => {
              setUserProfile((prev) => ({ ...prev, lastName: text }))
            }}
          />
          <Input
            label='Email'
            placeholder='chris@example.com'
            value={userProfile.email}
            onChangeText={(text) => {
              setUserProfile((prev) => ({ ...prev, email: text }))
            }}
            keyboardType='email-address'
            autoCapitalize='none'
          />
          <Input
            label='Phone number'
            placeholder='(123) 456-7890'
            value={userProfile.phoneNumber}
            onChangeText={(text) => {
              setUserProfile((prev) => ({ ...prev, phoneNumber: text }))
            }}
            keyboardType='phone-pad'
          />
          <Text style={styles.text}>Email notifications</Text>
          <Checkbox
            label='Order statuses'
            isChecked={emailNotifications.orderStatuses}
            onPress={() => {
              setEmailNotifications((prev) => ({
                ...prev,
                orderStatuses: !prev.orderStatuses,
              }))
            }}
          />
          <Checkbox
            label='Special offers'
            isChecked={emailNotifications.specialOffers}
            onPress={() => {
              setEmailNotifications((prev) => ({
                ...prev,
                specialOffers: !prev.specialOffers,
              }))
            }}
          />
          <Checkbox
            label='Newsletter'
            isChecked={emailNotifications.newsletter}
            onPress={() => {
              setEmailNotifications((prev) => ({
                ...prev,
                newsletter: !prev.newsletter,
              }))
            }}
          />
          <Button
            label='Save changes'
            onPress={saveToStorage}
            disabled={
              !(
                userProfile.firstName &&
                userProfile.email &&
                validEmail &&
                (userProfile.phoneNumber ? validPhoneNumber : true)
              )
            }
          />
          <Button
            label='Discard changes'
            color='#495E57'
            bgColor='#FFFFFF'
            borderColor='#495E57'
            onPress={fetchStorage}
          />
          <Button
            label='Log out'
            color='#333333'
            bgColor='#F4CE14'
            onPress={logout}
          />
        </View>
      </ScrollView>
    </KeyboardFriendly>
  )
}

export default Profile

const styles = StyleSheet.create({
  form: {
    gap: 16,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  text: {
    fontFamily: 'Karla-Regular',
    fontSize: 32,
    textAlign: 'left',
    color: '#495E57',
  },
})
