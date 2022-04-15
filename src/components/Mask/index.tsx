import { View } from '@tarojs/components';
import ReactDOM from 'react-dom';
import React, { useEffect, useRef } from 'react';

const maskStyle = `{
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 10000,
}`;
const Mask: React.FC = ({ children }) => {
  const containerRef = useRef<HTMLElement | null>(null);
  if (!containerRef.current) {
    containerRef.current = document.createElement('View');
    document.body.appendChild(containerRef.current);
  }
  useEffect(() => {
    return () => {
      if (containerRef.current) {
        document.body.removeChild(containerRef.current);
      }
    };
  }, []);
  return ReactDOM.createPortal(
    <View style={maskStyle}>{children}</View>,
    containerRef.current
  );
};

export default Mask;
