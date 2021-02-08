/**
 * @Author: huweijian
 * @Date: 2021-02-07 13:58:51
 * @Desc: 工具方法
 */
const path = require('path')
// 获取跟路径
const projectRootPath = process.cwd()

// 返回项目根目录下的绝对路径
const joinPath = (str) => {
  return path.resolve(projectRootPath, str)
}

module.exports = {
  projectRootPath,
  joinPath
}