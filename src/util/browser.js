export default {
  versions: function() {
      var u = navigator.userAgent, app = navigator.appVersion;
      return {							//移动终端浏览器版本信息
          webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
          mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //是否为移动终端
          ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
          android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
          iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
          webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部,
          weixin: !!u.match(/micromessenger/i),
          weibo: !!u.match(/weibo/i),
          QQ:!!u.match(/qq/i),
          uc:!!u.match(/UCBrowser/i)
      };
  }(),
  language: (navigator.browserLanguage ||  navigator.language).toLowerCase()
}
