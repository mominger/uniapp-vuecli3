import config from "@/config/index.config.js";
import ResourceBase from "@/apis/base/resource/resourceBase.js";
import ResourceWeb from "@/apis/base/resource/resourceWeb.js";
import ResourceAuth from "@/apis/base/resource/resourceAuth.js";

/* 
 * HTTP 动态资源类
 * 中心思想：针对多后台 响应数据和不同请求Header的问题，据请求URL映射到不同处理
 * 示例:HTTP_RESOURCE_REGISTER里建立url和ResBase的映射关系，然后在http.js里通过 HttpResource调用 ResourceBase的 方法
 */
//响应类注册
const HTTP_RESOURCE_REGISTER = {
	[config.DOMAIN_NAME]:ResourceWeb,
	[config.AUTH_URL]:ResourceAuth
}
const ResourceCommon = ResourceBase

class HttpRes{
	constructor(arg) {
		this.Resource =  new Object();
	}
	
	//注册响应处理
	register(url){
		for (let key in HTTP_RESOURCE_REGISTER){
			if (url.startsWith(key)){
				this.Resource = HTTP_RESOURCE_REGISTER[key];
				return;
			}
		}
		
		this.Resource = ResourceCommon
		console.warn("此url拿不到对应的HttpRes响应处理,默认按Common的处理",url)
	}
	
	header(){
		let token=uni.getStorageSync('token');
		return  this.Resource.header ? this.Resource.header(config,token):null;
	}
	
	success(res,resolve,reject,tipFail,reLogin){
		return this.Resource.success(res,resolve,reject,tipFail,reLogin)
	}
}

export default new HttpRes()
