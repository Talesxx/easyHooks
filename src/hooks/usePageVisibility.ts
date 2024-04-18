import { useEffect } from "react";
import useGetNowState from "./useGetNowState";

/**
 * 用于追踪页面的可见性状态。
 * 页面可见性状态根据 document.visibilityState 来确定。
 * @returns [visible,getVisible]
 * @author TalesXiaoxin
 */
function usePageVisibility() {
   const [visible, setVisible, getVisible] = useGetNowState<boolean>(window.document.visibilityState === "visible");
   useEffect(() => {
      window.document.addEventListener("visibilitychange", () => {
         setVisible(window.document.visibilityState === "visible");
      })
      return () => {
         window.document.removeEventListener("visibilitychange", () => {
            setVisible(window.document.visibilityState === "visible");
         })
      }
   }, [])
   return [visible, getVisible]
}



export default usePageVisibility;
