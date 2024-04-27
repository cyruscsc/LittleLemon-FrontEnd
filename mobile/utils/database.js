import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('little_lemon')

export const createTable = async () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `create table if not exists menuitems (id integer primary key not null, name text not null, description text not null, price text not null, category text not null)`,
        [],
        (_, { rows }) => resolve(rows._array),
        (_, error) => reject(error)
      )
    })
  })
}

export const getMenuItems = async () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'select * from menuitems',
        [],
        (_, { rows }) => resolve(rows._array),
        (_, error) => reject(error)
      )
    })
  })
}

export const insertMenuItems = async (menuItems) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      menuItems.forEach((item) => {
        tx.executeSql(
          `insert into menuitems (name, description, price, category) values (?, ?, ?, ?)`,
          [item.name, item.description, item.price, item.category],
          (_, { rows }) => resolve(rows._array),
          (_, error) => reject(error)
        )
      })
    })
  })
}

export const filterMenuItems = async (query, categories) => {
  return new Promise((resolve, reject) => {
    if (!categories.length) {
      db.transaction((tx) => {
        tx.executeSql(
          `select * from menuitems where name like ?`,
          [`%${query}%`],
          (_, { rows }) => resolve(rows._array),
          (_, error) => reject(error)
        )
      })
    } else {
      db.transaction((tx) => {
        tx.executeSql(
          'select * from menuitems where name like ? and category in (?, ?, ?, ?)',
          [`%${query}%`, ...categories],
          (_, { rows }) => resolve(rows._array),
          (_, error) => reject(error)
        )
      })
    }
  })
}
