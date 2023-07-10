import { useSelector, useDispatch } from "react-redux";
import { changeList } from "../store/StoreComponent";

const PushList = () => {
  // 使用数据
  const list = useSelector((state: any) => {
    return state.second.strList;
  });

  const dispatch = useDispatch();

  const pushItem = () => {
    // 这里也可以进行异步处理，比如发送请求之类的
    const action = changeList("565656");
    dispatch(action);
  };

  return (
    <div>
      <div>{list}</div>
      <button
        onClick={() => {
          pushItem();
        }}
      >
        点击
      </button>
      4444444
    </div>
  );
};

export default PushList;
