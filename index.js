/*
 * @Description: npm entry
 * @Date: 2020-08-26 22:20:45 +0800
 * @Author: JackChouMine
 * @LastEditTime: Wed Aug 26 2020 22:45:32
 * @LastEditors: JackChouMine
 */
const getDateI = function () {
  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth() + 1
  const date = today.getDate()
  return {
    year, month, date
  }
}

export const getDate = getDateI