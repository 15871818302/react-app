import React, { createContext } from "react";

// 创建context对象
// createContext() 需要传递一个默认值，否则在ts中会编译报错
const { Consumer, Provider } = createContext("")

function ComB() {
    return (
        // Consumer 标签用于使用数据，可以将上级组件提供的数据在这个标签中使用回调函数的方式进行使用
        <Consumer>
            {value => <div>{ value }</div>}
        </Consumer>
    )
}

// 中间的组件
function ComA() {
    return <ComB></ComB>
}

class Context extends React.Component<any, any> {
    state = {
        msg: "this is a msg"
    }
    render() {
        return (
            // 在这个提供层中，可以在这里输入所需要传递的数据
            <Provider value={this.state.msg}>
                <div>
                    {/* 数据在这里会传递到这个组件中去，并且在这个Provider标签下面的所有组件都会享有这个value值 */}
                    <ComA></ComA>
                </div>
            </Provider>
        );
    }
}

export default Context