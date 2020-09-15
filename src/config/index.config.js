import dev from '@/config/env/dev.config.js'
import prd from '@/config/env/prd.config.js'
import mock from '@/config/env/mock.config.js'
import test from '@/config/env/test.config.js'

const CONFIG = {
        //开发环境
        development: {
                ...dev
        },

        //生产环境
        production: {
                ...prd
        },

        mock: {
                ...mock
        },

        test: {
                ...test
        }
}

export default CONFIG[process.env.NODE_ENV];
