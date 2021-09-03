/**
 * @description 判断是否属于外部连接
 * @param url
 * @returns boolean
 */
export function isHttpsOrHttpUrl(url: string): boolean {
  let regRule = /(http|https):\/\/([\w.]+\/?)\S*/
  return regRule.test(url.toLowerCase())
}
