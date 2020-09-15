import store from "@/store"
import httpResource from "@/apis/base/resource/httpResource.js"
import utils from "@/common/utils.js"
function HTTP(obj, config) {
	let defaultConfig = {
		loading: false,
		header:{}
	}

	config = { ...defaultConfig,	...config}

	// 显示loading，mask防止穿透
	config.loading && uni.showLoading({
		title: '加载中',
		mask: true
	});
	
	//注册响应处理类
	httpResource.register(obj.url)
	return new Promise((resolve, reject) => {
		let options = {
			url: "",
			method: "GET",
			data: {
				"nowTime":new Date().getTime()
			},
			dataType: "json",
			header: {
				"content-type": "application/json",
				"X-requested-With": "XMLHttpRequest" ,
			},
			success: (res) => {
				console.log("HTTP响应结果：",res)
				uni.hideLoading();

				if (res.statusCode == 200){
					httpResource.success(res,resolve,reject,function(msg){
						//失败提示
						return uni.showToast({
							title:msg,
							icon: "none",
							duration: 2000
						})
					},function(){
						store.dispatch("reLogin");
					})
				}else{
					//错误处理
					reject("HTTP:状态码异常！");
				}
						
			},
			fail: (err) => {
				//失败处理
				uni.hideLoading();
				uni.showToast({
					title: "网络异常，请稍后再试!",
					icon: "none",
				})
				reject("网络异常，请稍后再试!");
			},
			complete: () => {}
		}

		Object.assign(options.header,config.header,httpResource.header())
		options = { ...options,...obj};
		
		uni.request(options);
	})

}

export default {
	Get(url, {data = {}, config={},pathParam}={}) {
		url = utils.getRestfulURL(url,pathParam);

		return HTTP({
			url,
			data,
			method: "GET"
		}, config);
	},
	Post(url, {data = {}, config={},pathParam}={}) {
		url = utils.getRestfulURL(url,pathParam);

		return HTTP({
			url,
			data,
			method: "POST"
		}, config);
	},
	
	PostForm(url, {data = {}, config={},pathParam}={}) {
		config.header = Object.assign(config.header || {},{
				"content-type": "application/x-www-form-urlencoded",
			})
		
		return this.Post(url,data,pathParam,config);
	}
}
