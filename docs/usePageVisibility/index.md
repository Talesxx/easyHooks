---
title: usePageVisibility
sidebar_label: usePageVisibility
---

usePageVisibility 页面可见性的钩子

```jsx preview
import { usePageVisibility } from 'easy-hooks';
import { useState,useEffect } from "react";
import styles from './index.module.less';
// import noop from './usage.js';

export default function App () {
    const [visible, getVisible]  = usePageVisibility(0);
    const [hiddenNum, setHiddenNum]  = useState(0);
    useEffect(()=>{
      if(!visible)setHiddenNum((old)=>old+1)
    },[visible])
  return (
    <div className={styles.usageContainer}>
        页面当前状态: {visible?"可见":"不可见"}<br/>
        页面被隐藏的次数:{hiddenNum}
    </div>
  )
}
```
