import ReactDOM from 'react-dom'
import React from 'react'

// React 事件的命名采用小驼峰式（camelCase），而不是纯小写。
// 使用 JSX 语法时你需要传入一个函数作为事件处理函数，而不是一个字符串。

// 1.一般的传统HTML的事件处理
      {/* <button onclick="activateLasers()">
        Activate Lasers
      </button> */}

      // React中的事件处理
      {/* <button onClick={activateLasers}>
        Activate Lasers
      </button> */}
// 2.在 React 中另一个不同点是你不能通过返回 false 的方式阻止默认行为,而是必须显式的使用 preventDefault
// 一般HTML
      {/* <a href="#" onclick="console.log('The link was clicked.'); return false">
        Click me
      </a> */}
// React
      // function ActionLink() {
      //   function handleClick(e) {
      //     e.preventDefault(); 
      //     console.log('The link was clicked.');
      //   }

      //   return (
      //     <a href="#" onClick={handleClick}>
      //       Click me
      //     </a>
      //   );
      // }