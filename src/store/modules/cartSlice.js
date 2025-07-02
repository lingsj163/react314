import { createSlice } from "@reduxjs/toolkit";

// 1. 创建一个store
const cartSlice = createSlice({
  // 定义一个名字
  name: "cart",
  // 初始化数据----购物车为空
  initialState: {
    items: [],
    // 定义一个总价
    total: 0
  },
  // 定义存储和删除数据的方法的方法
  reducers: {
    // 定义存储数据的方法
    addItem: (state, action) => {
      // 根据商品页面传递的商品数据item 是被action.payload接收的 所以将数据添加到items[]
      // 需要进行排查，检查当前添加进来的商品在items里是否已经存在了
      // 如果存在， 则将当前商品的数量+1
      const addProduct =  state.items.find((item) => item.id === action.payload.id)
      // 如果addProduct不存在，那就给每个商品新增quantity属性代表数量 并且属性为1
      if (!addProduct) {
        state.items.push({...action.payload, quantity: 1})
      } else {
        // 如果addProduct存在，则将当前商品的数量+1 
        addProduct.quantity += 1
      }

      // 计算价格
      // state.total = state.total + action.payload.price
      state.total += action.payload.price

    },
    // 定义删除数据的方法
    removeItem: (state, action) => {
      // 根据传递的商品id 开始在items[]中查找
      // 使用findIndex 找到对应的索引 返回的是索引值，没找到就返回-1
      const productIndex = state.items.findIndex((item) => item.id == action.payload)
      // 如果productIndex大于-1 就说明找到了
      if (productIndex > -1) {
        // 先根据下表获取到该商品 到时候去修改总价格
        const remove = state.items[productIndex]
        // arr[0]  let arr = [1,2,3,4,5] 
        // 更新items 将该商品进行移除
        state.items.splice(productIndex, 1)

        // 更新总价  总价 - 数值 * 当前删除商品的单价
        state.total = state.total - remove.price * remove.quantity
      }
    },

    // 定义一个和输入框数量挂钩的方法
    updateQuantity:(state, action) => {
      // 获取解构一下action.payload
      const {id, quantity} = action.payload
      // 根据传递的id 查找到对应的数据
      const product = state.items.find((item) => item.id === id)
      // 如果找到了，就修改数据的数量
      if (product) {
        // 用原来数量 和 修改后的数量 差值去修改总价
        const quantityDiff = quantity - product.quantity
        // 根据差值修改总价
        // 总结 = 原总价 + 差值 * 单价
        state.total = state.total + quantityDiff * product.price
        // 修改数量
        product.quantity = quantity
      }
    }

  }
})


export const { addItem, removeItem,updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;

