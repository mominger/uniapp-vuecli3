import indexConfig from "./index.config.js"

const PATH = indexConfig.ASSETS_PATH;

/* 
 * 图片静态资源表，图片路径统一管理
 * 页面使用：this.$mAssetsPath.logo
 */
export default {
	//启动页入口图标
	entry_1: PATH + "/stop.png",
	entry_2: PATH + "/stop.png",
	entry_3: PATH + "/stop.png",
	entry_4: PATH + "/stop.png",
	
	//logo
	logo: PATH + "/logo.png",
	notice: PATH + "/notice/notice.png",
	confirm: PATH + "/confirm.png",
	
}
