import ReactDOM from 'react-dom'
import React, { Component } from 'react'

// ///////////////////////////////////////////////////////函数组件
// function Component01(props) {
//   return (
//     <div>
//       <h1>这是函数组件</h1>
//       <h1>这是示范内容:{props.name}</h1>
//     </div>
//   );
// }
// ReactDOM.render(
//   <Component01 name="asdsa"/>,//props=>name传入
//   document.getElementById('root')
// );

// /////////////////////////////////////////////////////class组件
// class Component02 extends React.Component{
//   render(){
//     return(
//       <div>
//         <h1>这是class组件</h1>
//         <h1>这是示范内容:{this.props.name}</h1>
//       </div>
//     );
//   }
// }
// ReactDOM.render(
//   <Component02 name="Class"/>,
//   document.getElementById('root')
// );

// //////////////////////////////////////////////////渲染组件
// function Component03(props) {
//   return (
//     <h1>{props.title}</h1>
//   );
// }
// class Component04 extends React.Component {
//   render(){
//     return (
//       <h1>{this.props.title}</h1>
//     );
//   }
// }
// const ele01 = <Component03 title="渲染组件方式之函数组件"/>
// const ele02 = <Component04 title="渲染组件方式之class组件"/>
// const ele03 = (
//   <div>
//     <Component03 title="渲染组件方式之函数组件"/>
//     <br/>
//     <Component04 title="渲染组件方式之class组件"/>
//   </div>
// );
// ReactDOM.render(
//   // ele01,
//   // ele02,'
//   ele03,
//   document.getElementById('root')
// );

// ///////////////////////////////////////////组合组件
// function Component05(props) {
//   return <h1>{props.title}</h1>
// }
// class Component5_5 extends React.Component {
//   render(){
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h1>{this.props.num}</h1>
//       </div>
//     );
//   }
// }
// function Component06() {
//   return (
//     <div>
//       {/* 引用了Component05组件 */}
//       <Component05 title="组合组件之一"/>
//       <Component05 title="组合组件之二"/>
//       <Component05 title="组合组件之三"/>
//       <Component5_5 title="组合组件之四"/>
//       <Component5_5 title="组合组件之五" num="1"/>
//     </div>
//   );
// }
// ReactDOM.render(
//   <Component06/>,
//   document.getElementById('root')
// );

// /////////////////////////////////////////向class组件中添加局部的state
// 步骤：
  // ①把 render() 方法中的 this.props.date 替换成 this.state.date ：
  // ②添加一个 class 构造函数，然后在该函数中为 this.state 赋初值：
  // ③添加一个 class 构造函数，然后在该函数中为 this.state 赋初值：
  // ④将 props 传递到父类的构造函数中：
                                    // constructor(props) {
                                    //   super(props);
                                    //   this.state = {date: new Date()};
                                    // }
  // ⑤移除组件元素中的对应属性：    
  // class Component07 extends React.Component {
  //   constructor(props){
  //     super(props);
  //     this.state={
  //       title:"这是使用了state方式的例子",
  //       name:"A",
  //       age:"23"
  //     };
  //   }
  //   render(){
  //     return (
  //       <div>
  //         <h1>标题是：{this.state.title}</h1>
  //         <h1>名字是：{this.state.name}</h1>
  //         <h1>年龄是：{this.state.age}</h1>
  //       </div>
  //     );
  //   }
  // }                                
  // ReactDOM.render(
  //   <Component07/>,
  //   document.getElementById('root')
  // );

  // //////////////////////////////////////使用state和生命周期函数实现时钟
  // class Clock extends React.Component {
  //   constructor(props){
  //     super(props);
  //     this.state={date:new Date()};
  //   }

  //   componentDidMount(){
  //     this.timeeID=setInterval(
  //       ()=>this.tick(),500);
  //   }

  //   componentWillUnmount(){
  //     clearInterval(this.timeeID);
  //   }

  //   tick(){
  //     this.setState({date:new Date()});
  //   }

  //   render(){
  //     return (
  //       <div>
  //         <h1>当前的时间是：</h1>
  //         <h1>{this.state.date.toLocaleTimeString()}</h1>
  //       </div>
  //     );
  //   }
  // }
  // ReactDOM.render(
  //   <Clock/>,
  //   document.getElementById('root')
  // );

// ///////////////////////////////////////////对于setState()的理解
// 1.对于props和state更新可能存在异步，使用setState()时传入函数而非对象
// 2.setState()会将处理后的元素合并到当前的state
// class Clock extends React.Component {
//   constructor(props){
//     super(props);
//     this.state={num:"1",size:"big"}
//   }
//   calculates(){

//   }
//   render(){
//     return (
//       <div>
//         <h1>当前计数</h1>
//         <h1>{this.state.num}</h1>
//       </div>
//     );
//   }
// }
// ReactDOM.render(
//   <Clock/>,
//   document.getElementById("root")
// )
  
// state 为局部的或是封装的的原因。除了拥有并设置了它的组件，其他组件都无法访问。

// 组件的生命周期
// ①当组件实例被创建并插入 DOM 中时，其生命周期调用顺序如下{挂载}
      // constructor()-----常用
      // static getDerivedStateFromProps()
      // render()-----常用
      // componentDidMount()-----常用
// ②当组件的 props 或 state 发生变化时会触发更新。组件更新的生命周期调用顺序如下{更新}
      // static getDerivedStateFromProps()
      // shouldComponentUpdate()
      // render()-----常用
      // getSnapshotBeforeUpdate()
      // componentDidUpdate()-----常用
// ④当组件从 DOM 中移除时会调用如下方法{卸载}
      // componentWillUnmount()
// ⑤错误处理
      // static getDerivedStateFromError()
      // componentDidCatch()

// 在 constructor() 函数中不要调用 setState() 方法
// 只能在构造函数中直接为 this.state 赋值。如需在其他方法中赋值，你应使用 this.setState() 替代。
// 避免将 props 的值复制给 state！

// /////////////////////////////////////////React事件处理
/*React 事件的命名采用小驼峰式（camelCase），而不是纯小写。
使用 JSX 语法时你需要传入一个函数作为事件处理函数，而不是一个字符串。*/

// 在 React 中另一个不同点是你不能通过返回 false 的方式阻止默认行为。你必须显式的使用 preventDefault
// function ActionLink() {
//   function handLink(e) {
//     e.preventDefault();//阻止链接默认打开一个新页面
//     console.log('The link was clicked.');
//   }
//   return (
//     <a href="#" onClick={handLink}>Click Here!</a>
//   )
// }
// ReactDOM.render(
//   <ActionLink/>,
//   document.getElementById('root')
// );

// 当你使用 ES6 class 语法定义一个组件的时候，通常的做法是将事件处理函数声明为 class 中的方法。
class Toggle extends React.Component{
  constructor(props){
    super(props);
    this.state={isToggleOn:true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState(state => ({
      isToggleOn:!state.isToggleOn
    }))
  }

  render(){
    return (
      <button onClick={this.handleClick}>{this.state.isToggleOn?'ON':'OFF'}</button>
    );
  }
}
ReactDOM.render(
  <Toggle/>,
  document.getElementById('root')
);
// 你必须谨慎对待 JSX 回调函数中的 this，在 JavaScript 中，class 的方法默认不会绑定 this。如果你忘记绑定 this.handleClick 并把它传入了 onClick，当你调用这个函数的时候 this 的值为 undefined。
// // 这并不是 React 特有的行为；这其实与 JavaScript 函数工作原理有关。通常情况下，如果你没有在方法后面添加 ()，例如 onClick={this.handleClick}，你应该为这个方法绑定 this。
// 如果觉得使用 bind 很麻烦，这里有两种方式可以解决。如果你正在使用实验性的 public class fields 语法，你可以使用 class fields 正确的绑定回调函数：
