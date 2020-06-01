import { request } from "../../request/index.js";
import regeneratorRuntime from '../../lib/runtime/runtime';
import { login,showToast} from "../../utils/asyncWx.js";

// Page({
//   // 获取用户信息
//   async handleGetUserInfo(e) {
//     try {
      
//     // 1 获取用户信息
//     const { encryptedData, rawData, iv, signature } = e.detail;
//     // 2 获取小程序登录成功后的code
//     const { code } = await login();
//     const loginParams={ encryptedData, rawData, iv, signature ,code};
//     //  3 发送请求 获取用户的token
//     const {token}=await request({url:"/users/wxlogin",data:loginParams,method:"post"});
//     // 4 把token存入缓存中 同时跳转回上一个页面
//     wx.setStorageSync("token", token);
//     wx.navigateBack({
//       delta: 1
//     });
  
//     } catch (error) {
//       console.log(error);
//     }
//   }
// })

Page({

  //获取用户信息
 async handleGetUserInfo(e) {
      // console.log(e)
      // 获取用户信息
      let {encryptedData,rawData,iv,signature} = e.detail;
      //获取小程序登录成功之后的 code
      const {code} = await login();
      console.log(code)
      let loginParams = {encryptedData,rawData,iv,signature,code}
      // console.log(loginParams);
      // 发送请求 获取用户 token
      // let token = await request({url:'/users/wxlogin',data:loginParams,method:'POST'});
      // console.log(token)
      // 弹框提示
      showToast({title:'获取 token 失败，无法实现支付功能'});
      // 返回到上一级页面
      setTimeout(() => {
          wx.navigateBack({
              delta: 1
            })
      }, 1500);
  },
})