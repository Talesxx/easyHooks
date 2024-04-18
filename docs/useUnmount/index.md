---
title: useUnmount
sidebar_label: useUnmount
---

useUnmount 组件即将卸载前钩子

```jsx preview
import { useUnmount } from 'easy-hooks';
import { useState } from "react";
import styles from './index.module.less';

function One({setText}) {
    useUnmount(()=>{
        setText("组件1被卸载了");
    })
  return (
    <div>
      我是组件1
    </div>
  )
}


function Two({setText}) {
    useUnmount(()=>{
        setText("组件2被卸载了");
    })

  return (
    <div>
      我是组件2
    </div>
  )
}



export default function App () {
    const  [text, setText]  = useState("");
    const  [showOne, setShowOne]  = useState(true);
    const  [showTwo, setShowTwo]  = useState(true);
    useUnmount(()=>{
        
    })

  return (
    <div className={styles.usageContainer}>
      {showOne&&<One setText={setText}/>}<button onClick={()=>{setShowOne(false)}}>点击卸载组件1</button><br/>
      {showTwo&&<Two setText={setText}/>}<button onClick={()=>{setShowTwo(false)}}>点击卸载组件2</button><br/>
      <br/>
      谁被卸载了:{text}
    </div>
  )
}
```
