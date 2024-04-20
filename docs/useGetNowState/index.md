---
title: useGetNowState
sidebar_label: useGetNowState
---

### useGetNowState 在定时器中的使用
useGetNowState 在 导出的 getState()始终是获取到state最新设置的状态,它是同步的你可以放心使用它
定时器设置state每秒增加1;

```jsx preview
import { useGetNowState,useMount } from 'tales-easy-hooks';
import { useState } from "react";
import styles from './index.module.less';

export default function App () {
    const  [state, setState,getState]  = useGetNowState(0);
    useMount(()=>{
      setInterval(()=>{ 
        setState(getState()+1);
        // console.log("useGetNowState 在 定时器中使用 getState()始终是获取到state最新设置的状态,它是同步的你可以放心使用它  getState-->",getState())
      },1000)
    });

  return (
    <div className={styles.usageContainer}>
        state: {state}
    </div>
  )
}
```




### useGetNowState 在 延时器中使用

通过两次延时的方式修改state

```jsx preview
import { useGetNowState,useMount } from 'easy-hooks';
import { useState } from "react";
import styles from './index.module.less';

export default function App () {
    const  [state, setState,getState]  = useGetNowState(0);
    const  [one,setOne] =useState("");
    const  [two,setTwo] =useState("");

    useMount(()=>{
      setTimeout(() => {
        setState(getState()+1);
        // console.log("useGetNowState 在 延时器中使用 getState()始终是获取到state最新设置的状态,它是同步的你可以放心使用它 当前获取到的state应该是1 getState-->",getState())
        setOne(getState())
        setTimeout(() => {
          setState(getState()+1);
          // console.log("useGetNowState 在 延时器中使用 getState()始终是获取到state最新设置的状态,它是同步的你可以放心使用它 当前获取到的state应该是2 getState-->",getState())
          setTwo(getState());
        }, 1000);
      }, 1000);
    });

  return (
    <div className={styles.usageContainer}>
        state: {state}<br/>
        等待1秒<br/>
        第一次修改后立即getState获取到的值 {one}<br/>
        再等待1秒<br/>
        第二次修改后立即getState获取到的值 {two}<br/>
    </div>
  )
}
```





### setState依旧支持接受函数的方式修改State 
useGetNowState导出的 setState依旧支持接受函数的方式修改State
定时器设置state每秒增加1;
```jsx preview
import { useGetNowState,useMount } from 'easy-hooks';
import { useState } from "react";
import styles from './index.module.less';

export default function App () {
    const  [state, setState,getState]  = useGetNowState(0);
    useMount(()=>{
      setInterval(()=>{ 
        setState((old)=>old+1);
      },1000)
    });

  return (
    <div className={styles.usageContainer}>
        state: {state}
    </div>
  )
}
```


### 陷阱 🚩 不要在渲染期间使用getState()
本质上 getState()是 ()=>ref.current; <br/>
具体原因请访问
[useRef](https://react.docschina.org/reference/react/useRef#)