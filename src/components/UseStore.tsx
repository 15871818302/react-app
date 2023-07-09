import React from "react";
// redux中的hook
import {useSelector, useDispatch} from "react-redux";
import {addCount} from "../store/StoreComponent";

const StoreButton = () => {
    // 使用数据
    const { count } = useSelector(
        (state:any) => {
            return state.counter
        }
    )

    // 修改数据
    const dispatch = useDispatch()
    const clickHandle = () => {
        // 生成action对象
        const action = addCount()
        // 提交action进行数据更新
        dispatch(action)
    }

    return (
        <>
            { count }
            <button onClick={() => {clickHandle()}}>+++</button>
        </>
    )
}

export default StoreButton