import React from "react";
import { Input, Table, Space, Popconfirm } from "antd";
import axios from "axios";

const { Search } = Input;

class LifeDuration extends React.Component<any, any> {
  state = {
    list: [],
    columns: [
      {
        title: "服务器名称",
        dataIndex: "server",
        key: "server",
      },
      {
        title: "操作",
        dataIndex: "1",
        key: "1",
        render: (text: string, record: any) => {
          <Space size="middle">
            <Popconfirm
              title="确定要删除吗"
              onConfirm={() => this.handleDel("1")}
            >
              <a href="#">删除</a>
            </Popconfirm>
          </Space>;
        },
      },
    ],
  };

  onSearch = (value: string) => console.log(value);

  handleDel = (id: string) => {
    console.log(id);
  };

  getList = async () => {
    const res = await axios.get("https://cafemaker.wakingsands.com/servers");
    let serverList: any[] = [];
    res.data.forEach((item: string) => {
      serverList.push({ server: item });
    });
    this.setState({
      list: serverList,
    });
  };

  // 在这个生命周期中可以发送请求，这个是处于dom的挂载阶段
  // 现在react中有三大声明周期，用于class这种类写法
  // componentDidMount 代表挂载阶段
  // componentDidUpdate 代表更新阶段
  // componentWillUnmount 代表销毁阶段
  componentDidMount() {
    this.getList();
  }

  render() {
    // @ts-ignore
    return (
      <div>
        <div>
          <Search
            placeholder="input search text"
            onSearch={this.onSearch}
            enterButton
          />
        </div>
        <div>
          <Table
            bordered
            dataSource={this.state.list}
            // @ts-ignore
            columns={this.state.columns}
            pagination={false}
          ></Table>
        </div>
      </div>
    );
  }
}

export default LifeDuration;
