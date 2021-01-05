import React from 'react';
import ReactDOM from 'react-dom';
import {
  ConfigProvider,
  Button,
  message,
  Modal
} from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import PropTypes, { func } from 'prop-types'
import './index.css';

moment.locale('zh-cn');
const { confirm } = Modal;

function showDeleteConfirm() {
  confirm({
    title: 'Are you sure delete this task?',
    content: 'Some descriptions',
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ["Items01", "Items02", "Items03"]
    }
    this.additem = this.additem.bind(this);
  }
  additem(newItems) {//真正处理，即更新状态的组件是父组件App，所以需要处理来自子组件AddItems的数据，这里要传值
    // 1.读取状态
    const { items } = this.state;
    // 2.处理状态
    items.unshift(newItems);
    // 3.更新状态
    this.setState(items, ()=>{});
  }
  delItems = (index) => {
    const { items } = this.state;
    items.splice(index, 1);
    this.setState(items);
  }
  render() {
    const { items } = this.state;
    return (
      <div style={{textAlign:'center',margin:'0 auto'}}>
        <ConfigProvider locale={zhCN}>
          <h1>React todo list</h1>
          {/* 给子组件展示用的数组数据 */}
          <Lists items={items} delItems={this.delItems}/>
          {/* 给子组件展示和操作的数组长度和方法 */}
          <AddItems count={items.length} additem={this.additem}/>
        </ConfigProvider>
      </div>
    );
  }
}

class Lists extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    //获取从父组件传来的数组items对象
    const { items } = this.props;
    return (
      <div>
        <ul>
          {items.map((itemName, index) => {
            return (
              <li key={index}>
                <span>{itemName}</span>
                <Button type="danger" onClick={()=>this.props.delItems(index)}>Delete</Button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
Lists.propTypes = {//对传入展示列表的数据做出数组刚需(不能写在Lists上面)
  items:PropTypes.array.isRequired
}
class AddItems extends React.Component {
  constructor(props) {
    super(props);
    this.dealItem = this.dealItem.bind(this);
  }
  dealItem() { 
    // 1.获取文本框内容
    const newInput = this.newInput.value.trim();
    //判断文本内容是否合法
    if (!newInput) {//如果内容为空
      return message.warning("Please enter the item's name instead nothing!");
    }
    //处理数据
    this.props.additem(newInput);
    //处理完后需要将文本框清空
    this.newInput.value = '';
    return message.success("Success submit!");
  }
  render() {
    const { count } = this.props;
    return (
      <div>
        {/* 获取到文本框的内容 */}
        <input type="text" ref={input => this.newInput = input} placeholder="Please enter the new items"/>
        {/* 给按钮增加监听，对父组件传过来的方法进行操作 */}
        <Button type="primary" onClick={this.dealItem}>Submit new items( {this.props.count} items)</Button>
      </div>
    );
  }
}
AddItems.propTypes = {
  count: PropTypes.number.isRequired,
  additem:PropTypes.func.isRequired
}
ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
