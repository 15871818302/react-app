import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./StoreComponent";
import { secondReducer } from "./StoreComponent";

export default configureStore({
    // 注册子模块
    reducer: {
        counter: counterReducer,
        second: secondReducer
    }
})