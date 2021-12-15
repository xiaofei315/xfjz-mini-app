import { init, DYNAMIC_CURRENT_ENV, cloud } from 'wx-server-sdk';

init({
  env: DYNAMIC_CURRENT_ENV,
});

const db = cloud.database();

export async function main(event) {
  return await db.createCollection(event.name);
}
