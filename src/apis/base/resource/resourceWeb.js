/* 
 * HTTP Base响应类
 */
class ResBase{
	constructor(arg) {
	}
	
	header(config,token){
		return {
			"tenantDomain":config["WEB_HOSTNAME"],
			"Access-Token":token
		}
	}
	
	success(res,resolve,reject,tipFail,reLogin){
		let {data} = res,resCode=parseInt(data.serverResult.resultCode);
		if(resCode===200){
				resolve(data)					
		}else{
			switch(resCode){
				case 401:
				case 555:
					reLogin();
					return;
				break;
			}
			
			//失败提示
			tipFail(data.msg)
			reject(data.msg);
		}
	}
}

export default new ResBase()
