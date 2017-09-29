import storage from '@storage'

const LOAD_ITEMS = 'LOAD_ITEMS'
const TRY_ADD_ITEM = 'TRY_ADD_ITEM'

export const actions = {
  LOAD_ITEMS,
  TRY_ADD_ITEM,
}

export const loadItems = () => {
  return async dispatch => {
    // usually dispatch something that indicates fetching
    const realm = await storage
    dispatch({
      type: 'LOAD_ITEMS',
      value: realm.objects('Item'),
    })
  }
}

const optimisticAdd = item => {
  return {
    type: 'TRY_ADD_ITEM',
    value: item,
  }
}

export const addItem = (item = { id: 'testid', title: 'testtitle' }) => {
  return async dispatch => {
    dispatch(optimisticAdd(item))
    const realm = await storage
    realm.write(() => {
      realm.create('Item', item)
    })
  }
}
