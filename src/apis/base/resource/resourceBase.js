/* 
 * HTTP Base响应类
 */
class ResBase{
	constructor(arg) {
	}
	
	header(config,token){
		return {
		}
	}
	
	success(res,resolve,reject,tipFail,reLogin){
		let data = res.data.result;
		let resCode = parseInt(res.code);

		resolve(data);
	}
}

export default new ResBase()
