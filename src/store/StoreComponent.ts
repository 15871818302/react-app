import { createSlice } from "@reduxjs/toolkit";

// 创建counterStore用于存放数据和数据处理方法

const counterStore = createSlice({
    // 模块名称
    name: "counter",

    // 初始数据
    initialState: {
        count: 1
    },

    // 修改数据的方法
    reducers: {
        // 修改数据用的函数
        addCount: (state) => {
            state.count++
        }
    }
})

const secondStore = createSlice({
    name: "second",

    // 初始数据
    initialState: {
        strList: ["xxx"]
    },

    // 修改方法
    reducers: {
        // action 这个形参是一个对象，这个对象中有个属性是payload，跟vue中的vuex里面的payload用法差不多，就是传递过来的参数
        changeList: (state, action) => {
            state.strList.push(action.payload)
        }
    }
})

const { addCount } = counterStore.actions

const { changeList } = secondStore.actions

const counterReducer = counterStore.reducer

const secondReducer = secondStore.reducer

// 导出处理数据的函数

export { addCount, changeList, secondReducer }

// 导出处理数据的方法

export default counterReducer