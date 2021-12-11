import { init, getWXContext } from 'wx-server-sdk'

init()


export async function main() {
  const wxContext = getWXContext()

  return {
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}
