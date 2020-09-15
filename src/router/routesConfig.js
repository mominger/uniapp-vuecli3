//路由数据
export default (() =>  {
	//需读取的meta扩展值
	const metaKeys =  ['name','auth']
	let routesConfig = {}
	ROUTES.forEach((item) => {
		let meta = item.meta
		
		if (!meta || !meta.name){
			console.warn("ROUTES path:%s meta or meta.name is empty",item.path)
			return
		}
		
		let currentObj = {
			"path":item.path
		}
		
		for (let i = 0; i < metaKeys.length; i++) {
			const key = metaKeys[i];
			let value = meta[key];
			
			if (value){
				currentObj[key] = value
			}
		}
		
		routesConfig[meta.name] = currentObj
	})
	
	return routesConfig
})()