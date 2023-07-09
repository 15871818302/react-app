import {createSlice} from "@reduxjs/toolkit";

// 创建counterStore用于存放数据和数据处理方法

const counterStore = createSlice({
    // 模块名称
    name: "counter",

    // 初始数据
    initialState: {
        count : 1
    },

    // 修改数据的方法
    reducers: {
        // 修改数据用的函数
        addCount: (state) => {
            state.count ++
        }
    }
})

const { addCount } = counterStore.actions

const counterReducer = counterStore.reducer

// 导出处理数据的函数

export { addCount }

// 导出处理数据的方法

export default counterReducer