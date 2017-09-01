import { Object } from 'realm'

export default class Item extends Object {
  static schema = {
    name: 'Item',
    primaryKey: 'id',
    properties: {
      id: { type: 'string' },
      title: { type: 'string' },
      notes: { type: 'string' },
      created: { type: 'date' },
    },
  }
}
