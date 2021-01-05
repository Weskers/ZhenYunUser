import React from 'react'
import ReactDom from 'react-dom'

// 1.在JSX中嵌入表达式
const name='My Friends!';
const obj={
  name:"A",
  age:12
};
function fun01(str){
  return str+"Successful!";
}
function fun02(){
  return "Successful!";
}
const element01=<h1>Hello,{name}</h1>;
const element02=<h1>The result is {1+1}</h1>;
const element03=<h1>
  The Object's name is {obj.name},<br></br>;
  The Object's age is {obj.age}</h1>;
const element04=<h1>The function01 result is {fun01("sasds")}</h1>;
const element05=<h1>The function02 result is {fun02()}</h1>;

// 2.JSX也是一个表达式，可以在if语句和for循环代码块中使用，在编译后变成普通的js对象
function getGreeting(user) {
  if(user=="卡仕达"){
    return <h1>Hello,{fun01("阿斯顿")}</h1>;
  }
    return <h1>Hello,Stranger</h1>;
}
const element06=<div>{getGreeting("卡仕达")}</div>;
const element07=<div>{getGreeting(obj)}</div>;

// 3.JSX的特定属性
// import img512 from './logo512';//图片路径在src下(基本上不存在)
// const user={
//   avatarUrl:img512
// }
const element08=<div tabIndex="0">asdasd</div>;//你可以通过使用引号，来将属性值指定为字符串字面量
//使用大括号，来在属性值中插入一个 JavaScript 表达式
const element09=<img src="http://localhost:3000/logo192.png" alt=""></img>;//图片路径在public下
// const element10=<img src='./logo512.png' alt=""></img>

// 4.JSX标签属性注意事项
// *所有的属性都是驼峰命名的；
// *class 属性 改为 className；
// *for 属性 改为 htmlFor；
// *colspan 属性 改为 colSpan；
// 注释{/* */}

// 5.使用JSX指定子元素
const element11=<img src="http://localhost:3000/logo192.png" alt="" />//如果标签没有内容，使用单标签方式闭合标签
const element12=(
  <div>
    <h1>Hello</h1>
    <h2>Nice to meet you!</h2>
  </div>
);

// 6.JSX可以防止XSS跨站脚本攻击，因为在渲染输入内容前，默认会进行转义，以确保在应用中不会出现并非自己明确编写的内容
// const title=response.potentiallyMaliciousInput;
// const element13=<h1>{title}</h1>

// 7.JSX表示对象
// Bable会将JSX转译为React.creatElement()函数调用
const element14=(
  <h1 className="greeting">
    Hello!
  </h1>
);//等价于
const element15=React.createElement(
  'h1',
  {className:'greeting'},
  'Hello!'
);


ReactDom.render(
  // element01,
  // element02,
  // element03,
  // element04,
  // element05,
  // element06,
  // element07,
  // element08,
  // element09,
  // element10,
  // element11,
  element12,  
  document.getElementById('root')
)