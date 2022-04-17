const cloud = require('wx-server-sdk');
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV,
});
const db = cloud.database();
const todos = db.collection('todos');
exports.main = async (event, context) => {
  return await db.collection(event.collectionName).get();
};
