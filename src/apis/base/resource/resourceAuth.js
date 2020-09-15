/* 
 * HTTP Auth响应类
 */
class ResAuth{
	constructor(arg) {
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

export default new ResAuth()
