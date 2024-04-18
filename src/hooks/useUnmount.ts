import { useEffect } from "react";

/**
 *  在组件卸载时执行回调函数
 * @param {Function} onUnmount - 在组件卸载时执行回调函数
 * @author TalesXiaoxin
 */
function useUnmount(onUnmount: () => any) {

    useEffect(() => {
        return () => {
            onUnmount && onUnmount();
        }
    }, [])
}



export default useUnmount;
