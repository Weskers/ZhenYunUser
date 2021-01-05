import ReactDOM from 'react-dom'
import React from 'react'

// 1.组件的理解：类似js函数
function Welcome(props) {//函数组件
  return <h1>Hello,{props.name}</h1>
}
// es6写法
class Welcome2 extends React.Component {//class组件
  render(){
    return <h1>Hello,{this.props.name}</h1>
  }
}
const obj={
  name:"A"
}
Welcome(obj);

// 2.渲染组件
// ①组件自定义
// const ele01=<Welcome name="A"/>;
// //React元素为用户自定义组件时，会将JSX所接收的属性和子组件转换为单个的对象传递给组件，这个对象被称之为props
// ReactDOM.render(
//   ele01,//传入自定义标签，React调用函数组件Welcome，并将属性{name:"A"}传入，返回的是<h1>Hello,A</h1>元素
//   document.getElementById('root')//React DOM将DOM高效地更新为<h1>Hello,A</h1>
// );

// 3.组件书写注意
// React会将以小写字母开头的组件视为原生DOM标签，而大写字母开头的组件则代表一个组件 

// 4.组合组件
// 组件可以在其输出中引用其他的组件，比如按钮，表单，对话框，甚至整个屏幕的内容
function App() {
  return (
    <div>
      <Welcome name="a"/>
      <Welcome name="b"/>
      <Welcome name="c"/>
    </div>
  )
}
ReactDOM.render(
  <App/>,
  document.getElementById('root')
)

// 5.提取组件（将组件拆分为更小的组件）

// 6.props的只读性：所有的React组件都必须像纯函数一样保护其props不被更改
// 所谓纯函数比如
function pureFun(params) {
  return params;
}
// 不纯函数比如
function notPure(params) {
  params+=params;//更改了自己的入参
}