import Separator from './Separator'
import MenuItem from './MenuItem'
import CategoryButton from './CategoryButton'
import { Alert, FlatList, StyleSheet, TextInput, View } from 'react-native'
import { useCallback, useEffect, useState } from 'react'
import {
  createTable,
  filterMenuItems,
  getMenuItems,
  insertMenuItems,
} from '../utils/database'

const endpoint =
  'https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/capstone.json'

const Menu = () => {
  const [menu, setMenu] = useState([])
  const [query, setQuery] = useState('')
  const [categories, setCategories] = useState([])

  useEffect(() => {
    ;(async () => {
      let menuItems = await fetchMenuFromDB()
      if (!menuItems.length) {
        menuItems = await fetchMenuFromApi()
        await insertMenuItems(menuItems)
      }
      setMenu(menuItems)
    })()
  }, [])

  useEffect(() => {
    filterMenu(query, categories)
  }, [query, categories])

  const debounce = (func, delay = 500) => {
    let timeout
    return (...args) => {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        func(...args)
      }, delay)
    }
  }

  const filterMenu = useCallback(
    debounce(async (query, categories) => {
      const data = await filterMenuItems(query, categories)
      setMenu(data)
    }),
    []
  )

  const fetchMenuFromDB = async () => {
    try {
      await createTable()
      const data = await getMenuItems()
      return data
    } catch (error) {
      Alert.alert(error.message)
    }
  }

  const fetchMenuFromApi = async () => {
    try {
      const response = await fetch(endpoint)
      const data = await response.json()
      return data.menu
    } catch (error) {
      console.error(error)
    }
  }

  const toggleCategory = (category) => {
    if (categories.includes(category)) {
      setCategories(categories.filter((c) => c !== category))
    } else {
      setCategories([...categories, category])
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.toolbar}>
        <View style={styles.categories}>
          <CategoryButton
            label='Starters'
            onPress={() => toggleCategory('starters')}
            selected={categories.includes('starters')}
          />
          <CategoryButton
            label='Mains'
            onPress={() => toggleCategory('mains')}
            selected={categories.includes('mains')}
          />
          <CategoryButton
            label='Desserts'
            onPress={() => toggleCategory('desserts')}
            selected={categories.includes('desserts')}
          />
          <CategoryButton
            label='Drinks'
            onPress={() => toggleCategory('drinks')}
            selected={categories.includes('drinks')}
          />
        </View>
        <View>
          <TextInput
            placeholder='Search'
            value={query}
            onChangeText={setQuery}
            style={styles.search}
          />
        </View>
      </View>
      <FlatList
        data={menu}
        renderItem={({ item }) => <MenuItem item={item} />}
        ItemSeparatorComponent={<Separator />}
        keyExtractor={(_, index) => index}
      />
    </View>
  )
}

export default Menu

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flex: 1,
  },
  toolbar: {
    paddingVertical: 8,
    gap: 8,
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  search: {
    fontFamily: 'Karla-Regular',
    fontSize: 20,
    borderColor: '#EDEFEE',
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
  },
})
