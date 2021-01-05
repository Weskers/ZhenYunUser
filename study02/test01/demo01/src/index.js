import ReactDOM from 'react-dom'
import React from 'react'

//根节点
// const ele01 = <h1>Hello!</h1>
// ReactDOM.render(ele01,document.getElementById('root'));

//如何更新已渲染的元素
// React元素是不可变的对象，一旦被创建就无法更改其子元素或者属性，一个元素代表的是某个特定时刻的UI
function tick() {
  const ele02 = (
    <div>
      <h1>Caution!</h1>
      <h1>The time is {new Date().toLocaleTimeString()}</h1>
    </div>
  );
  ReactDOM.render(ele02,document.getElementById('root'));
}
setInterval(tick,500);

//React只更新它需要更新的部分，上面的例子中只更新了对应时间的h1标签内容，即文本节点