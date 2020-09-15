import $mUtils from '@/common/utils.js'

export  default function($mRouter,$mRoutesConfig,store){
	//路由拦截
	$mRouter.beforeEach((navType, to) => {
		if (to.route === undefined) throw ("没找到to.route对象，路由信息:" + JSON.stringify(to));
		//如果入口是登录界面，且已登录，跳向首页
	if (to.route.path === $mRoutesConfig.login.path && store.getters.hasLogin) {
			uni.redirectTo({
				url: $mUtils.objParseUrlAndParam($mRoutesConfig.main.path, to.query)
			})
			return;
		}
	
		// 过滤需要鉴权的页面
		if (to.route.auth) {
			// 已经登录
			if (store.getters.hasLogin) {
				uni[navType]({
					url: $mUtils.objParseUrlAndParam(to.route.path, to.query)
				})
			} else {
				let query = {
					redirectUrl: to.route.path,
					...to.query
				}
				
				//跳向登录页面
				uni.navigateTo({
					url: $mUtils.objParseUrlAndParam($mRoutesConfig.user.login.path, query)
				})
			}
		} else {
			uni[navType]({
				url: $mUtils.objParseUrlAndParam(to.route.path, to.query)
			})
		}
	})
}