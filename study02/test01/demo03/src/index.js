import ReactDOM from 'react-dom'
import React from 'react'

// 1.之前更新界面的方法：ReactDOM.render()
// function ClockOld(props) {
//   const tick = (
//     <div>
//       <h1>当前时间是：</h1>
//       <h1>{new Date().toLocaleTimeString()}</h1>
//     </div>
//   );
//   ReactDOM.render(
//     tick,
//     document.getElementById('root')
//   );
// }
// setInterval(ClockOld,500);

// 2.当前的更新方法（初级改进，但是ClockNew组件仍然未实现自我更新，未使用state）
// function ClockNew(props) {
//   return (
//     <div>
//       <h1>当前的时间是：</h1>
//       <h1>{props.date.toLocaleTimeString()}</h1>//React将<ClockNew/>作为对象传入，date是其中的属性
//     </div>
//   );
// }
// function tick() {
//   ReactDOM.render(
//     <ClockNew date={new Date()}/>,
//     document.getElementById('root')
//   );
// }
// setInterval(tick,500);


// 3.当前的更新方法（使用state）
// state和props类似，但是state是私有的，并且完全受控于当前组件

// ①将ClockNew转化为class组件
  // class ClockNew extends React.Component {
  //   render() {//添加render()方法
  //     return (//将之前的函数体改进后（this取代，删除剩余空函数声明）移入render中
  //       <div>
  //         <h1>当前的时间是：</h1>
  //         <h1>{this.props.date.toLocaleTimeString()}</h1>
  //       </div>
  //     )
  //   }
  // }

// ②将props换成state
// class ClockNew extends React.Component {
  //   render() {//添加render()方法
  //     return (//将之前的函数体改进后（this取代，删除剩余空函数声明）移入render中
  //       <div>
  //         <h1>当前的时间是：</h1>
  //         <h1>{this.state.date.toLocaleTimeString()}</h1>
  //       </div>
  //     )
  //   }
  // }
// ③添加一个class构造函数constructor()
  // class ClockNew extends React.Component {
  //   constructor(porps) {//Class 组件应该始终使用 props 参数来调用父类的构造函数。
  //     super(props);
  //     this.state = {date:new Date()};
  //   }
  //   render() {
  //     return (
  //       <div>
  //         <h1>当前的时间是：</h1>
  //         <h1>{this.state.date.toLocaleTimeString()}</h1>
  //       </div>
  //     );
  //   }
  // }

// ④将<ClockNew/>中的date属性去掉,整理如下:
// class ClockNew extends React.Component {
//     constructor(porps) {//Class 组件应该始终使用 props 参数来调用父类的构造函数。
//       super(porps);
//       this.state = {date:new Date()};
//     }
//     render() {
//       return (
//         <div>
//           <h1>当前的时间是：</h1>
//           <h1>{this.state.date.toLocaleTimeString()}</h1>
//         </div>
//       );
//     }
//   }

// ReactDOM.render(
//   <ClockNew/>,
//   document.getElementById('root') 
// );

// ⑤添加生命周期方法(class组件中声明)
// 挂载(mount)--组件第一次被渲染到DOM中的时候;可以设置定时器
// 卸载(unmount)--当DOM中的组件被删除的时候;可以清除定时器
class ClockNew extends React.Component {
  constructor(porps) {//Class 组件应该始终使用 props 参数来调用父类的构造函数。
    super(porps);
    this.state = {date:new Date()};//构造函数是唯一可以给this.state赋值的地方
  }
  // 声明生命周期方法 
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  } 

  render() {
    return (
      <div>
        <h1>当前的时间是：</h1>
        <h1>{this.state.date.toLocaleTimeString()}</h1>
      </div>
    );
  }
}

ReactDOM.render(
<ClockNew/>,
document.getElementById('root') 
);

// 4.数据是向下流动的(单向数据流)