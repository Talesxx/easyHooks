---
title: useMount
sidebar_label: useMount
---

useMount组件挂在时的钩子

```jsx preview
import { useMount } from 'easy-hooks';
import { useState } from "react";
import styles from './index.module.less';
// import noop from './usage.js';

export default function App () {
    const  [state, setState]  = useState(0);
    useMount(()=>{
        setState(1);
    })

  return (
    <div className={styles.usageContainer}>
        组件初始化挂载后将state改变为1<br/>
        state: {state}
    </div>
  )
}
```
