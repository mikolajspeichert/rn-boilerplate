export default class Item {
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
