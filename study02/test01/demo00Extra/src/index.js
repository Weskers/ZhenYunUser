import ReactDOM from 'react-dom'
import React from 'react'
import PropTypes, { func } from 'prop-types'
///////////////////////////////补充内容///////////////////////////////
                                  // 1.任务一(数组的遍历+数据数组转换为标签数组)
// const lists=[
//   {
//     num:1
//   },
//   {
//     num:2
//   },
//   {
//     num:3
//   }
// ];
// const uls=(
//   <ul>
//     {
//       lists.map((name,index)=><li key={index}>{name.num}</li>)//动态展示
//     }
//   </ul>
// );
// const ele=(
//   <div>
//     <h1>前端JS框架列表</h1>
//     {uls}
//   </div>
// );
// ReactDOM.render(
//   ele,
//   document.getElementById('root')
// );

                                  // 2.任务二（组件的定义方式）
// ①工厂模式（适用于简单组件），即函数组件，主要是用于没有状态的函数
// function Component() {
//   return (
//     <h1>我是工厂模式下创建的组件</h1>
//   );
// }
// ReactDOM.render(
//   <Component/>,
//   document.getElementById('root')
// );
// ②ES6的class组件（适用于复杂组件）
// class Component extends React.Component {
//
//   render(){
//
//     return (
//       <h1>我是ES6的class组件</h1>
//     );
//   }
// }
// ReactDOM.render(
//   <Component/>,
//   document.getElementById('root')
// );

                                    // 3.重新认识React的三大组件属性
// ①state
// class Like extends React.Component {
//   constructor(props) {
//     super(props);
//     //初始化
//     this.state={
//       isLikeMe:false
//     }
//     //将新增方法handleChange的this指向为组件对象，需要在这里使用bind（或者在render中）
//     this.handleChange = this.handleChange.bind(this);//bind返回的是一个新函数
//   }
//   handleChange(){//更新状态
//     const isLikeMe=!this.state.isLikeMe;
//     this.setState({isLikeMe})
//   }
//   render() {
//     // 读取状态（es6写法）
//     const {isLikeMe} =this.state;
//     return (
//       <div
//         onClick={this.handleChange}
//         // onClick={this.handleChange.bind(this)}(效率比较低)
//       >
//         <h1>{isLikeMe?"是的是like me":"不是不like me"}</h1>
//       </div>
//     );
//   }
// }
// ReactDOM.render(
//   <Like/>,
//   document.getElementById('root')
// )

// ②props
// function Person(props) {
//   return (
//     <ul>
//       <li>姓名：{props.name}</li>
//       <li>姓别：{props.sex}</li>
//       <li>年龄：{props.age}</li>
//     </ul>
//   )
// }
// const person01={
//   name:"A",
//   sex:"男",
//   age:43
// }
// const person02={
//   name:"A"
// }
// //使用默认属性
// Person.defaultProps={
//   sex:"女",
//   age:1
// }
// //对属性值的类型和必要性做出规定(需要npm install prop-types并且import PropTypes from 'prop-types')
// Person.propTypes={
//   name:PropTypes.string.isRequired,
//   age:PropTypes.number
// }
// ReactDOM.render(
//   <Person {...person02}/>,
//   document.getElementById('root')
// );

// ③refers（例子：两个文本框的+一个按钮的事件处理）
// class Co extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.showInput = this.showInput.bind(this);
//     this.handleBlur = this.handleBlur.bind(this);
//   }
//   showInput(){
//     // 老式做法
//     // const input = this.refs.mainContent;
//     // alert(input.mainContent);
//     // 箭头函数式做法
//     alert(this.input.value)
//   }
//   handleBlur(event){
//     alert(event.target.value);
//   }
//   render() {
//     return (
//       <div>
//         {/*老式做法，ref相当于id的用处*/}
//         {/*<input type={"mainContent"}/>*/}
//         {/*箭头函数里第一个input就是指标签元素的input*/}
//         <input type={"text"} ref={input=>this.input=input}/>
//         <br/>
//         <button onClick={this.showInput}>请输入</button>
//         <br/>
//         <input type={"text"}
//                placeholder={"失去焦点提示内容"}
//                ref={"subContent"}
//                onBlur={this.handleBlur}
//         />
//       </div>
//     );
//   }
// }
// ReactDOM.render(
//   <Co/>,
//   document.getElementById('root')
// )

                              // 4.组件化编程实例(简单的todolist)
//步骤：
/*
  ①拆分组件
    添加部分：文本框+按钮
    列表部分：展示内容的区域
  ②实现静态组件（无交互和动态数据）
  ③实现动态组件
    实现初始化数据动态显示
    实现交互功能
  注意：
  ①子组件不能直接改变父组件的状态
  ②关于数据的保存，看哪个组件需要该数据
  ③状态在哪个组件，更新状态的行为就应该定义在那个组件

*/

// class App extends React.Component {
//   constructor(props) {//设置两个组件公用的状态
//     super(props);
//     //初始化状态
//     this.state = {
//       todos:['A','B','C']
//     }
//     this.addTodo=this.addTodo.bind(this)
//   }
//   //用于改变组件状态（新增）的方法,子组件Add需要用到
//   addTodo(todo) {
//     const { todos } = this.state;
//     todos.unshift(todo)
//     // 更新状态
//     this.setState({ todos });
//   }
//   render() {
//     const {todos} = this.state;//解构赋值
//     return (
//       <div>
//         <h1>Simple ToDoList</h1>
//         <Add count={todos.length} addTodo={this.addTodo}/>
//         <List todos={todos}/>
//       </div>
//     );   
//   }
// }
// class Add extends React.Component {
//   constructor(props) {
//     super(props);
//     this.addItems = this.addItems.bind(this);
//   }
//   addItems() {
//     //读取输入的数据和检查内容合法性
//     const todo = this.todoInput.value.trim();
//     if (!todo) {
//       return
//     }
//     else {
//       this.props.addTodo(todo);
//     }
//     this.todoInput.value = '';
    
//   }
//   render() {
//     return (
//       <div>
//         <input type="text" ref={input=>this.todoInput=input}/>
//         <button onClick={this.addItems}>add #{this.props.count+1}</button>
//       </div>
//     );
//   }
// }
// Add.propTypes = {
//   count: PropTypes.number.isRequired,
//   addTodo:PropTypes.func.isRequired
// }
// class List extends React.Component {
  
//   render() {
//     const { todos } = this.props;//结构赋值
//     return (
//       <ul>
//         {
//           todos.map((todo, index) => {
//             return (
//               <li key={index}>{todo}</li>
//             );
//           })
//         }
//       </ul>
//     );
//   }
// }
// List.propTypes = {
//   todos:PropTypes.array.isRequired
// }
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

                                      // 5.任务五：组件的表单数据验证
// class LoginForm extends React.Component{
//   constructor(props) {
//     super(props);
//     //方法绑定this
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//     // 初始化状态
//     this.state = {
//       password:''
//     }
//   }
//   handleSubmit(event) {
//     const userName = this.userNameInput.value;
//     console.log(userName);
//     //阻止事件的默认行为:提交
//     event.preventDefault();
//     alert(`UserName:${userName},password:${this.state.password}`);
//   }
//   handleChange(event) {
//     // 读取输入框的值
//     const password = event.target.value;
//     // 更新密码文本框的状态
//     this.setState({ password });
//   }
//   render() {
//     return (
//       //提交两种方式：一个式按钮onClick，一个是form表单的onSubmit
//       <form onSubmit={this.handleSubmit}>
//         {/* 非受控组件 */}
//         用户名：<input type="text" ref={input=>this.userNameInput=input}/>
//         <br />
//         {/* 受控组件 */}
//         密&nbsp;&nbsp;&nbsp;码：<input type="text" value={this.state.password} onChange={this.handleChange}/>
//         <br/>
//         <input type="submit" value="点击提交"/>
//       </form>
//     )
//   }
// }
// ReactDOM.render(
//   <LoginForm />,
//   document.getElementById('root')
// );

                                // 6.组件的生命周期（例子：点击实现渐变）

//  生命周期的理解
  /* ①初始化的时候，constructor()->componentWillMount()->render()->componentDidMount->componentWillUnmount()
     ②状态发生改变的时候，父组件的render()->componentWillReceiveProps()->shouldComponentUpdate()[this.setState()在这里调用]->componentWillUpdate()[this.forceUpdate()在这里调用]->render()->componentDidUpadte->componentWillUnmount()
    初始化和死亡都只执行一次方法
    *第一次初始化渲染显示：ReactDOM.render()，constructor()会创建对象初始化state；componentWillMount()将要插入回调；render()用于插入虚拟DOM回调；componentDidMount()已经插入回调
    *更新：this.setState()；执行componentWillUpdate()，将要更新回调；render()是进行更新；componentDidUpdate()是已经更新回调
    *移除组件的方法
   
   比较重要的生命周期钩子函数：
   render()     初始化渲染或者更新渲染调用
   componentDidMount()      开启监听，发送ajax请求
   componentWillUnmount()     回收工作，比如清理定时器
   componentWillReceieveProps()   
  */
// class Life extends React.Component{
//   constructor(props) {
//     super(props);
//     //初始化状态
//     this.state = {
//       opacity:1
//     }
//     this.handleChange = this.handleChange.bind(this);  
//   }
//   handleChange() {//销毁组件
//     ReactDOM.unmountComponentAtNode(document.getElementById('root'));//移除组件
//   }
//   render() {//下次写最下面
//     const { opacity } = this.state;
//     return (
//       <div>
//         <h1 style={{opacity:opacity}}>{this.props.message}</h1>
//         {/* 点击销毁组件 */}
//         <button onClick={this.handleChange}>不活了</button>
//       </div>
//     );
//   }
//   componentDidMount() {
//     // 启动循环定时器,但是如果一旦点击按钮销毁了组件，会产生内存泄漏
//     this.intervalId=setInterval(function () {
//       let { opacity } = this.state;
//       opacity -= 0.1;
//       if (opacity <= 0) {
//         opacity = 1;
//       }
//       this.setState({ opacity });
//     }.bind(this), 200);
//   }
//   componentWillUnmount(){
//     //清理定时器
//     clearInterval(this.intervalId);
//   }
// }

// ReactDOM.render(
//   <Life message={"React太难了"}/>,
//   document.getElementById('root')
// );


                              // 7.   