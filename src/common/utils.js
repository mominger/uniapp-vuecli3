export default {

	/* 
	 * obj 转成 查询参数
	 * 例子：{a:1,b:2} => a=1&b=2
	 */
	objParseParam(obj) {
		let paramsStr = "";
		if (obj instanceof Array) return paramsStr;
		if (!(obj instanceof Object)) return paramsStr;
		for (let key in obj) {
			paramsStr += `${key}=${obj[key]}&`; 
		}
		return paramsStr.substring(0, paramsStr.length - 1);
	},

	/* 
	 * obj、path 转成 带参数的url
	 * 例子：{a:1,b:2} => /pages/index/index?a=1&b=2
	 */
	objParseUrlAndParam(path, obj) {
		let url = path || "/";
		let paramsStr = "";
		if (obj instanceof Array) return url;
		if (!(obj instanceof Object)) return url;
		paramsStr = this.objParseParam(obj);
		paramsStr && (url += "?");
		url += paramsStr;
		return url;
	},

	/* 
	 * 获取url里的参数对象
	 * 例子: /pages/index/index?a=1&b=2 => {a:1,b:2}
	 */
	getReqParamsObj(url) {
		let href = url || "";
		let theReq = new Object();
		let str = href.split("?")[1];
		if (str != undefined) {
			let strs = str.split("&");
			let kvs = [];
			for (let i = 0; i < strs.length; i++) {
				kvs = strs[i].split("=");
				theReq[kvs[0]] = (kvs[1]);
			}
		}
		return theReq;
	},
	formatLocation(longitude, latitude) {
		if (typeof longitude === 'string' && typeof latitude === 'string') {
			longitude = parseFloat(longitude)
			latitude = parseFloat(latitude)
		}
	
		longitude = longitude.toFixed(2)
		latitude = latitude.toFixed(2)
	
		return {
			longitude: longitude.toString().split('.'),
			latitude: latitude.toString().split('.')
		}
	},
 formatTime(time) {
		if (typeof time !== 'number' || time < 0) {
			return time
		}
	
		var hour = parseInt(time / 3600)
		time = time % 3600
		var minute = parseInt(time / 60)
		time = time % 60
		var second = time
	
		return ([hour, minute, second]).map(function (n) {
			n = n.toString()
			return n[1] ? n : '0' + n
		}).join(':')
	},
	getPosition(dom){
		const query = uni.createSelectorQuery().in(this);
	
		return new Promise((resovle,reject)=>{
			query.select(dom).boundingClientRect(data => {
			  resovle(data);
			}).exec();
		})
	},

	getRestfulURL(path,param){
		if (!(param && param instanceof Object)){
			return path
		}

		return path.replace(/\{(\w+)\}/g,function(m,i){
			return param[i] || '';
		})
	}
}
