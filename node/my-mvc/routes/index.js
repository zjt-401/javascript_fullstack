// module.exports = {
//   'get /': async ctx => {
//     ctx.body = '首页'
//   },
//   'get /detail': async ctx => {
//     ctx.body = '详情页面'
//   }
// }

module.exports = app => ({
  'get /detail': app.$ctrl.home.detail,
  'get /': app.$ctrl.home.index
})