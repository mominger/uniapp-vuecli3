import Vue from 'vue'
import config from '@/config/index.config.js'
import setting from '@/config/setting.config.js'
import * as Sentry from "sentry-miniapp";

export default (() =>  {
	if (config.IS_OUT_ERRORLOG) {
		Sentry.init({
			dsn:setting.SENTRY_DSN
		});
	}

	const errorHandler = function(err, vm, info) {
		//异常数据提交到sentry
		if (config.IS_OUT_ERRORLOG) {
			Sentry.captureMessage(err)
		}

		//默认打印到控制台
		console.error(err, info)
	}

	Vue.config.errorHandler = errorHandler;  
	Vue.prototype.$throw = (error) => errorHandler(error, this);
})()
