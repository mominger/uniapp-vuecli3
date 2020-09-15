import $mRouter from '@/router/router.js'
import $mRoutesConfig from '@/router/routesConfig.js'

const TOKEN = uni.getStorageSync("token") || "";
const OPENID = uni.getStorageSync("openId") || ""; 
const USER_INFO = uni.getStorageSync("userInfo") || {};

const state = {
	// token
	token: TOKEN,
	// 用户openid
	openId: OPENID,
	// 用户信息
	userInfo: USER_INFO,
}

const mutations = {
	SET_TOKEN(state, obj) {
		state.token = obj.token;
		
		uni.setStorageSync("token",  obj.token);
	},
	SET_OPENID(state, openId) {
		state.openId = openId;
		uni.setStorageSync("openId", openId);
	},
	SET_USERINFO(state, userInfo) {
		state.userInfo = userInfo;
		uni.setStorageSync("userInfo", userInfo);
	},
	SET_LOGOUT(state) {
		state.token = "";
		uni.setStorageSync("token", "");
	}
}

const actions = {
	//重新登录
	reLogin({commit}, info) {
		$mRouter.redirectTo({
			route:$mRoutesConfig.login
		});
	}
}

export default {
  namespaced:true,
  state,
  mutations,
  actions
}

