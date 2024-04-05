import { useEffect } from "react";

/**
 * 在组件挂载时执行回调函数
 * @param {Function} onMount - 组件挂载时执行的回调函数
 * @author TalesXiaoxin
 */
function useMount(onMount: () => any) {
    useEffect(() => {
        onMount && onMount();
    }, [])
}

export default useMount;