import Realm from 'realm'
import Item from './item'

export default new Realm({ schema: [Item] })
