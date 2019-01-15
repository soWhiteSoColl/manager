const axios = require('axios')

const basicUrl = 'https://api.bzqll.com/music/netease'
const key = 579621905

const NetEaseRequest = async (ctx) => {
  const query = ctx.query || {}
  query.key = key
  const originUrl = ctx.request.url.replace(/\?.*$/, '')
  const url = originUrl.replace('/api/musics', basicUrl)
  const res = await axios.get(url, { params: query })
  console.log(url)

  if (res.data) {
    if (typeof (res.data) === 'string') {
      ctx.body = { data: res.data, success: true }
    } else {
      ctx.body = { data: res.data.data || res.data, success: true }
    }
  } else {
    ctx.body = { success: false, msg: '请求出错' }
  }
}

module.exports = NetEaseRequest