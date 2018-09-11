/**
 * @file The app entrance
 * @author xxx@baidu.com
 */

'use strict';

export default {
    config: {
        pages: [
            'pages/component/componentPage'
        ],
        window: {
            navigationBarTitleText: 'Demo'
        }
    },

    // apis which need promisify
    // $promisifyApis: [],

    $interceptApis: {}
};
