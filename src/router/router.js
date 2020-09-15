/* 
 * 路由对象
 * 中心思想：需要路由鉴权,由于uni-app没有vue中的路由守卫，所以封装了Router。
 * 说明：
 * 	应用中的路由跳转应使用该Router的方法，并配合config里的路由表进行跳转。
 * 示例：this.$mRouter.push({route:this.$mRoutesConfig.main,query:{a:1}})
 * 
 */
class Router {
	constructor(arg) {
		this.callBack = () => {};
	}

	beforeEach(callBack) {

		if (callBack instanceof Function) this.callBack = callBack;
	}

	navigateTo(to) {
		this.callBack("navigateTo", to);
	}

	redirectTo(to) {
		this.callBack("redirectTo", to);
	}

	reLaunch(to) {
		this.callBack("reLaunch", to);
	}

	switchTab(to) {
		this.callBack("switchTab", to);
	}

	navigateBack(delta) {
		uni.navigateBack({
			delta
		})
	}
}

export default new Router();

