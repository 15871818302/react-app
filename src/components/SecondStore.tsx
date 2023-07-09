import { useSelector, useDispatch } from "react-redux";
import { changeList } from "../store/StoreComponent";

const PushList = () => {
    // 使用数据
    const list = useSelector((state: any) => {
        console.log(state);
    })


    return (
        <div>
            4444444
        </div>
    )
}

export default PushList