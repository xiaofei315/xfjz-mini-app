import { useEffect, useRef } from "react";
import {createPortal} from 'react-dom'

export const Portal: React.FC = ({ children }) => {
    // 创建一个 container 节点，作为 portal 的容器节点
    let containerRef = useRef<HTMLElement | null>(null);
  
    if (!containerRef.current) {
      containerRef.current = document.createElement("View");
      // 将 container 节点添加到 document.body
      document.body.appendChild(containerRef.current);
    }
  
    // 当组件销毁时，移除 container 节点
    useEffect(() => {
      return function cleanup() {
        if (containerRef.current) {
          document.body.removeChild(containerRef.current);
        }
      };
    }, []);
  
    return createPortal(children, containerRef.current);
  };


  