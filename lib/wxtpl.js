/**
 * @file wxml to swan
 * @author xiaohong8023@outlook.com
 */

'use strict';

const wx2swan = require('wx2swan/src/view');

module.exports = function (file, options) {

    let logger = options.logger;

    return new Promise((resolve, reject) => {

        wx2swan.transformViewContent(
            file.fullPath,
            file.content.toString(),
            {
                data: {}
            }
        ).then(function (res) {
            resolve({
                content: res.contents
            });
        }, function (err) {

            logger.error('wxml to swan  err :', file.path);
            reject({
                content: file.content
            });
        });
    });
};
