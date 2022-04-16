const cloud = require('wx-server-sdk')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
const db = cloud.database()
const todos=db.collection('todos')
exports.main =  (event, context) => {
  console.log('event:'+event.name, 'context:'+context.name);
  // return await db.createCollection('todos')
  return todos.get()
}