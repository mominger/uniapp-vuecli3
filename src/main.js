import Vue from 'vue'
import App from './App'
import store from './store'
import '@/common/errorLog.js'
import $mAppEntry from './AppEntry.js'
import $mUtils from './common/utils.js'
import mRouter from './router/router.js'
import mRoutesConfig from './router/routesConfig.js'
import routerFilter from './router/routerFilter.js'
import $mConfig from './config/index.config.js'
import $mSetting from './config/setting.config.js'
import $mAssetsPath from './config/assets.config.js'

Vue.config.productionTip = false
App.mpType = 'app'

routerFilter(mRouter,mRoutesConfig,store) // filter 

Vue.prototype.$mAppEntry=$mAppEntry
Vue.prototype.$store = store;
Vue.prototype.$mUtils = $mUtils;
Vue.prototype.$mRoutesConfig = mRoutesConfig;
Vue.prototype.$mRouter = mRouter;
Vue.prototype.$mConfig=$mConfig;
Vue.prototype.$mSetting=$mSetting;
Vue.prototype.$mAssetsPath=$mAssetsPath;

const app = new Vue({
    ...App
})
app.$mount()
