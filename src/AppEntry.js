import Vue from "vue"

/* 
 * App入口页
 * 中心思想：各端(app、h5、小程序)动态入口的控制处理
 */

class AppEntry extends Vue {
	constructor(arg) {
		super();
	}
	
	//路由入口 鉴权
	mainRouteAuth(routeData) {
		// #ifdef H5 || MP-WEIXIN
		let thePath = "/"+routeData.path;
		let query = routeData.query
		
		for (let routeKey in this.$mRoutesConfig) {
			let route = this.$mRoutesConfig[routeKey];
			// 如果当前访问的路由需要鉴权，判断登录状态
			if (route.path == thePath) {
				if (route.auth && !this.$store.getters.hasLogin) {
					query.redirectUrl = thePath
					
					this.$mRouter.redirectTo({
						//启动页
						// route: this.$mRoutesConfig.begin,
						route: this.$mRoutesConfig.login,
						query: query
					})
				}
				break;
			}
		}
	   // #endif */
	}
	
	// 获取微信openId
	getWeChatOpenId() {
		// #ifdef H5
		let url = window.location.href;
		let query = this.$mUtils.getReqParamsObj(url);
		if (query.openId) this.$store.commit("SET_OPENID", query.openId);
		// #endif

		//微信小程序端
		// #ifdef MP-WEIXIN | APP-PLUS
		this.$store.commit("SET_OPENID", this.$mConfig.testOpenId);
		// #endif

	}
}

export default new AppEntry()
