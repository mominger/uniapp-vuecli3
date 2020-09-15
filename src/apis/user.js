import http from "@/apis/base/http.js";
import config from '@/config/index.config.js'

//第三方用户信息查询
export const getByThridparty = (data) => http.Get(`${config.METADATA_DOMAIN}/v1/metadata/user/getByThridparty`, data);  

export const getLearningTasks = (data) => http.Post(`${config.DOMAIN_NAME}/learning-api/saasSchool/getLearningTasks`, data);
export const getLoginInfo = (data) => http.Get(`${config.AUTH_URL}/authApi/auth/mobileAccessToken`, data);
export const loginGetUserInfo = (data) => http.Get(`${config.DOMAIN_NAME}/learning-api/userauth/loginByAccessToken/${data.accessToken}`);

