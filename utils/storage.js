import AsyncStorage from '@react-native-async-storage/async-storage'

export const getKeys = async () => {
  try {
    return await AsyncStorage.getAllKeys()
  } catch (e) {
    console.error(e)
  }
}

export const getSingle = async (key) => {
  try {
    return await AsyncStorage.getItem(key)
  } catch (e) {
    console.error(e)
  }
}

export const getMultiple = async (keys) => {
  try {
    return await AsyncStorage.multiGet(keys)
  } catch (e) {
    console.error(e)
  }
}

export const storeSingle = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (e) {
    console.error(e)
  }
}

export const storeMultiple = async (keyValuePairs) => {
  try {
    await AsyncStorage.multiSet(keyValuePairs)
  } catch (e) {
    console.error(e)
  }
}

export const clearStorage = async () => {
  try {
    await AsyncStorage.clear()
  } catch (e) {
    console.error(e)
  }
}
