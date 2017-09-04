import storage from '@storage'

const LOAD_ITEMS = 'LOAD_ITEMS'

export const actions = {
  LOAD_ITEMS,
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
