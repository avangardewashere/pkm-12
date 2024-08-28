 //!!! 这个文件不要修改,请使用api命令生成(don't edit this file, please generate it by api command) !!!

import { request } from "../utils/request";

 

/**
 * @description 提款列表
 * @see https://api-doc.cxsport.net/#/view/7YX0wG8x
 */
export const postDitto = () =>
  request({
    method: "get",
    url: `/pokemon/ditto`,
})