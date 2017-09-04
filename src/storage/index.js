import Realm from 'realm'
import Item from './item'

export default Realm.open({ schema: [Item] })
