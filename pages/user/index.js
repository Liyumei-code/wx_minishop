// pages/user/index.js
import { showToast} from "../../utils/asyncWx.js";

Page({
  data: {
    userinfo:{},
    // 被收藏的商品的数量
    collectNums:0
  },
  onShow(){
    const userinfo=wx.getStorageSync("userinfo");
    const collect=wx.getStorageSync("collect")||[];
      
    this.setData({userinfo,collectNums:collect.length});
      
  },

  
    // 提示用户 功能还没有实现
    commonToast() {
      showToast({title:"该功能还没有实现！"});
  }
})