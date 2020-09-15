import http from "@/apis/base/http.js";
import config from '@/config/index.config.js'

//第三方用户信息查询
export const getLeaveApplyHomePageList = (data) => http.Get(`${config.LEAVEAPPLY_DOMAIN}/v1/leaveApply/teacher/getLeaveApplyHomePageList/{teacherId}`, data);  